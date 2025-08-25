// src/hooks/useAniReveal.js
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAniReveal(rootRef) {
  useLayoutEffect(() => {
    if (!rootRef?.current) return;

    // root 내부 이미지 로드 대기
    const waitForImages = () =>
      new Promise((resolve) => {
        const root = rootRef.current;
        if (!root) return resolve();
        const imgs = Array.from(root.querySelectorAll('img'));
        const pending = imgs.filter((img) => !img.complete);
        if (pending.length === 0) return resolve();
        let done = 0;
        const onSettled = () => ++done >= pending.length && resolve();
        pending.forEach((img) => {
          img.addEventListener('load', onSettled, { once: true });
          img.addEventListener('error', onSettled, { once: true });
        });
      });

    const setup = () => {
      const ctx = gsap.context(() => {
        const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

        const animateFrom = (elem) => {
          if (elem.dataset.__revealed === '1') return; // 1회만
          elem.dataset.__revealed = '1';

          gsap.set(elem, { x: 0, y: 100, autoAlpha: 0 });
          gsap.to(elem, {
            duration: reduceMotion ? 0 : 1.2,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'expo.out',
            overwrite: 'auto',
          });
        };

        const items = rootRef.current?.querySelectorAll('.ani_reveal') ?? [];
        items.forEach((elem) => {
          gsap.set(elem, { autoAlpha: 0 }); // 초기 깜빡임 방지
          ScrollTrigger.create({
            trigger: elem,
            start: 'top 85%',
            onEnter: () => animateFrom(elem),
            onRefresh: (self) => {
              if (self.isActive) animateFrom(elem);
            },
            once: true,
          });
        });

        ScrollTrigger.refresh(); // 위치 재계산
      }, rootRef);

      return () => ctx.revert();
    };

    let cleanup = () => {};

    // 이미지 → 폰트 완료 후 세팅
    waitForImages().then(() => {
      const whenFonts = document.fonts?.ready ?? Promise.resolve();
      whenFonts.then(() => {
        cleanup = setup();
      });
    });

    // 최종 load 시점에도 한 번 더 재계산
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad, { once: true });

    return () => {
      window.removeEventListener('load', onLoad);
      cleanup();
    };
  }, [rootRef]);
}
