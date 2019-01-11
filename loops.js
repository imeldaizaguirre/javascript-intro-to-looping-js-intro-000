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

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array){ //ex. num = [1,2,3]
  do {
   array.pop() //removes the last element from array
   incrementVariable(); //adds 1 to the counter
    
 } while (array.length > 0 && incrementVariable());//checks to see if its true

}
