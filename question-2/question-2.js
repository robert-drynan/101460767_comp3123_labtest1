//question-2.js

const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = ("{ message: 'delayed success!' }");
            resolve(success);
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            reject(new Error("{ error: 'delayed exception!' }"));
        }, 500);
    });
};

resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));
rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));