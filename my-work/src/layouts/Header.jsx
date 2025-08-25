import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="tablet:px-12 tablet:h-16 fixed inset-0 z-10 flex h-12 w-full items-center px-4">
        <h1 className="transition-color text-primary realtive -skew-x-10 tablet:text-2xl text-xl font-bold tracking-tight">
          <Link to="/">@yeaji.kim</Link>
        </h1>
      </header>
    </>
  );
}
