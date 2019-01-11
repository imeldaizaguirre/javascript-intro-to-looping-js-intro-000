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



function doWhileLoop(array) { //ex. num = [1,2,3]
  do {
   array.pop() //removes the last element from array
 //adds 1 to the counter

 } while (array.length > 0);//checks to see if its true

}
