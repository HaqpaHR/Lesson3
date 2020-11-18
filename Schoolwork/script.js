'use strickt'

let age = prompt('введите ваш возраст');

if (age>=18) {
    alert('You can get to PHub');
} else if (age>=12) {
    alert('You can go to Youtube');
} else {(age<=12||NaN) 
    alert('You couldnt go in or you wrote incorect age');
}