var i = 0;
while (i < 10){
  i++
  console.log(i);
}

for (var a = 10; a > 0; a = a - 1){
  console.log(a);
}

var arr = [1, 2, 3]
var arr2 = [2, 30 ,1]
var arr3 = arr.concat(arr2);
var arr4 = [];

function mergArray(a, b) {
    for(var i=0; i < a.length; i++){
        if(b.indexOf(a[i]) === -1) {
            console.log(a[i])
            b.push(a[i]);
        } else {
            console.log("number already exists")
        }
    }
}

mergArray(arr3, arr4)

console.log(arr3);
console.log(arr4);

// merge two arrays
// find duplicates within the merged array
// remove one of the duplacte items in the array so each item is unique

/*var arr = [1, 2, 3]
var arr2 = [2, 30 ,1]

function mergeArray (){
  var x = [];
  for ()
}*/
