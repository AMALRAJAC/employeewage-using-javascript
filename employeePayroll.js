class EmployeePayrollData{
    //property
    id;
    salary;
    //constructor
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
    }
    //getter ans setter method
    get name(){return this._name;}
    set name(name){this._name=name;}
    //method
    toString(){
        const option={year: 'numeric',month: 'long',day: 'numeric'};
        const empDate=this.startDate===undefined ?"undefined" :
        this.startDate.toLocaleDateString("en-US",option);
        return "id="+this.id+",name="+this.name+",salary="+this.salary;

    }

}
let employeePayrollData=new EmployeePayrollData(1,"mark",30000);
console.log(employeePayrollData.toString());
employeePayrollData.name="john";
console.log(employeePayrollData.toString());
