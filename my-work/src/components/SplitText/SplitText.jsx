// SplitText.jsx
import { useLayoutEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './SplitText.scss';

gsap.registerPlugin(ScrollTrigger);

export default function SplitText({ text = '', className = '' }) {
  const root = useRef(null);

  // <br> 또는 \n 기준으로 라인 분할
  const lines = useMemo(() => {
    if (!text) return [];

    return text
      .replace(/\r\n/g, '\n')
      .split(/<br\s*\/?>|\n/gi)
      .map((s) => s.trim())
      .filter(Boolean);
  }, [text]);

  useLayoutEffect(() => {
    let rafId;

    const ctx = gsap.context(() => {
      const elem = root.current;
      ScrollTrigger.create({
        trigger: elem,
        start: '50% 100%',
        toggleClass: { targets: elem, className: 'is_view' },
        once: true,
      });
    }, root);

    rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={root} className={`split reveal ${className}`}>
      {lines.map((line, i) => (
        <div className="split_p" key={i}>
          <span className="split_c">{line}</span>
        </div>
      ))}
    </div>
  );
}
