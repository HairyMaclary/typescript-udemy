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
class MyMap {
    constructor() {
        this.mapArray = [];
    }
    setItem(key, item) {
        const entry = [key, item];
        this.mapArray.push(entry);
    }
    getItem(key) {
        return this.mapArray.find((element) => element[0] === key);
    }
    clear() {
        this.mapArray = [];
    }
    printMap() {
        this.mapArray.forEach(element => console.log(element[0], element[1]));
    }
}
const numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
const stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
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
const fdec = function (target) {
    console.log('target 0 :', target);
    target.bar = 3;
    return target;
};
const fdec2 = function () {
    console.log('target 1:');
    return function (target) {
        console.log('target 2:', target);
        target.bar = 3;
        return target;
    };
};
let Foo = class Foo {
};
Foo = __decorate([
    fdec,
    fdec2()
], Foo);
console.log(Foo.bar);
console.log(new Foo());
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
function MyClassDecorator() {
    return function (target) {
        Object.seal(target);
        Object.seal(target.prototype);
        //console.log(target);
    };
}
let Greeter = class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
};
Greeter = __decorate([
    MyClassDecorator(),
    __metadata("design:paramtypes", [String])
], Greeter);
//# sourceMappingURL=app.js.map