// factory way of writing code
function createUser(name,score = 0){
    var obj = {};
    obj.name = name;
    obj.score = score;
    obj.increment = () => {return obj.score++};
    obj.decrement = () => {return obj.score--};
    return obj;
}
var prasanth = createUser("prasanth",5);
prasanth
// output is {name: "prasanth", score: 5, increment: ƒ, decrement: ƒ}
prasanth.increment()
prasanth.increment()
prasanth.increment()
prasanth.increment()
prasanth.decrement()
prasanth.decrement()
prasanth.decrement()
prasanth 
// output is {name: "prasanth", score: 6, increment: ƒ, decrement: ƒ}
