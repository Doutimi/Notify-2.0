type HeaderProps = {
  // link: string;
  activeTab:"bills"|"appointments"|"home"
};

export function Header({ activeTab }: HeaderProps) {
  let homeHref=activeTab!=="home"?"/":undefined
  let billsHref=activeTab!=="bills"?"/bills":undefined
  let appointmentsHref=activeTab!=="appointments"?"/appointments":undefined
  
  const activeClassName="bg-[#FDBF8B]"
  return (
    <header>
      <nav>
        <ul>
          <li className={activeTab=="home"?activeClassName:undefined}>
            <a href={homeHref} >
                Home
            </a>
          </li>
          <li className={activeTab=="bills"?activeClassName:undefined}>
            <a href={billsHref}>
                Bills
            </a>
          </li>
          <li className={activeTab=="appointments"?activeClassName:undefined} >
            <a href={appointmentsHref}>Appointments</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
