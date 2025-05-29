const heartBlock = document.querySelector('.heart-block');

// Mapa con la forma del corazón (1 es un corazón, 0 es espacio)
const heartShape = [
  '00100100',
  '01111110',
  '11111111',
  '11111111',
  '01111110',
  '00111100',
  '00011000',
  '00000000'
];

// Generar los corazones dinámicamente
heartShape.forEach((row, rowIndex) => {
  [...row].forEach((cell, colIndex) => {
    if (cell === '1') {
      const heart = document.createElement('div');
      heart.style.left = `${colIndex * 30}px`;
      heart.style.top = `${rowIndex * 30}px`;
      heartBlock.appendChild(heart);
    }
  });
});
