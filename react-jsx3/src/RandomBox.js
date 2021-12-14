import styled from "styled-components";

const styledRandomBox = styled.div`
  width: 500;
  height: 300;
  background-color: ${(props) => props.color};
  text-align: center;
  padding-top: 100;
  color: white;
`;

const styledH2 = styled.h2`
  font-size: ${(props) => props.fontSize};
`;

const RandomBox = ({ color, fontSize }) => (
  <styledRandomBox color={color}>
    <styledH2 fontSize={fontSize}> Random Box </styledH2>
  </styledRandomBox>
);

export default RandomBox;
