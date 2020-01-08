// const func = (delay) => {
//     setTimeout( () => {
//         console.log(`delay ${delay}`);
//         func(delay + 1);
//     }, delay * 1000
//     );
// }

// func(1)


const func2 = (delay) => {
    setTimeout( () => {
        console.log(`delay ${delay}00`);
        console.log(`delay ${delay}00`);
        console.log(`delay ${delay}00`);
        console.log(`delay ${delay}00`);
        console.log(`delay ${delay}00`);

        func2(delay + 1);
    }, delay * 100
    );
}

func2(1)
