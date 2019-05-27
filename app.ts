
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

//Think of the '@' as 'attach' a funciton
@logged
class Person {
    constructor() {
        console.log('Hi');
    }
}

function logging(value: boolean): ( Function | null) {
    return value ? logged : null;
}

// logging is not a decorator. We execute it and then a valid decorator is returned and 'attached'.
@logging(true)
class Car {
    constructor() {
        console.log('Hello from a car');
    }
}
