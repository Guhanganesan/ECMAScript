var name = "Guhan";
console.log(name.charAt(2));
console.log(name.concat("Ganesan"));
console.log(name.indexOf('a'));
console.log(name.lastIndexOf('u'));
console.log(name.replace('h','g'));
console.log(name.search('G'));
var re = /han/gi;
if("Guhan".re == -1){
    console.log("not available");
}
else{
    console.log("Available");
}
var sl = name.slice(2,5);
console.log(sl);

var sub = name.substring(1,5);
console.log(sub);
name="Guhan Ganesan";
var spl = name.split();
console.log(spl);