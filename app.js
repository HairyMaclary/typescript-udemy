"use strict";
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
//# sourceMappingURL=app.js.map