export default class User{
    constructor(name, YoB, Salary){
        this.name=name;
        this.YoB=YoB;
        this.Salary=Salary;
    }
}

//component
export function SalaryCalculation(Salary){
    let amount = Salary * 0.03;
    let NetSalary = Salary - amount; 
    return NetSalary;
}

export function CalcualteAge(YoB){
    let  Age = 2024 - YoB;
    return Age;
}