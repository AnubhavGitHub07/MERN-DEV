let obj = {
    name: "Anubhav",
    age:21,};

    console.log(Object.values(obj));

  const a = {
  name: "Anubhav",
  info: { city: "Kotdwar" }
};

const b = structuredClone(a); // deep copy

b.info.city = "Delhi";

let arr = [ 1 , 2 ,3  , 4 ,5];


console.log(a.info.city); // "Kotdwar" 
for(let i = 0 ; i<5 ; i++){

}


for(let num of arr){

}

arr.forEach(n => console.log(n));



function sum(...nums){
  return nums.reduce((a,b) => a + b);
}

console.log(sum(1,2,3,4))