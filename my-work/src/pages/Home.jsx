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
          <h2 className="break-keep text-2xl font-bold">
            사용자 중심 UI/UX로 직관적이고 몰입감 있는 경험을 만드는 <br className="mo_only" />
            8년차 UI 개발자, 김예지 입니다.
          </h2>

          <div className="tablet:flex-row tablet:justify-start tablet:text-left my-20 flex flex-col items-center justify-center gap-8 text-center">
            <div className="tablet:h-36 tablet:w-36 h-44 w-44 overflow-hidden rounded-[50%]">
              <img src={getImageUrl('profile.png')} alt="Profile" />
            </div>
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
            <h2 className="text-2xl font-bold tracking-tight">
              Introduce<span className="text-primary">.</span>
            </h2>
            <p className="py-6">
              8년차 UI 개발자로, 현재 글로벌 IMC 마케팅 대행사 PMG KOREA에서 퍼블리싱팀 팀장직을 맡고 있습니다. <br />
              인터랙티브한 애니메이션 구현과 직관적인 UI/UX에 대한 깊은 이해를 바탕으로, 사용자 관점에서 더 나은 서비스를 제공하기 위해
              끊임없이 고민합니다. <br />
              <br />
              다양한 솔루션 구축 경험을 통해 웹 표준 및 크로스 브라우징에 대한 높은 전문성을 갖추고 있으며, 팀원들과 적극적인 소통을 통해
              효율적인 개발 방향을 모색합니다.
              <br />
              <br /> 또한, 학습한 내용을 체계적으로 정리하고 문서화하는 것을 중요하게 생각하여,{' '}
              <a href="https://yejigd.github.io/ccstrap/convention/" target="_blank" className="text-primary font-semibold">
                HTML/CSS(SCSS) 코딩 컨벤션 제작 경험
              </a>
              과 부트스트랩을 참고해 제작한{' '}
              <a href="https://yejigd.github.io/ccstrap/" target="_blank" className="text-primary font-semibold">
                사내 HTML/CSS 기반 프레임워크 제작
              </a>{' '}
              경험 이 있습니다. 이를 바탕으로{' '}
              <a href="https://yejigd.github.io/ccstrap/[PMG]%20Edu_PT.pdf" target="_blank" className="text-primary font-semibold">
                웹페이지 제작 과정을 주제로 전사 교육
              </a>
              을 진행한 경험도 보유하고 있습니다.
            </p>
          </div>
          <div className="tablet:my-25 my-20">
            <h2 className="text-2xl font-bold tracking-tight">
              Core Competence <span className="text-primary">.</span>
            </h2>
            <ul className="tablet:p-8 tablet:gap-y-2 tablet:text-base flex flex-col gap-y-4 break-keep py-6 text-sm">
              <li className="pl-2 -indent-2">- 웹표준과 웹접근성을 고려한 UI 개발 및 재사용 가능한 공통 구조와 스타일 적용</li>
              <li className="pl-2 -indent-2">- SCSS와 Javascript를 활용하여 직관적이고 효율적인 사용자 경험을 제공하는 인터랙션 구현</li>
              <li className="pl-2 -indent-2">- Git을 활용한 체계적인 코드 관리 경험을 바탕으로, 원활한 커뮤니케이션과 협업</li>
              <li className="pl-2 -indent-2">- 다양한 프로젝트 경험과 팀장 경력을 바탕으로 탁월한 커뮤니케이션 및 리더십 역량 보유</li>
            </ul>
          </div>
          <div className="tablet:my-25 my-20">
            <h2 className="text-2xl font-bold tracking-tight">
              Skills <span class="text-primary">.</span>
            </h2>
            <ul className="tablet:p-8 tablet:gap-y-2 flex flex-col gap-y-4 py-6">
              <li className="flex flex-wrap items-start gap-1.5">
                <strong className="tablet:w-30 mr-2 w-full">Front-End</strong>
                <Badge variant="outline">HTML5</Badge>
                <Badge variant="outline">CSS</Badge>
                <Badge variant="outline">SCSS</Badge>
                <Badge variant="outline">TailwindCSS</Badge>
                <Badge variant="outline">Javascript</Badge>
                <Badge variant="outline">jQuery</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Vite</Badge>
                <Badge variant="outline">Storybook</Badge>
              </li>
              <li className="flex flex-wrap items-start gap-1.5">
                <strong className="tablet:w-30 mr-2 w-full">Back-End</strong>
                <Badge variant="outline">PHP</Badge>
                <Badge variant="outline">Codeigniter</Badge>
                <Badge variant="outline">MySql</Badge>
              </li>
              <li className="flex flex-wrap items-start gap-1.5">
                <strong className="tablet:w-30 mr-2 w-full">DevOps</strong>
                <Badge variant="outline">Git</Badge>
                <Badge variant="outline">AWS EC2</Badge>
                <Badge variant="outline">Vercel</Badge>
              </li>
              <li className="flex flex-wrap items-start gap-1.5">
                <strong className="tablet:w-30 mr-2 w-full">Design</strong>
                <Badge variant="outline">Figma</Badge>
                <Badge variant="outline">Adobe Photoshop</Badge>
                <Badge variant="outline">Adobe XD</Badge>
              </li>
            </ul>
          </div>
          <div className="tablet:my-25 my-20">
            <h2 className="text-2xl font-bold tracking-tight">
              Key Projects <span className="text-primary">.</span>
            </h2>
            <ul className="tablet:grid-cols-2 tablet:mt-20 mt-10 grid grid-cols-1 gap-20">
              {datas.map((data, idx) => (
                <li key={data.id} className={`ani_reveal ${idx % 2 !== 0 && 'tablet:mt-30'}`}>
                  <Link to={`/detail/${data.id}`}>
                    <div className="relative mb-4 w-full overflow-hidden pt-[100%]">
                      <img
                        src={getImageUrl(`${data.id}_thb.jpg`)}
                        className="duration-400 hover:scale-107 absolute inset-0 transition-transform"
                      />
                    </div>
                    <div className="text-xl font-bold">{data.title}</div>
                    <p className="my-4 break-keep text-lg font-semibold text-gray-800">{normalizeDesc(data.summary)}</p>
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
            <h2 className="ani_reveal text-2xl font-bold tracking-tight">
              Other Projects <span className="text-primary">.</span>
            </h2>
            <div className="ani_reveal pt-12">
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
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">3M 헬스케어 지출보고 프로그램 제작</div>
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
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">네이버 웨일북 홈페이지 제작</div>
                    <p className="text-sm text-gray-500">2022.01</p>
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
          <div className="tablet:mb-25 mb-20">
            <h2 className="ani_reveal text-2xl font-bold tracking-tight">
              Education<span className="text-primary">.</span>
            </h2>
            <div className="ani_reveal pt-12">
              <div className="tablet:grid-cols-2 tablet:gap-20 grid grid-cols-1">
                <ul>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">프론트엔드 개발을 위한 자바스크립트</div>
                    <p className="text-sm text-gray-500">2022. 11</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">응용SW엔지니어링 향상 HTML5&CSS</div>
                    <p className="text-sm text-gray-500">2017. 11 - 2018. 01</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">응용SW엔지니어링 향상 Javascript</div>
                    <p className="text-sm text-gray-500">2017. 10 - 2017. 11</p>
                  </li>
                  <li className="mb-4">
                    <div className="tablet:text-lg mb-1 text-sm font-bold tracking-tight">[NCS] 인터렉티브 웹디자인</div>
                    <p className="text-sm text-gray-500">2017. 02 - 2017. 07</p>
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
