const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const form = document.getElementById('akanForm');
const result = document.getElementById('result');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const day =
        Number(document.getElementById('day').value);
        const month =
        Number(document.getElementById('month').value);
        const year =
        Number(document.getElementById('year').value);

        const gender 
        = document.querySelector('input[name="gender"]:checked');
    });