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

console.log(a.info.city); // "Kotdwar" 
