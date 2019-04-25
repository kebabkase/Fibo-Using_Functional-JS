// elegant(in my opinion) sum of fibonacci series of any length using functional JS
 
// generate fibonnaci sequence of given length
const generateFibo = num => {
  
  let fiboSeq = [];
  //initial seed of first two fibo numbers
  fiboSeq.push(0);
  fiboSeq.push(1);
  /*
    I understand using for loop reduces the functional nature of the code,
    but I could not construct fibo array using forEach (Any assistance is appreciated)
  */
  for(let i = 1 ; i < num - 1; i++){
    fiboSeq.push(fiboSeq[i-1] + fiboSeq[i]);
  }

  return fiboSeq;
}


// compute sum of fibo series
const generateFiboSum = input => {
  const answer = _.reduce(generateFibo(input),(memo,n) => {
    return memo + n;
  }, 0)
return answer;
}

//User enters required fibo length and receives fibo sum/ fibo sequence as answer.
console.log(generateFibo(5));
console.log(generateFiboSum(5));