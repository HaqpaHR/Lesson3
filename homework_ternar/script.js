'use strickt'

let age = prompt('введите ваш возраст');
let result = 
(age>=18) ? 'You can get to PHub':
(age>=12) ? 'You can go to Youtube' :
(age<=12) ? 'You couldnt go in' :
'you wrote incorect age';

alert(result);