import User, {SalaryCalculation, CalcualteAge} from './user.js';
let usr = new User ("Abdulmajeed", 1997, 1950);

console.log(`Welcome back Mr. ${usr.name} \n
            You are ${CalcualteAge(usr.YoB)} years old \n
            Your salary is ${SalaryCalculation(usr.Salary)}`);

