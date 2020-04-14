// Sort By Numbers ascending order
const numArray = [1, 9, 7, 2, 11, 22];

numArray.sort(function(a, b) {
  return a - b; 
});

console.log(numArray);

// Sort By Numbers descending order

numArray.sort(function(a, b) {
  return b - a;
});

console.log(numArray);

//sort object arrays ascending order by name
const ary = [
  { name: "john", age: 30 },
  { name: "peter", age: 20 },
  { name: "jill", age: 90 }
];

const byName = function(a, b) {
  return a.name > b.name ? 1 : -1; //
};

console.log(ary);

//sort object arrays ascending order by age
ary.sort(byName);

const byAge = function(a, b) {
  return a.age - b.age; 
};

ary.sort(byName);

console.log(ary);

