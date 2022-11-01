const input = +prompt('Enter any number below:');

if (input > 0) {
    alert('1. Your number is bigger than zero. Congrats!');
} else if (input === 0) {
    alert('0? Seriously?');
} else if (input < 0) {
    alert('-1. That is untrivial, you know!');
}