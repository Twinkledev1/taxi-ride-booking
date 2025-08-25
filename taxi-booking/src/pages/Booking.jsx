import { useState } from "react";

export default function Booking() {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    passengers: "1",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Basic validation:
  // - all fields required
  // - passengers 1..6
  // - date/time not in the past (local)
  const validate = () => {
    const next = {};

    if (!form.pickup.trim()) next.pickup = "Pickup is required";
    if (!form.drop.trim()) next.drop = "Drop-off is required";
    if (!form.date) next.date = "Date is required";
    if (!form.time) next.time = "Time is required";

    const pax = Number(form.passengers);
    if (!pax || pax < 1 || pax > 6) next.passengers = "Passengers must be 1–6";

    // past date/time check
    if (form.date && form.time) {
      const dt = new Date(`${form.date}T${form.time}`);
      const now = new Date();
      if (isNaN(dt.getTime())) {
        next.time = "Invalid date/time";
      } else if (dt < now) {
        next.time = "Choose a future time";
      }
    }

    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    // success — in real app, call API here
    alert("Booking confirmed! 🚖");
    console.log("Booking form:", form);
    // reset
    setForm({
      pickup: "",
      drop: "",
      date: "",
      time: "",
      passengers: "1",
    });
  };

  return (
    <section className="section booking">
      <h2>Book Your Ride</h2>
      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="field">
          <input
            name="pickup"
            type="text"
            placeholder="Pickup Location"
            value={form.pickup}
            onChange={onChange}
            required
            aria-invalid={!!errors.pickup}
          />
          {errors.pickup && <p className="error">{errors.pickup}</p>}
        </div>

        <div className="field">
          <input
            name="drop"
            type="text"
            placeholder="Drop Location"
            value={form.drop}
            onChange={onChange}
            required
            aria-invalid={!!errors.drop}
          />
          {errors.drop && <p className="error">{errors.drop}</p>}
        </div>

        <div className="field">
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={onChange}
            required
            aria-invalid={!!errors.date}
          />
          {errors.date && <p className="error">{errors.date}</p>}
        </div>

        <div className="field">
          <input
            name="time"
            type="time"
            value={form.time}
            onChange={onChange}
            required
            aria-invalid={!!errors.time}
          />
          {errors.time && <p className="error">{errors.time}</p>}
        </div>

        <div className="field">
          <input
            name="passengers"
            type="number"
            placeholder="Passengers (1-6)"
            min="1"
            max="6"
            value={form.passengers}
            onChange={onChange}
            required
            aria-invalid={!!errors.passengers}
          />
          {errors.passengers && <p className="error">{errors.passengers}</p>}
        </div>

        <button type="submit" className="btn">Confirm Booking</button>
      </form>
    </section>
  );
}
