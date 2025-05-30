const heart = document.querySelector('.heart');

const heartShape = [
  [0,1,0,0,0,0,0,1,0],
  [1,1,1,0,0,0,1,1,1],
  [1,1,1,1,0,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,0],
  [0,0,1,1,1,1,1,0,0],
  [0,0,0,1,1,1,0,0,0],
  [0,0,0,0,1,0,0,0,0]
];

function createHeartBlock() {
  for (let row = 0; row < heartShape.length; row++) {
    for (let col = 0; col < heartShape[row].length; col++) {
      if (heartShape[row][col]) {
        const block = document.createElement('div');
        block.className = 'block';
        block.style.left = `${col * 22}px`;
        block.style.top = `${row * 22}px`;
        heart.appendChild(block);
      }
    }
  }
}

createHeartBlock();
