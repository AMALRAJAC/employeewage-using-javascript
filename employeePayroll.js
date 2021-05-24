//calculate daily wage
function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
//calculate total working hours
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
while (totalEmpHrs<=MAX_HRS_IN_MONTH&&totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
}
let empWage=calcDailyWage(totalEmpHrs);
console.log("total emp hours="+totalEmpHrs);
//array helper function
//uc 7A-calculate total employee wage using array for each traversal or reduce method

let totEmpWage=0;
function sum(dailyWage){
    totEmpWage+=dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("UC7A-total  days: "+totalWorkingDays+"total Hrs: "+totalEmpHrs+" empwage: "+totEmpWage);
function totalWages(totalWage,dailyWAge){
    return totalWage+dailyWAge;
}
console.log("UC7A- Emp wage with reduce: "+empDailyWageArray.reduce(totalWages,0));
//uc7B show the day along with daily wage using array maphelper function
let dailyCntr=0;
function mapDayWithWage(dailyWAge){
    dailyCntr++;
    return dailyCntr+" = "+dailyWAge;
}
let mapDayWithWageArray=empDailyWageArray.map(mapDayWithWage);
console.log(mapDayWithWageArray);

//uc7C-show dayswhen full time wage of 160 were earned
function fulltimeWage(dailyWAge){
    return dailyWAge.includes("160");
}
let fullDayWageArray=mapDayWithWageArray.map(mapDayWithWage);
console.log("uc7B-daily wage map");
console.log(mapDayWithWageArray);

//uc7C-show days when full time wage of 160 were earned
function fulltimeWage(dailyWAge){
    return dailyWAge.includes("160");
}
fullDayWageArray=mapDayWithWageArray.filter(fulltimeWage);
console.log("UC7-daily wage filter when full time wage earned");
console.log(fullDayWageArray);
//uc7D-find the first occurance when full time wage was earned using find function
function findFulltimeWage(dailyWAge){
    return dailyWAge.includes("160");
}
console.log("UC 7D- first time full time wage was earned on day: "+mapDayWithWageArray.find(findFulltimeWage));
//uc7E-check if every element of full time wage truely holding full time  wage
function isAllFulltimeWage(dailyWAge){
    return dailyWAge.includes("160");
}
console.log("uc7E-check all the elements haave full time wage"+fullDayWageArray.every(isAllFulltimeWage)  );
//uc7F-check if there is any partTime wage
function isAnyParttimeWage(dailyWAge){
    return dailyWAge.includes("80");
}
console.log("uc 7F -check if any parttime wage : "+mapDayWithWageArray.some(isAnyParttimeWage));
//uc7G-find the number of days the employee worked
function totalDaysWorked(numOfDays,dailyWAge){
    if(dailyWAge>0) return numOfDays+1;
    return numOfDays;
}
console.log("UC-7G- number of days employee worked: "+empDailyWageArray.reduce(totalDaysWorked,0));

