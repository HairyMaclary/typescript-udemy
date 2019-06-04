"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
//Think of the '@' as 'attach' a funciton
let Person = class Person {
    constructor() {
        console.log('Hi');
    }
};
Person = __decorate([
    logged,
    __metadata("design:paramtypes", [])
], Person);
function logging(value) {
    return value ? logged : () => { };
}
// logging is not a decorator. We execute it and then a valid decorator is returned and 'attached'.
let Car = class Car {
    constructor() {
        console.log('Hello from a car');
    }
};
Car = __decorate([
    logging(true),
    __metadata("design:paramtypes", [])
], Car);
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
let Plant = class Plant {
    constructor() {
        this.name = "Green Plant";
    }
};
Plant = __decorate([
    logging(true),
    printable
], Plant);
const plant = new Plant();
// forced to cast due to typescript bug
plant.print();
// Decorator Factory
function editable(value) {
    return function (target, propName, descriptor) {
        target;
        propName;
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        target;
        propName;
        const newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
class Project {
    constructor(name) {
        this.projectName = name;
    }
    // want to add some meta data to this method to make it non-overwritable
    calcBudget() {
        console.log(1000);
    }
}
__decorate([
    editable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Project.prototype, "calcBudget", null);
const project = new Project("Super Project");
project.calcBudget();
// project.calcBudget = function() {
//     console.log(2000);
// };
// project.calcBudget();
// while this is decorator you can still use factories with parameter decorators
function printInfo(target, methodName, paramIndex) {
    console.log('Target: ', target);
    console.log('Method Name:', methodName);
    console.log('Parameter Index:', paramIndex);
}
class Course {
    constructor(name) {
        this.name = name;
    }
    printStudentNumbers(mode, printAll) {
        mode;
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    }
}
__decorate([
    __param(1, printInfo),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], Course.prototype, "printStudentNumbers", null);
const course = new Course('Super Course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
// Target:  Object { … }
// Method Name: printStudentNumbers
// Parameter Index: 1
// 10000
// 2000
//# sourceMappingURL=app.js.map