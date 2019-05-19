namespace MyMath {
    const PI = 3.142;
    
    export function calcCirc(diam: number): number {
        return diam * PI;
    }

    export function calcRecArea(width: number, height: number): number {
        return width * height;
    }
}

const PI = 3.1419; // no redeclaration error
console.log(MyMath.calcRecArea(10,20));
