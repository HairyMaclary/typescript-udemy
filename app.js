"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.142;
    function calcCirc(diam) {
        return diam * PI;
    }
    MyMath.calcCirc = calcCirc;
    function calcRecArea(width, height) {
        return width * height;
    }
    MyMath.calcRecArea = calcRecArea;
})(MyMath || (MyMath = {}));
var PI = 3.1419; // no redeclaration error
console.log(MyMath.calcRecArea(10, 20));
//# sourceMappingURL=app.js.map