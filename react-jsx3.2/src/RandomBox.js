const RandomBox = ({ color, fontSize }) => (
  <div style={{ width: 500, height: 300, backgroundColor: color }}>
    <div
      style={{
        textAlign: "center",
        paddingTop: 100,
        color: "white",
      }}
    >
      <h2 style={{ fontSize: ` ${fontSize}px` }}> Random Box </h2>
    </div>
  </div>
);

export default RandomBox;
