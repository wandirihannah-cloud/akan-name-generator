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

    if (day=="" || month=="" || year=="" ) {
        alert("Please fill in all fields.");
        return;
    }

    if (day < 1 || day > 31) {
        alert("Please enter a valid day (1-31).");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Please enter a valid month (1-12).");
        return;
    }

    if (year < 1000 || year > 9999) {
        alert("Please enter a valid year (4 digits).");
        return;
    }

    if (!gender) {
        alert("Please select a gender.");
        return;
    }
