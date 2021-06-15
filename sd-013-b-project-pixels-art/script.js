let numberOfLines = 5;
const boardSize = document.getElementById('board-size');
const btn = document.getElementById('clear-board');
const pixelBoard = document.getElementById('pixel-board');
const btnGenerate = document.getElementById('generate-board');
const colors = ['#000000'];

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

function tintPixel(event) {
  const action = event;
  const selectedColor = document.querySelector('.selected');
  action.target.style.backgroundColor = selectedColor.style.backgroundColor;
}

function generatePixel(index, boardLine) {
  for (let pos = 0; pos < numberOfLines; pos += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.addEventListener('click', tintPixel);
    boardLine.append(pixel);
  }
}

function generatePixelBoard() {
  for (let index = 0; index < numberOfLines; index += 1) {
    const boardLine = document.createElement('div');
    generatePixel(index, boardLine);
    pixelBoard.append(boardLine);
  }
}

generatePixelBoard();

function deletePixelBoard() {
  for (let index = 0; index < numberOfLines; index += 1) {
    pixelBoard.lastChild.remove();
  }
}

function generateBoard() {
  if (boardSize.value === '') {
    alert('Board inválido!');
    return;
  }

  deletePixelBoard();

  if (boardSize.value < 5) {
    numberOfLines = 5;
    window.alert('Número mínimo de linhas é 5');
  } else if (boardSize.value >= 5 && boardSize.value <= 50) {
    numberOfLines = boardSize.value;
  } else if (boardSize.value > 50) {
    numberOfLines = 50;
    window.alert('Número máximo de linhas é 50');
  }
  generatePixelBoard();
}

function selecionaCor(event) {
  const action = event;
  const selectedColor = document.querySelector('.selected');
  selectedColor.className = 'color';
  action.target.className = 'selected color';
}

function generateColorPallet() {
  const colorPallet = document.getElementById('color-palette');

  for (let index = 0; index < 4; index += 1) {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorDiv.addEventListener('click', selecionaCor);
    colorPallet.append(colorDiv);
  }
}

generateColorPallet();

function generateColors() {
  const color = document.querySelectorAll('#color-palette .color');
 
  color[0].style.backgroundColor = '#000000';
  color[0].className = 'selected color';

  for (let index = 1; index < 4; index += 1) {
    let newColor = '#';
    const temp = Math.floor(Math.random() * 16777215)
      .toString(16)
      .toString();
    newColor += temp;
    color[index].style.backgroundColor = newColor;
    colors.push(color[index].style.backgroundColor);
  }
}

function checkRepeatColor(index, pos) {
  if (colors[index] === colors[pos] || colors[pos] === '#FFFFFF' || colors[pos] === '') {
    generateColors();
  }
}

function avoidRepeatColor() {
  for (let index = 0; index < colors.length; index += 1) {
    let pos = index + 1;

    for (pos; pos < colors.length; pos += 1) {
      checkRepeatColor(index, pos);
    }
  }
}

avoidRepeatColor();
generateColors();

btn.addEventListener('click', clearBoard);
btnGenerate.addEventListener('click', generateBoard);
