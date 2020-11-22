/*
i=0                 //Initialization
Say "hey" if 1<3    //Condition
Increase i by 1     //final-expression

0 "hey"
1 "hey"
2 "hey"
3

for (initialization, condition, final-expression) {
    console.log("hey");
}
*/

testArray = ["item 1", "item 2", "item 3"];

for (var i = 0; i < 3; i++) {
  console.log(testArray[i]);
}
