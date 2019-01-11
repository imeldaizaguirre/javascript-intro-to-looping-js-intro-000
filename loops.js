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



function doWhileLoop(array){

  function incrementVariable() {
    i = --array.length;
  }
  do {
    incrementVariable();

  } while (array.length > 0 && incrementVariable());

}
