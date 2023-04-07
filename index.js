// Code your solution in this file!
//array of drivers
const drivers = ["Bena","Kim", "Nduch", "Abiyah"]
//defined an anonymous funtion
//accept an array of driver as an argument
const returnFirstTwoDrivers = function (drivers){
     return drivers.slice(0,2);
     //used the slice method to cut the drivers 
}
console.log(returnFirstTwoDrivers);

///function two
//defined an anonymous function
const returnLastTwoDrivers = function (){
    return drivers.slice(-2)
    //added a slice method to obtain the last 2 elements
    //used a negative index so the array starts from the end
    //and count back 2 elements
}
console.log(returnLastTwoDrivers())

//array containing two elements
//declares a constant variable named selectingDrivers
//array is an object n the functions can be passed as variables
const selectingDrivers = [returnLastTwoDrivers, returnFirstTwoDrivers]

//declares a const variable named and i assigend an anonymuos function
//the function takes in an argument
const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    }
  }