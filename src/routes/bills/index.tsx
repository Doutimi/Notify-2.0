import { createFileRoute } from "@tanstack/react-router";

const bills = [
  {
    name: "Rent",
    date: new Date(2024, 12, 1),
  },
  {
    name: "Electricity",
    date: new Date(2024, 11, 4),
  },
  {
    name: "Water",
    date: new Date(2024, 10, 5),
  },
];

const Bills = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">Bills</li>
            <li>
              <a href="../appointments/">Appointments</a>
            </li>
          </ul>
        </nav>
      </header>
      <h2>Bills</h2>
      <section className="container" id="container">
        {bills.map(({ name, date }) => (
          <div className="list-item list-none">
            <span className="bill-name">{name}</span>
            <span className="bill-date">{date.toDateString()}</span>
          </div>
        ))}
      </section>
      <div className="frame container">
        <a href={`${window.location.href}/new`}>
          <button type="button">New Bill</button>
        </a>
      </div>
    </>
  );
};

export const Route = createFileRoute("/bills/")({
  component: Bills,
});
