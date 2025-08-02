let expression = '';
let result = '';
let lastAnswer = '';

function updateDisplay() {
  document.getElementById('expression').innerText = expression;
  document.getElementById('result').innerText = result || '0';
}

function append(char) {
  expression += char;
  updateDisplay();
}

function delChar() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function clearDisplay() {
  expression = '';
  result = '';
  updateDisplay();
}

function calculate() {
  try {
    result = eval(expression);
    lastAnswer = result;
  } catch {
    result = 'Error';
  }
  updateDisplay();
}

function useAns() {
  expression += lastAnswer;
  updateDisplay();
}

function sqrt() {
  try {
    result = Math.sqrt(eval(expression));
    lastAnswer = result;
    updateDisplay();
  } catch {
    result = 'Error';
    updateDisplay();
  }
}

function changeSign() {
  if (expression) {
    try {
      let value = eval(expression);
      expression = (-value).toString();
      updateDisplay();
    } catch {
      result = 'Error';
      updateDisplay();
    }
  }
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark');
  body.classList.toggle('light');
}

// Handle keyboard input
document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '%', '.', '(', ')'].includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    delChar();
  } else if (key === 'Delete') {
    clearDisplay();
  } else if (key === 'a') {
    useAns(); // 'a' for ans
  } else if (key.toLowerCase() === 's') {
    sqrt(); // 's' for sqrt
  } else if (key === '~') {
    changeSign(); // '~' for ±
  }
});