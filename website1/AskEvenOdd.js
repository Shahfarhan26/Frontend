const form = document.getElementById('decider-form');
const inputs = Array.from(document.querySelectorAll('.num-input'));
const clearBtn = document.getElementById('clear-btn');
const statusMsg = document.getElementById('status-msg');
const evenList = document.getElementById('even-list');
const oddList = document.getElementById('odd-list');
const evenCount = document.getElementById('even-count');
const oddCount = document.getElementById('odd-count');
function renderChips(container, values, variant, emptyLabel) {
  container.innerHTML = '';
  if (values.length === 0) {
    const hint = document.createElement('span');
    hint.className = 'empty-hint';
    hint.textContent = emptyLabel;
    container.appendChild(hint);
    return;
  }
  values.forEach((num, idx) => {
    const chip = document.createElement('span');
    chip.className = `chip chip--${variant}`;
    chip.style.animationDelay = `${idx * 40}ms`;
    chip.textContent = num;
    container.appendChild(chip);
  });
}
function decideNumbers() {
  const evens = [];
  const odds = [];
  let hasEmpty = false;
  let hasNonInteger = false;
  inputs.forEach((input) => {
    input.classList.remove('is-invalid');
    const raw = input.value.trim();
    if (raw === '') {
      hasEmpty = true;
      input.classList.add('is-invalid');
      return;
    }
    const num = Number(raw);
    if (!Number.isInteger(num)) {
      hasNonInteger = true;
      input.classList.add('is-invalid');
      return;
    }
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  });
  if (hasEmpty || hasNonInteger) {
    statusMsg.textContent = hasNonInteger
      ? 'Please enter whole integers in all 5 boxes.'
      : 'Please fill in all 5 number boxes.';
  } else {
    statusMsg.textContent = '';
  }
  evenCount.textContent = evens.length;
  oddCount.textContent = odds.length;
  renderChips(evenList, evens, 'even', 'No even numbers');
  renderChips(oddList, odds, 'odd', 'No odd numbers');
}
function clearAll() {
  inputs.forEach((input) => {
    input.value = '';
    input.classList.remove('is-invalid');
  });
  statusMsg.textContent = '';
  evenCount.textContent = '0';
  oddCount.textContent = '0';
  renderChips(evenList, [], 'even', 'No even numbers yet');
  renderChips(oddList, [], 'odd', 'No odd numbers yet');
  inputs[0]?.focus();
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  decideNumbers();
});
clearBtn.addEventListener('click', clearAll);
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    input.classList.remove('is-invalid');
    if (inputs.every((el) => !el.classList.contains('is-invalid'))) {
      statusMsg.textContent = '';
    }
  });
});

