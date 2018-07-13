const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

//   X 1 Create a file named map-filter-reduce.js in your js directory and copy the data below into it.

//   X 2 Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// let lang3 = users.languages.length;
let trilng = users.filter(user => user.languages.length > 2);

console.log(trilng);




//   X 3 Use .map to create an array of strings where each element is a user's email address

let emails = users.map(n => n.email);
console.log(emails);




//   X 4 Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user

let  newObjects = users.reduce((accumulation, currentObject) =>{
    // if(currentObject.id === 3)-------------this IF only works for one liners------
accumulation[currentObject.id] = currentObject;
return accumulation;
}, {});
console.log(newObjects);