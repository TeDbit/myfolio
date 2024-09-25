import "./loader.css";
const Loader = (props) => {
  const { size } = props;

  return (
    <div
      id={`${size == "small" ? "small" : "normal"}`}
      className="flex w-screen h-screen justify-center items-center"
    >
      <div className="gridb">
        <div className="brick"></div>
        <div className="brick"></div>
        <div className="brick"></div> <div className="brick"></div>{" "}
        <div className="brick"></div> <div className="brick"></div>
      </div>
    </div>
  );
};

export default Loader;
