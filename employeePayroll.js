//function to calculate daily wage
function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
//function to get total working hours 
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
let empDailyWageMap=new Map();
let empDailyHrsMap=new Map();
//
while (totalEmpHrs<=MAX_HRS_IN_MONTH&&totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    //store daily wage into array
    empDailyWageArray.push(calcDailyWage(empHrs));
    //store working days and employee hours
    empDailyHrsMap.set(totalWorkingDays,empHrs);
    //store working days and daily wage
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
}
console.log(empDailyWageMap);
//function to find total wage
function totalWages(totalWage,dailyWAge){
    return totalWage+dailyWAge;
}
//let empWage=calcDailyWage(totalEmpHrs);
console.log("uC 8A-employeemap total hours: "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));

//console.log("total emp hours="+totalEmpHrs);
//uc9 arrow function
const findTotal=(totalVal,dailyVal)=>{
return totalVal+dailyVal;
}
let count=0;
let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary=empDailyWageArray.filter(dailyWAge=>dailyWAge>0).reduce(findTotal,0);
console.log("UC9 -empWage with arrow.: "+" Total Hours: "+
    totalHours+" TotalWage: "+totalSalary);
let nonWorkingDays=new Array();
let partWorkingDays=new Array();
let fullWorkingDays=new Array();
//push values into full working day,part time working day and non working day arrays
empDailyHrsMap.forEach((value,key,map)=> {
    if(value==8) fullWorkingDays.push(key);
    else if(value==4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);

    
}); 
console.log("full working days: "+fullWorkingDays);
console.log("partWorking days: "+partWorkingDays);
console.log("non working days: "+nonWorkingDays);