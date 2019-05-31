
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

function logging(value: boolean) {
    return value ? logged : ()=>{};
}

// logging is not a decorator. We execute it and then a valid decorator is returned and 'attached'.
@logging(true)
class Car {
    constructor() {
        console.log('Hello from a car');
    }
}


function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant {
    name = "Green Plant"
}

const plant = new Plant();

// forced to cast due to typescript bug
(<any>plant).print();



// Decorator Factory
function editable(value: boolean) {

    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        target;
        propName;
        descriptor.writable = value;
    }
}

class Project {
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    // want to add some meta data to this method to make it non-overwritable
    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function() {
    console.log(2000);
};
project.calcBudget();
