function first() {
    console.log("first(): factory evaluated");
    return function (target: any, context: ClassMethodDecoratorContext) {
        console.log("first(): called");
    };
}

function second() {
    console.log("second(): factory evaluated");
    return function (target: any, context: ClassMethodDecoratorContext) {
        console.log("second(): called");
    };
}

class ExampleClass {
    count: number = 0;
    @first()
    @second()
    method() {
        console.log("Method executed");
    }
}

if (require.main === module) {
    console.log("Decorators Driver");
    const ec = new ExampleClass();
    ec.method();
}
