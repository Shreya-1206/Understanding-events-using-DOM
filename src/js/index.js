const morningBtn = document.querySelector('#morning');
const dayBtn = document.querySelector('#day');
const afternoonBtn = document.querySelector('#afternoon');
const eveningBtn = document.querySelector('#evening');
const nightBtn = document.querySelector('#night');
const greeting = document.querySelector('#greeting');

morningBtn.addEventListener('click', () => (greeting.innerText = 'Good Morning!'));
afternoonBtn.addEventListener('click', () => (greeting.innerText = 'Good Afternoon!'));
eveningBtn.addEventListener('click', () => (greeting.innerText = 'Good Evening!'));
dayBtn.addEventListener('click', () => (greeting.innerText = 'Good Day!'));
nightBtn.addEventListener('click', () => (greeting.innerText = 'Good Night!'));

