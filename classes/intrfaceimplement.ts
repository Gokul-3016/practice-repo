interface IPerson {
    name: string;
    display():void;
}

interface IEmployee {
    empCode: number;
    display():void;
}

class Employee implements IPerson, IEmployee {
    empCode: number;
    name: string;
      
    constructor(empcode: number, name:string) {
        this.empCode = empcode;
        this.name = name;
    }
    
    display(): void {
        console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
    }
}

let per:IPerson = new Employee(100, "Bill");
per.display(); // Name = Bill, Employee Code = 100

let emp:IEmployee = new Employee(200, "kevin");
emp.display(); //Compiler Error: Property 'display' does not exist on type 'IEmployee'