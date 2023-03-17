// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
 function returnFirstTwoDrivers(){
    let drivers2 = drivers.slice(0,2)
    return drivers2
}

returnFirstTwoDrivers();
function returnLastTwoDrivers(){
    let drivers3 = drivers.slice(-2)
    return drivers3
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a) {
    return function(fare=5){
        return a*fare  
    }
   
}

function fareDoubler (fare){
    return createFareMultiplier(2)(fare)
}

function fareTripler (fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers ){
    return returnLastTwoDrivers(arrayOfDrivers)
}

