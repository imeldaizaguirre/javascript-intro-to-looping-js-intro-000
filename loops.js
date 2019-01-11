for (var array =0; array < 25; array++) {
  if(array == 1) {
    console.log("I am " + array + " strange loop.")
  }else {
    console.log(`I am ${array} strange loops.`)

  }

}

function whileLoop(number){
  let countdown = number;
  while (countdown > 0) {
    console.log(--countdown);

  }
  return "done";
}

let i = 0;



function doWhileLoop(array) { 
  do {
   array.pop() 
 } while (array.length > 0);
 return array 
}
