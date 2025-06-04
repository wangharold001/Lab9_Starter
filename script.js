
let form = document.querySelector('form');
form.addEventListener('submit', e => {
e.preventDefault();
let output = document.querySelector('output');
let firstNum = document.querySelector('#first-num').value;
let secondNum = document.querySelector('#second-num').value;
let operator = document.querySelector('#operator').value;
output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

class CalculationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CalculationError'; 
    }
  }
  
  class ValidationError extends CalculationError {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
    }
  }
  
  class DivisionByZeroError extends CalculationError {
    constructor() {
      super('Cannot divide by zero');
      this.name = 'DivisionByZeroError';
    }
  }
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    const out = document.querySelector('output');
    const a   = document.querySelector('#first-num').value.trim();
    const b   = document.querySelector('#second-num').value.trim();
    const op  = document.querySelector('#operator').value;
  
    try {
      if (a === '' || b === '')
        throw new ValidationError('both inputs required');
  
      if (isNaN(a) || isNaN(b))
        throw new ValidationError('inputs were nonnumeric');
  
      if (op === '/' && Number(b) === 0)
        throw new DivisionByZeroError();
  
      const result = eval(`${Number(a)} ${op} ${Number(b)}`);
      out.textContent = result;
      console.log('result:', result);
    }
    catch (err) {
      if (err instanceof CalculationError) {
        out.textContent = `calc error: ${err.message}`;
        console.error(err);
      } else {
        throw err;
      }
    }
    finally {
      console.log('calculator submit');
    }
  });
  
let [
logBtn,      
errorBtn,
countBtn, 
warnBtn,  
assertBtn, 
clearBtn,
dirBtn,  
dirxmlBtn,
groupStartBtn,
groupEndBtn,
tableBtn,
startTimerBtn,
endTimerBtn,
traceBtn,
globalErrBtn
]  = document.querySelectorAll('#error-btns > button');

logBtn.addEventListener('click', () => console.log('Console log demo:', student));

errorBtn.addEventListener('click', () => console.error('Console error demo: something went wrong'));

let count = 0;
countBtn.addEventListener('click', () => { count++; console.count(`Count pressed ${count} time(s)`); });

warnBtn.addEventListener('click', () => console.warn('Console warn demo: this is only a warning'));

assertBtn.addEventListener('click', () => {
const a = document.querySelector('#first-num').value;
console.assert(a !== '', 'Console assert demo: first-num input is empty');
});

clearBtn.addEventListener('click', () => console.clear());

dirBtn.addEventListener('click', () => console.dir(document.body));

dirxmlBtn.addEventListener('click', () => console.dirxml(document.body));

groupStartBtn.addEventListener('click', () => {
console.group('Console group demo');
console.log('Inside the group …');
});

groupEndBtn.addEventListener('click', () => console.groupEnd('Console group demo'));

tableBtn.addEventListener('click', () => 
    {
        try{
            if(!Array.isArray(example_table)) {
                throw new Error('Console table demo: example_table is not an array');
            }
        
        console.table(example_table, ['name', 'age', 'grade']);
        }
        catch (error) {
            console.error('Table demo failed:', error.message);
        }
    });

startTimerBtn.addEventListener('click', () => console.time('demo-timer'));

endTimerBtn.addEventListener('click', () => console.timeEnd('demo-timer'));

traceBtn.addEventListener('click', () => console.trace('Console trace demo'));

// Start your code here
// You may move this JS to another file if you wish

window.addEventListener('error', evt => {
    console.log('[GLOBAL] caught:', evt.message, 'at', evt.filename + ':' + evt.lineno);
  });
  
globalErrBtn.addEventListener('click', () => {
    undefinedCall();  //should cause refError, handled by global error handler
  });
  
  