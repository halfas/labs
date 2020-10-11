const pwr = (a, b) => (b === 1 ? a : a * pwr(a, b - 1));
let test = 0;

//halfas - Сергей Гребенюков