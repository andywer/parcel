for (var x = 2, y = 0; y < 5; y++) {}

if (y > 4) {
  var z = 4;
} else {
  var z = 1;
}

if (y > 6) {
  const m = 4;
  console.log(m);
}

function test() {
  var a = 2;
  a = Math.pow(2, a);
  return a;
}

module.exports.x = x;
module.exports.y = y;
module.exports.z = z;
module.exports.test = test;