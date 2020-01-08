// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let counter = 0

const lala = setInterval(
    () => {
      
     console.log('Hello world')
     counter++;
     if(counter === 5) {
      clearInterval(lala);
      console.log("Done");
    }
     
    },1000  
  );

  


//   setTimeout(
//     () => {
//         clearInterval(lala); 
//         console.log('Done');
//     },5000
//     ) 

