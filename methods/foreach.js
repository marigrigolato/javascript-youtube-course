// method forEach(callback) executes a provided function
// once for each array element

// grades.forEach(function(grade) {
//   // do something with individual grade
//   console.log(grade);
// });

function imprimir(n) {
  console.log(n);
}

const grades = [10, 8, 13];

grades.forEach(imprimir);

// function loopThroughElements(elements) {
//   elements.forEach(function(element) {
//       console.log(element);
//   });
// }

// loopThroughElements(["Sam", "Charlie", "Alex"]); // should log every name to the console

function logUserIds(userIds) {
  userIds.forEach(userId => {
      console.log(userId);
  });
}

logUserIds([10, 15, 14]);
