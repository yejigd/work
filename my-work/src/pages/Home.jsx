export default function Home() {
  return (
    <>
      <div className="2xl:w-300 mx-auto my-20 font-sans">
        <h1 className="text-2xl font-bold">Hello World!</h1>

        <div className="my-10 flex items-center gap-10">
          <div className="h-40 w-40 rounded-[50%] bg-amber-50"></div>
          <div>
            <div className="text-xl font-bold">홍길동</div>
            <div className="text-sm">Gildong Hong</div>
          </div>
        </div>
      </div>
    </>
  );
}
