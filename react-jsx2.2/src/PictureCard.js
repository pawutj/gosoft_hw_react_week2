/* eslint-disable jsx-a11y/alt-text */
import img from "./img.jpg";

import styled from "styled-components";

const StyledPictureCard = styled.div`
  padding: 5px;
  margin: 5px;
`;

const StyledImage = styled.div`
  background-image: url(${img});
  width: 200px;
  height: 200px;
  background-size: cover;
`;

// const StyledImage = styled.image.attrs({
//   width: 200,
//   height: 200,
//   src: `${img}`,
// })`
//   object-fit: cover;
// `;

const PictureCard = () => (
  <StyledPictureCard>
    <StyledImage />
    <div> Date: 12/7/2012 </div>
    <div> Like : 77</div>
    <div> Comment : 77 </div>
  </StyledPictureCard>
);

export default PictureCard;
