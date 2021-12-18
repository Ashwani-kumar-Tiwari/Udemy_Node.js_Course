// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([7, 4, 1]);
//         reject('Things went wrong!');
//     }, 2000);
// });

// doWorkPromise.then((result) => {
//     console.log('Success', result);
// }).catch((error) => {
//     console.log('Error', error);
// });

//
//                              fulfilled
//                             /
// Promise      -- pending --> 
//                             \
//                              rejected
//

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}


// add(1, 2).then((sum) => {
//     console.log(sum);

//     add(sum, 5).then((res) => {
//         console.log(res);
//     }).catch((e) => {
//         console.log(e);
//     });
// }).catch((e) => {
//     console.log(e);
// });

//         ||
//         ||
//         ||
//        \\//
//         \/

// Promise chaining
add(1, 1).then((sum) => {
    console.log(sum);
    return add(sum, 4);
}).then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
});