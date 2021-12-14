/* eslint-disable jsx-a11y/alt-text */
import img from "./img.jpg";

const PictureCard = () => (
  <div style={{ padding: 5, margin: 5 }}>
    <img
      src={img}
      width={200}
      height={200}
      style={{ objectFit: "cover" }}
    ></img>
    <div> Date: 12/7/2012 </div>
    <div> Like : 77</div>
    <div> Comment : 77 </div>
  </div>
);

export default PictureCard;
