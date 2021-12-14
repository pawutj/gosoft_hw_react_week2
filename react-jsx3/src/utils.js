const colorArray = ["red", "blue", "green", "pink"];

const randomNumber = (r) => Math.floor(Math.random() * (r + 1));

const getRandomColor = () => colorArray[randomNumber(3)];
const getRandomFontSize = () => randomNumber(20) + 20;
export { randomNumber, getRandomColor, getRandomFontSize };
