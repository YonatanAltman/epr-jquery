console.log("hey");
function func(x) {
    console.log(typeof x, arguments.length);
}
func();                //==> "undefined", 0
func(1);               //==> "number", 1
func("1", "2", "3");   //==> "string", 3


console.log($(".field"));

