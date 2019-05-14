
//
// Object destructurin
//



// const person = {
//     name: 'KHALID',
//     age: 36,
//     location: {
//         city: 'Maroua',
//         temp: 98
//     }
// };

// const{age, name: firstName = 'Anonymous'} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: tempereture } = person.location

// if (city && tempereture === 0 || tempereture) {
//     console.log(`It is ${tempereture} in the ${city}`);
// }


// const book = {
//     title: 'you do not Know js',
//     author: 'Kalital',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

//
//Array destructuring
//

// const address = ['1299 s amir alm', 'Maroua', '19452'];
//    const [number, city, home] = address;

// console.log(`You are in ${city}`)

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice}`)