import { useLayoutEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import datas from '@/data/workData.json';
import { normalizeDesc, getImageUrl } from '@/utils/utils';

import SplitText from '@components/SplitText/SplitText';
import { useAniReveal } from '@/hooks/useAniReveal';
import Header from '@/layouts/Header';

import { ArrowUpRight } from 'lucide-react';

export default function Detail() {
  const { id } = useParams();
  const workData = datas.find((data) => data.id === id);
  const isVideo = id === 'naver_gstar';

  const root = useRef(null);
  const imgRef = useRef(null);
  const tagsRef = useRef(null);

  useAniReveal(root);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, { scale: 1.1 }, { scale: 1, duration: 1.2, ease: 'power2.out' });
    });
    return () => ctx.revert();
  }, []); // 컴포넌트 마운트 시 1회 실행

  useLayoutEffect(() => {
    if (!workData.tags) return;

    const ctx = gsap.context(() => {
      gsap.from('.tag-item', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 });
    }, tagsRef);

    return () => ctx.revert();
  }, [workData?.tags]);

  return (
    <>
      <Header />
      <main ref={root}>
        <section className="tablet:h-225 relative flex h-[165vw] items-center overflow-hidden">
          <div className="tablet:max-w-320 mx-auto w-full px-6 text-white">
            <h3 className="tablet:mb-7 tablet:text-8xl mb-[6vw] text-[10vw] font-bold leading-[1.4]">
              <SplitText text={workData.title} />
            </h3>
            <div className="tablet:mb-10 tablet:text-4xl mb-[6vw] whitespace-pre-line text-[4.5vw] leading-[1.4]">
              <SplitText text={normalizeDesc(workData.summary)} />
            </div>
            {workData.tags && (
              <ul ref={tagsRef} className="flex gap-3">
                {workData.tags.map((tag, idx) => (
                  <li
                    key={idx}
                    className="tag-item border-1 tablet:text-sm tablet:px-3 tablet:py-1.5 rounded-lg border-white px-2.5 py-1 text-[2.5vw] tracking-tight opacity-70">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div
            className={`absolute inset-0 -z-10 overflow-hidden ${isVideo ? 'after:absolute after:inset-0 after:bg-black after:opacity-70' : ''}`}>
            {isVideo ? (
              <video className="image-cover" autoPlay loop muted playsInline>
                <source src={getImageUrl(`${workData.id}_vis.mp4`)} type="video/mp4" />
              </video>
            ) : (
              <img
                ref={imgRef}
                className="image-cover absolute inset-0"
                src={getImageUrl(`${workData.id}_vis.png`)}
                alt={`${workData.id} 키비주얼 이미지`}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        </section>
        <section className="ani_reveal tablet:mt-40 mt-40 tracking-tight">
          <div className="tablet:max-w-320 mx-auto flex w-full flex-wrap justify-between px-6">
            <div className="tablet:mb-0 mb-16 w-[74%]">
              <p className="tablet:mb-16 mb-10 text-2xl font-semibold">Overview</p>
              <p className="tablet:mb-16 mb-10 text-3xl font-semibold">{workData.summary}</p>
              <p className="break-keep text-base">{workData.description}</p>
            </div>
            <ul className="w-[22%] text-base">
              <li className="mb-10">
                <strong className="mb-4 block">Clinet</strong>
                <span className="text-gray-600">{workData.title}</span>
              </li>
              <li className="mb-10">
                <strong className="mb-4 block">Date</strong>
                <span className="text-gray-600">{workData.date}</span>
              </li>
              <li>
                <strong className="mb-4 block">Link</strong>
                <a href={workData.liveUrl} target="_blank" className="flex items-center gap-1 text-gray-600 hover:underline">
                  바로가기 <ArrowUpRight className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="tablet:py-40 py-0">
          {workData.imgs &&
            workData.imgs.map((img, idx) => (
              <div className="ani_reveal relative w-full overflow-hidden pt-20" key={idx}>
                <img src={getImageUrl(`${workData.id}_${img}`)} className="mx-auto h-auto w-auto max-w-full" />
              </div>
            ))}
        </section>
      </main>
    </>
  );
}
