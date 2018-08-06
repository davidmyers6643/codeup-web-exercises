// const wait = (number) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (number === 1000) {
//                 resolve();
//             } else if (number === 3000) {
//                 resolve();
//             }
//         }, number);
//     });
// };
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



// cleaner approach.

const wait = num => {return new Promise((res, rej) =>
            {setTimeout( res, num);
        });
    };

wait(4000).then(() => console.log('You\'ll see this 1 second after the 3 second log'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// wait(5000).then(() => document.write('DONKEYs'));
wait(5000).then(() => document.getElementById("demo").innerHTML = 'Donkeys!');
wait(5000).then(() => console.log('Donkeys Rule!'));




const getLastEvent = (username) => {
    const token = '480422bc7f13cd0cb048be4e93bd8f8fee6a395a';
    const url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': `token ${token}`}})

};
// this returns date of last PushEvent.
getLastEvent('davidmyers6643')
    .then(response => response.json())
    .then(data => data.filter(bob => bob.type ==='PushEvent'))
    .then(data => console.log(data[0].created_at));

// // this returns date of last event.
    getLastEvent('davidmyers6643')
        .then(response => response.json())
        .then(data => console.log(data[0].created_at));

// // same return because last event was a PushEvent.

// --------------------------second way---------------------------



const getLastEvent2 = (username) => {
    const token = '480422bc7f13cd0cb048be4e93bd8f8fee6a395a';
    const url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': `token ${token}`}})
        .then(response => response.json())
};


// this returns date of last PushEvent.
getLastEvent2('davidmyers6643')

    .then(data => data.filter(events => events.type ==='PushEvent'))
    .then(data => console.log(data[0].created_at));


// // this returns date of last event.
getLastEvent2('davidmyers6643')

    .then(data => console.log(data[0].created_at));
// // same return because last event was a PushEvent.

// ----------------------------------info---------------------------------//


// token// 480422bc7f13cd0cb048be4e93bd8f8fee6a395a

// GET /users/:username/events