//1. concat
var mark1 = [34,67,43,78];
var mark2 = [45,78,76];
var res = mark1.concat(mark2);
console.log(res);

//2. Every
function test(element, index, array)
{
   //console.log(element);
   console.log(index);
   //console.log(array);
   return element<6;
}
var result = [1,2,3,4,5].every(test);
console.log("Every: "+ result);

var result1 = [5,6,7,8].filter(test);
console.log(result1); // we can get array of values less than 6

//foreach 
var marks = [3,5,6,2,3,5,8];
marks.forEach(function(val, index)
{
    console.log("index "+index+" value : "+val);
});

//index of

console.log(marks.indexOf(4)); // 1- if no value is present
console.log(marks.indexOf(6)); // present at index 2

//join 

var result2 = marks.join("=>");
console.log(result2);

// Array map 
function findSquare(x)
{
    return x+x;
}
var result3 = [1,2,3,4].map(findSquare);
console.log(result3);

//push
marks.push(100);
console.log(marks);

//pop

marks.pop()
console.log(marks);

//shift

marks.shift(); // removes first element
console.log(marks);

// unshift
marks.unshift(20);
console.log(marks);

//slice
var data = [1,3,2,5,7,6];
console.log(data.slice(2,5)); // start at 2 and before index 5

//splice
data.splice(0,1,9); 
console.log(data);

/*
Result:-

[
  34, 67, 43, 78,
  45, 78, 76
]
0
1
2
3
4
Every: true
0
1
2
3
[ 5 ]
index 0 value : 3
index 1 value : 5
index 2 value : 6
index 3 value : 2
index 4 value : 3
index 5 value : 5
index 6 value : 8
-1
2
3=>5=>6=>2=>3=>5=>8
[ 2, 4, 6, 8 ]
[
  3, 5, 6,   2,
  3, 5, 8, 100
]
[
  3, 5, 6, 2,
  3, 5, 8
]
[ 5, 6, 2, 3, 5, 8 ]
[
  20, 5, 6, 2,
   3, 5, 8
]
[ 2, 5, 7 ]
[ 9, 3, 2, 5, 7, 6 ]
*/
