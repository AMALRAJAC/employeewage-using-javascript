//function to calculate daily wage
function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
//function to get employee working hours
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
//constants
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const MAX_HRS_IN_MONTH =160;
const NUM_OF_WORKING_DAYS=20;
const WAGE_PER_HOUR=20;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArray=new Array();
//get total working hours by month or max working hours and store employee hours into array
while (totalEmpHrs<=MAX_HRS_IN_MONTH&&totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    //get random values range fron 0-2
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    //store daily wage into array
    empDailyWageArray.push(calcDailyWage(empHrs));
}
//calculate employee wage
let empWage=calcDailyWage(totalEmpHrs);
console.log("total emp hours="+totalEmpHrs);