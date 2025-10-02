//question-2.js

const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {'message': 'delayed success!'}
            console.log(success);
        }, 500)
    });
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            try{
                throw new Error("{error: 'delayed exception!'}");
            }catch (e){
                console.error(e);
            }
        }, 500)
    });
}

resolvedPromise()
rejectedPromise()