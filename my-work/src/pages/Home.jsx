import { Smartphone, Mail } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Github from '@components/ui/Github';
import Badge from '@components/ui/Badge';
import datas from '@/data/workData.json';
import { normalizeDesc, getImageUrl } from '@/utils/utils';
import { useAniReveal } from '@/hooks/useAniReveal';
import Header from '@/layouts/Header';

export default function Home() {
  const root = useRef(null);

  useAniReveal(root);

  return (
    <>
      <Header />
      <main ref={root}>
        <div className="tablet:max-w-320 my-26 mx-auto w-full px-6 font-sans">
          <h2 className="text-2xl font-bold">Hello World!</h2>

          <div className="tablet:flex-row tablet:justify-start tablet:text-left my-20 flex flex-col items-center justify-center gap-8 text-center">
            <div className="tablet:h-36 tablet:w-36 h-44 w-44 rounded-[50%] bg-amber-50"></div>
            <div>
              <div className="text-2xl font-bold">김예지</div>
              <div className="text-md text-gray-500">Yeaji Kim</div>
              <ul className="tablet:flex-row tablet:gap-4 mt-2 flex flex-col items-center gap-0">
                <li className="flex items-center gap-2 text-sm text-gray-800">
                  <Smartphone className="w-5" />
                  <a href="tel:010-3085-5671">010-3085-5671</a>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-800">
                  <Mail className="w-5" />
                  <a href="mailto:yejigd@naver.com">yejigd@naver.com</a>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-800">
                  <Github />
                  <a href="https://yejigd.github.io/portfolio/" target="_blank">
                    https://yejigd.github.io/portfolio/
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tablet:my-25 my-20">
            <h2 className="text-xl font-bold tracking-tight">
              Introduce<span className="text-primary">.</span>
            </h2>
          </div>
          <div className="tablet:my-25 my-20">
            <h2 className="text-xl font-bold tracking-tight">
              Core Competence <span className="text-primary">.</span>
            </h2>
            <ul className="tablet:p-8 tablet:gap-y-2 tablet:text-base flex flex-col gap-y-4 break-keep py-6 text-sm">
              <li className="pl-2 -indent-2">- 웹표준, 웹접근성을 고려한 UI 개발, 재사용이 가능한 공통 구조 및 스타일 적용</li>
              <li className="pl-2 -indent-2">- SCSS, Javascript를 활용한 인터렉션 구현</li>
              <li className="pl-2 -indent-2">- Git을 활용한 코드 관리 경험</li>
              <li className="pl-2 -indent-2">- 다양한 업무진행과 리드 경험으로 다져진 커뮤니케이션 스킬과 협업 능력</li>
            </ul>
          </div>
          <div className="tablet:my-25 my-20">
            <h2 className="text-xl font-bold tracking-tight">
              Skills <span class="text-primary">.</span>
            </h2>
            <ul className="tablet:p-8 tablet:gap-y-2 flex flex-col gap-y-4 py-6">
              <li className="flex flex-wrap items-start gap-1.5">
                <strong className="tablet:w-30 mr-2 w-full">Front-end</strong>
                <Badge variant="outline">HTML5</Badge>
                <Badge variant="outline">CSS</Badge>
                <Badge variant="outline">SCSS</Badge>
                <Badge variant="outline">TailwindCSS</Badge>
                <Badge variant="outline">Javascript</Badge>
                <Badge variant="outline">jQuery</Badge>
                <Badge variant="outline">React</Badge>
              </li>
              <li className="flex flex-wrap items-start gap-1.5">
                <strong className="tablet:w-30 mr-2 w-full">Back-end & DB</strong>
                <Badge variant="outline">PHP</Badge>
                <Badge variant="outline">Codeigniter</Badge>
                <Badge variant="outline">MySql</Badge>
              </li>
              <li className="flex flex-wrap items-start gap-1.5">
                <strong className="tablet:w-30 mr-2 w-full">ETC</strong>
                <Badge variant="outline">AWS EC2</Badge>
                <Badge variant="outline">Storybook</Badge>
                <Badge variant="outline">Figma</Badge>
                <Badge variant="outline">Adobe XD</Badge>
              </li>
            </ul>
          </div>
          <div className="tablet:my-25 my-20">
            <h2 className="text-xl font-bold tracking-tight">
              대표적인 프로젝트<span className="text-primary">.</span>
            </h2>
            <ul className="tablet:grid-cols-2 tablet:mt-20 mt-10 grid grid-cols-1 gap-20">
              {datas.map((data, idx) => (
                <li key={data.id} className={`ani_reveal ${idx % 2 !== 0 && 'mt-30'}`}>
                  <Link to={`/detail/${data.id}`}>
                    <div className="relative mb-4 w-full overflow-hidden pt-[100%]">
                      <img
                        src={getImageUrl(`${data.id}_thb.jpg`)}
                        className="duration-400 hover:scale-107 absolute inset-0 transition-transform"
                      />
                    </div>
                    <div className="text-xl font-bold">{data.title}</div>
                    <p className="my-4 text-lg font-semibold text-gray-800">{normalizeDesc(data.summary)}</p>
                    <p className="text-sm text-gray-500">{data.date}</p>
                    {data.tags && (
                      <ul className="mt-6 flex gap-2">
                        {data.tags.map((tag, idx) => (
                          <Badge variant="outline" key={idx} className="text-primary">
                            {tag}
                          </Badge>
                        ))}
                      </ul>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="tablet:my-25 my-20">
            <h2 className="ani_reveal text-xl font-bold tracking-tight">
              참여한 프로젝트<span className="text-primary">.</span>
            </h2>
            <div className="ani_reveal py-16">
              <div className="tablet:grid-cols-2 tablet:gap-20 grid grid-cols-1">
                <ul>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">BAT 디스커버글로 홈페이지 운영</div>
                    <p className="text-sm text-gray-500">2021.05 - 진행중</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">BAT Hyper Pro 브랜드 페이지 제작</div>
                    <p className="text-sm text-gray-500">2024.06</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">Adobe 카카오 체크인 이벤트 제작</div>
                    <p className="text-sm text-gray-500">2024.01 - 08</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">BAT Hyper 런칭 페이지 제작</div>
                    <p className="text-sm text-gray-500">2023.10</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">3M 헬스케어 지출보고서 구축</div>
                    <p className="text-sm text-gray-500">2023.08</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">Aodbe 어도비데이 랜딩페이지 제작</div>
                    <p className="text-sm text-gray-500">2023.07</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">PMG KOREA 홈페이지 제작</div>
                    <p className="text-sm text-gray-500">2023.03</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">BAT Hyper X2 브랜드 페이지 제작</div>
                    <p className="text-sm text-gray-500">2023.02</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">BAT 디스커버글로 홈페이지 리뉴얼</div>
                    <p className="text-sm text-gray-500">2023.01</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">Windsorglobal 홈페이지 제작</div>
                    <p className="text-sm text-gray-500">2022.11</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">Adobe PIS2022 전시회 랜딩 제작</div>
                    <p className="text-sm text-gray-500">2022.08</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">네이버 웨일 홈페이지 제작 및 운영</div>
                    <p className="text-sm text-gray-500">2021.05 - 2022.10</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">BAT Boost Your Xperience Campaign</div>
                    <p className="text-sm text-gray-500">2022.08 - 09</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">BAT Boost the color Campaign</div>
                    <p className="text-sm text-gray-500">2022.05</p>
                  </li>
                </ul>
                <ul>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">3M 컨슈머케어 브랜드 웹사이트 리뉴얼</div>
                    <p className="text-sm text-gray-500">2021.12</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">BAT Influencer Campaign</div>
                    <p className="text-sm text-gray-500">2021.12</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">네이버 웨일 웨일북 홈페이지 제작</div>
                    <p className="text-sm text-gray-500">2021.09</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">닥터주부 쇼핑몰 구축</div>
                    <p className="text-sm text-gray-500">2020.07 - 12</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">실로암디자인 쇼핑몰 리뉴얼</div>
                    <p className="text-sm text-gray-500">2020.08 - 11</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">네이처스팜 쇼핑몰 리뉴얼</div>
                    <p className="text-sm text-gray-500">2020.08</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">3M MRO 폐쇄몰 구축</div>
                    <p className="text-sm text-gray-500">2020.06 - 07</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">제주테크노파크 홈페이지 구축</div>
                    <p className="text-sm text-gray-500">2020.01</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">미림한방병원 홈페이지 구축</div>
                    <p className="text-sm text-gray-500">2020.01</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">BAGCATION 홈페이지 구축</div>
                    <p className="text-sm text-gray-500">2019.02</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">브레인파트너스 홈페이지 구축</div>
                    <p className="text-sm text-gray-500">2019.01</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
