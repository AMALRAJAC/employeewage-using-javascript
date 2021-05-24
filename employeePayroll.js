//constants
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
//function it returns employee hours
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
let empHrs=0;
//take random value ranges from 0-2
let empCheck=Math.floor(Math.random()*10)%3;
//function call
empHrs=getWorkingHours(empCheck);
//calculate employee wage
let empWage=empHrs*WAGE_PER_HOUR;
console.log("EMP_WAGE="+empWage);