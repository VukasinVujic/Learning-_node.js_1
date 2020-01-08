const theOneFunc = () => {
    console.log('Hello after 4 seconds');
    setTimeout(theSecondFunc, 4 * 1000);
};

const theSecondFunc = () => {
    console.log('Hello after 8 seconds');
};

// setTimeout(theOneFunc, 4 * 1000);


const hisFunction = arg => {
    console.log(`Hello after ${arg} seconds`);
}

setTimeout(hisFunction, 4 * 1000 , 4 );
setTimeout(hisFunction, 8 * 1000 , 8 );


// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
