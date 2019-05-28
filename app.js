"use strict";
<<<<<<< HEAD
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
=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(constructorFn) {
    console.log(constructorFn);
}
//Think of the '@' as 'attach' a funciton
var Person = /** @class */ (function () {
    function Person() {
        console.log('Hi');
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
function logging(value) {
    return value ? logged : null;
}
// logging is not a decorator. We execute it and then a valid decorator is returned and 'attached'.
var Car = /** @class */ (function () {
    function Car() {
        console.log('Hello from a car');
    }
    Car = __decorate([
        logged
    ], Car);
    return Car;
}());
>>>>>>> ba9a4b758a057619039da848fc4fe90d278eefd9
//# sourceMappingURL=app.js.map