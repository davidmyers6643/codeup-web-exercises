const wait = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number === 1000) {
                resolve();
            } else if (number === 3000) {
                resolve();
            }
        }, number);
    });
};
//
// // wait.then(() => console.log('resolved!'));
// // wait.catch(() => console.log('rejected!'));
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
