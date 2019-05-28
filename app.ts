
class MyMap<T> {

    private mapArray: (string | T)[][] = [];

    setItem(key: string, item: T) {
        const entry = [key, item];
        this.mapArray.push(entry);
    }

    getItem(key: string) {
        return this.mapArray.find( (element) => element[0] === key );
    }

    clear() {
        this.mapArray = [];
    }

    printMap() {
        this.mapArray.forEach(
            element => console.log(element[0], element[1])
        );
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();

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

const fdec = function(target:any){
    console.log('target 0 :', target);
    target.bar = 3;
    return target;
  };
  
  const fdec2 = function(){
    console.log('target 1:');
    return function(target:any){
      console.log('target 2:', target);
      target.bar = 3;
      return target;
    }
  };
  
  @fdec
  @fdec2()
  class Foo {
    static bar: number
  }
  
  
  console.log(Foo.bar);
  console.log(new Foo());

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


function MyClassDecorator() {
    return function (target: Function) {
        Object.seal(target);
        Object.seal(target.prototype);
        //console.log(target);
    };
}

@MyClassDecorator()
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

