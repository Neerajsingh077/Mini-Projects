const colorDisplayBox = document.querySelector('.colorbox');
const colorInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.b1');
const randomBtn = document.querySelector('.b2');


const colorList = [
    "RED", "GREEN", "BLUE", "YELLOW", "PURPLE", "ORANGE", 
    "PINK", "CYAN", "MAGENTA", "LIME", "TEAL", "INDIGO", 
    "MAROON", "NAVY", "SILVER", "GOLD", "CORAL", "TURQUOISE",
    "AQUA", "BEIGE", "BLACK", "BROWN", "CHOCOLATE", "CRIMSON",
    "DARKBLUE", "DARKCYAN", "DARKGRAY", "DARKGREEN", "DARKKHAKI",
    "DARKORANGE", "DARKVIOLET", "DEEPPINK", "DODGERBLUE", "FIREBRICK",
    "FORESTGREEN", "FUCHSIA", "GRAY", "HOTPINK", "KHAKI", "LAVENDER",
    "LIGHTBLUE", "LIGHTCORAL", "LIGHTGREEN", "LIGHTPINK", "LIGHTSALMON",
    "LIMEGREEN", "MIDNIGHTBLUE", "OLIVE", "PERU", "PLUM", "POWDERBLUE",
    "ROSYBROWN", "ROYALBLUE", "SALMON", "SEAGREEN", "SIENNA", "SKYBLUE",
    "SLATEBLUE", "SPRINGGREEN", "STEELBLUE", "TAN", "TOMATO", "VIOLET", "WHEAT"
];


searchBtn.addEventListener('click', () => {
  const userColor = colorInput.value;
  if (userColor) {
    colorDisplayBox.style.backgroundColor = userColor;
  }
});


randomBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * colorList.length);
  const randomColor = colorList[randomIndex];
  colorDisplayBox.style.backgroundColor = randomColor;
  colorInput.value = randomColor;
});