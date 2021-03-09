import { Calculator } from './calculator';

const calc = new Calculator();

const root = document.getElementById('root');
root.textContent = `1 + 5 = ${calc.add(1, 5)}`;
