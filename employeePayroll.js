//function to calculte daily wage
function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
// function to get employee working hours
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
let empDailyHrsAndWageArray=new Array();
//
while (totalEmpHrs<=MAX_HRS_IN_MONTH&&totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    //store values into array by overriding toSting method
    empDailyHrsAndWageArray.push({
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage:calcDailyWage(empHrs),
        toString(){
            return '\nDay'+this.dayNum+'=>working Hours is '+this.dailyHours+'  And Wage Earned = '+this.dailyWage
        
        },
    });
}

console.log("UC10 showing Daily Hours Worked and Wage Earned: "+empDailyHrsAndWageArray);
//calculating ttal wages and total hours worked
let totalWages=empDailyHrsAndWageArray.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyWage>0).reduce((totalWage,dailyHrsAndWage)=>totalWage+=dailyHrsAndWage.dailyWage,0);
let totalHours=empDailyHrsAndWageArray.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyWage>0).reduce((totalHours,dailyHrsAndWage)=>totalHours+=dailyHrsAndWage.dailyHours,0);
console.log("UC11A total Hours: "+totalHours+" Total Wages: "+totalWages);
process.stdout.write("UC 11B Logging full work days")
//show the full working days using for each method
empDailyHrsAndWageArray.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==8).forEach(dailyHrsAndWage=>process.stdout.write(dailyHrsAndWage.toString()));
//show parttime working days using map reduce to String array 
let partWorkingDayStrArray=empDailyHrsAndWageArray.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==4).map(dailyHrsAndWage=>dailyHrsAndWage.toString());
console.log("UC11 c part working days string: "+partWorkingDayStrArray);
//show non working days using map
let nonWorkingDayStrArray=empDailyHrsAndWageArray.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==0).map(dailyHrsAndWage=>dailyHrsAndWage.toString());
console.log("UC11 D non working days string: "+nonWorkingDayStrArray);

