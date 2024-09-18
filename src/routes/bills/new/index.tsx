import { createFileRoute } from "@tanstack/react-router";

const NewBill = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">
              <a href="../">Bills</a>
            </li>
            <li>
              <a href="../../appointments/index.html">Appointments</a>
            </li>
          </ul>
        </nav>
      </header>
      <h2>New Bill</h2>
      <section className="form-container">
        <form id="myForm">
          <label htmlFor="name">Name of bill</label>
          <input
            className="form-field"
            type="text"
            id="name"
            name="name"
            placeholder="Spotify"
            required
          />
          <br />
          <label htmlFor="amount">Amount due</label>
          <br />
          <input
            className="form-field"
            type="number"
            id="amount"
            name="amount"
            placeholder="1400"
            required
          />
          <br />
          <label htmlFor="date">Due date</label>
          <br />
          <input
            className="form-field"
            type="date"
            id="date"
            name="date"
            required
          />
          <br />
          <label>Recurrence:</label>
          <span>
            <input type="radio" id="yearly" name="frequency" value="Yearly" />
            <label htmlFor="yearly"> Yearly</label>
            <input type="radio" id="monthly" name="frequency" value="Monthly" />
            <label htmlFor="monthly"> Monthly</label>
            <input type="radio" id="weekly" name="frequency" value="Weekly" />
            <label htmlFor="weekly"> Weekly</label>
            <input type="radio" id="none" name="frequency" value="None" />
            <label htmlFor="none"> None</label>
            <br />
          </span>

          <div className="btn_frame container">
            <button type="submit">Save</button>
            <button type="reset">Clear</button>
          </div>
        </form>
      </section>
    </>
  );
};

export const Route = createFileRoute("/bills/new/")({
  component: NewBill,
});
