console.time("Time taken")
console.log('helo vishal')
console.table({num1:1,num2:2})
console.warn("This is warning message")
console.timeEnd("Time taken")

let city = "kolkata"

console.log(city)

console.log("Data type is " + (typeof city))

arr = ['veg','tee','fwer']

arr.forEach(function(element,index,array) {
    console.log(element,array,index)
});

const myobj = {
    name : 'test',
    game : function() {
        return "Mario";
    }
}

console.log(myobj.game())

let a = window;

console.log(a);

