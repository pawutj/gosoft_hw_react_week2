import pknode from "./pikkanode.png";

const Navbar = () => (
  <div
    style={{
      marginTop: 0,
      width: "100%",
      height: 80,
      backgroundColor: "pink",
      padding: 10,
    }}
    className="row"
  >
    <div className="col-md-3">
      <img src={pknode} height={60} />
    </div>
    <div className="col-md-9">
      <h2>PIKKANODE</h2>
    </div>
  </div>
);

export default Navbar;
