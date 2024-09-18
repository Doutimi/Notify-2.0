type HeaderProps = {
  link: string;
};

export function Header({ link }: HeaderProps) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href={link}>Bills</a>
          </li>
          <li className="bg-[#FDBF8B]">Appointments</li>
        </ul>
      </nav>
    </header>
  );
}
