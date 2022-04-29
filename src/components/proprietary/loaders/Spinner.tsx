import "./spinner.css";

const Spinner = () => (
  <div className="lds-roller">
    {Array.from({ length: 8 }).map((_, idx) => (
      <div key={idx} />
    ))}
  </div>
);

export default Spinner;
