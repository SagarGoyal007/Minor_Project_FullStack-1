const stack = document.getElementById('stack');
const pushBtn = document.getElementById('push');
const popBtn = document.getElementById('pop');
const countDisplay = document.getElementById('count');

let count = 0;

function updateDisplay(){
  countDisplay.textContent = count;
  popBtn.disabled = count === 0;
}

pushBtn.onclick = () => {
  const ring = document.createElement('div');
  ring.className = 'ring';
  stack.appendChild(ring);
  count++;
  updateDisplay();
};

popBtn.onclick = () => {
  if(count === 0) return;
  stack.removeChild(stack.lastElementChild);
  count--;
  updateDisplay();
};

updateDisplay();
