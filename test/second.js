const arr = ['a', 'b', 'a', 'c', 'b', 'a'];

const count = {};

arr.forEach((item) => {
  count[item] = (count[item] || 0) + 1;
});

console.log(count); 