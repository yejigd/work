// SplitText.jsx
import { useLayoutEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './SplitText.scss';

gsap.registerPlugin(ScrollTrigger);

/**
 * props
 * - text: "라인1<br>라인2<br>" 혹은 "라인1\n라인2\n"
 * - className: 외부에서 추가 클래스
 */
export default function SplitText({ text = '', className = '' }) {
  const root = useRef(null);

  // <br> 또는 \n 기준으로 라인 분할
  const lines = useMemo(() => {
    if (!text) return [];
    // \n도 지원, 변형된 <br/> 태그까지 모두 매칭
    return text
      .replace(/\r\n/g, '\n')
      .split(/<br\s*\/?>|\n/gi)
      .map((s) => s.trim())
      .filter(Boolean);
  }, [text]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elem = root.current;
      ScrollTrigger.create({
        trigger: elem,
        start: '50% 100%',
        toggleClass: { targets: elem, className: 'is_view' }, // onEnter 대신 toggleClass가 간편
        once: true,
      });
    }, root);

    return () => ctx.revert();
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
