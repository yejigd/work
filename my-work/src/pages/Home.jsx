import { Smartphone, Mail } from 'lucide-react';
import { getImageUrl } from '@/lib/imageMap';
import Badge from '@components/ui/Badge';
import datas from '@/data/workData.json';

export default function Home() {
  return (
    <>
      <div className="2xl:w-280 mx-auto my-20 font-sans">
        <h1 className="text-2xl font-bold">Hello World!</h1>

        <div className="my-20 flex items-center gap-8">
          <div className="h-36 w-36 rounded-[50%] bg-amber-50"></div>
          <div>
            <div className="text-xl font-bold">홍길동</div>
            <div className="text-sm">Gildong Hong</div>
            <ul className="flex items-center gap-2">
              <li className="flex items-center gap-1 text-sm text-gray-800">
                <Smartphone className="w-4" />
                <span>010-0000-0000</span>
              </li>
              <li className="flex items-center gap-1 text-sm text-gray-800">
                <Mail className="w-4" />
                <span>test@pmgasia.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight">Personal Information</h2>
          <ul className="flex flex-col gap-y-2 p-8">
            <li className="flex items-start gap-1.5">
              <strong className="mr-2">Front-end</strong>
              <Badge variant="outline">HTML5</Badge>
              <Badge variant="outline">SCSS</Badge>
              <Badge variant="outline">TailwindCSS</Badge>
              <Badge variant="outline">Javascript</Badge>
              <Badge variant="outline">jQuery</Badge>
              <Badge variant="outline">React</Badge>
            </li>
            <li className="flex items-start gap-1.5">
              <strong className="mr-2">Back-end & DB</strong>
              <Badge variant="outline">PHP</Badge>
              <Badge variant="outline">Codeigniter</Badge>
              <Badge variant="outline">MySql</Badge>
            </li>
            <li className="flex items-start gap-1.5">
              <strong className="mr-2">ETC</strong>
              <Badge variant="outline">AWS EC2</Badge>
              <Badge variant="outline">Storybook</Badge>
              <Badge variant="outline">Default</Badge>
              <Badge variant="outline">Default</Badge>
            </li>
          </ul>
        </div>
        <div className="my-40">
          <h2 className="text-xl font-bold tracking-tight">Personal Information</h2>
          <ul className="mt-20 grid grid-cols-2 gap-20">
            {datas.map((data) => (
              <li key={data.id}>
                <div className="relative w-full overflow-hidden pt-[100%]">
                  <img src={getImageUrl(`${data.id}_thb.jpg`)} className="absolute left-0 top-0 h-full w-full object-cover" />
                </div>
                <div className="text-lg font-bold">{data.title}</div>
                <p>{data.description}</p>
                <p className="text-gray-500">{data.date}</p>
                {data.tags && (
                  <ul className="flex gap-2">
                    {data.tags.map((tag, idx) => (
                      <Badge variant="outline" key={idx} className="text-red-300">
                        {tag}
                      </Badge>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="my-40">
          <h2 className="text-xl font-bold tracking-tight">이전 작업</h2>
          <div className="py-8">
            <div className="grid grid-cols-2 gap-20">
              <ul>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">BAT 디스커버글로 홈페이지 운영</div>
                  <p className="text-sm text-gray-500">2021.05 - 진행중</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">BAT Hyper Pro 브랜드 페이지 제작</div>
                  <p className="text-sm text-gray-500">2024.06</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">Adobe 카카오 체크인 이벤트 제작</div>
                  <p className="text-sm text-gray-500">2024.01 - 08</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">BAT Hyper 런칭 페이지 제작</div>
                  <p className="text-sm text-gray-500">2023.10</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">3M 헬스케어 지출보고서 구축</div>
                  <p className="text-sm text-gray-500">2023.08</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">Aodbe 어도비데이 랜딩페이지 제작</div>
                  <p className="text-sm text-gray-500">2023.07</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">PMG KOREA 홈페이지 제작</div>
                  <p className="text-sm text-gray-500">2023.03</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">BAT Hyper X2 브랜드 페이지 제작</div>
                  <p className="text-sm text-gray-500">2023.02</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">BAT 디스커버글로 홈페이지 리뉴얼</div>
                  <p className="text-sm text-gray-500">2023.01</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">Windsorglobal 홈페이지 제작</div>
                  <p className="text-sm text-gray-500">2022.11</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">Adobe PIS2022 전시회 랜딩 제작</div>
                  <p className="text-sm text-gray-500">2022.08</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">네이버 웨일 홈페이지 제작 및 운영</div>
                  <p className="text-sm text-gray-500">2021.05 - 2022.10</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">BAT Boost Your Xperience Campaign</div>
                  <p className="text-sm text-gray-500">2022.08 - 09</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">BAT Boost the color Campaign</div>
                  <p className="text-sm text-gray-500">2022.05</p>
                </li>
              </ul>
              <ul>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">3M 컨슈머케어 브랜드 웹사이트 리뉴얼</div>
                  <p className="text-sm text-gray-500">2021.12</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">BAT Influencer Campaign</div>
                  <p className="text-sm text-gray-500">2021.12</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">네이버 웨일 웨일북 홈페이지 제작</div>
                  <p className="text-sm text-gray-500">2021.09</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">닥터주부 쇼핑몰 구축</div>
                  <p className="text-sm text-gray-500">2020.07 - 12</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">실로암디자인 쇼핑몰 리뉴얼</div>
                  <p className="text-sm text-gray-500">2020.08 - 11</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">네이처스팜 쇼핑몰 리뉴얼</div>
                  <p className="text-sm text-gray-500">2020.08</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">3M MRO 폐쇄몰 구축</div>
                  <p className="text-sm text-gray-500">2020.06 - 07</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">제주테크노파크 홈페이지 구축</div>
                  <p className="text-sm text-gray-500">2020.01</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">미림한방병원 홈페이지 구축</div>
                  <p className="text-sm text-gray-500">2020.01</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">BAGCATION 홈페이지 구축</div>
                  <p className="text-sm text-gray-500">2019.02</p>
                </li>
                <li className="mb-3">
                  <div className="mb-1 text-sm font-bold tracking-tight">브레인파트너스 홈페이지 구축</div>
                  <p className="text-sm text-gray-500">2019.01</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
