// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
function calculateIndividualEmployeeBonus( employee ) {  
  
 
    let bonusPercentage = 0;
     if (employee.reviewRating === 5 ) {
        return 0.1;
      } else if (employee.reviewRating === 4 ) {
        return 0.06;
      } else if (employee.reviewRating === 3){
        return 0.04;
      } else if (employee.reviewRating <= 2){
        return 0.0;
      } 
      return bonusPercentage
    }
      function adjustedBonusPercentage(){
       let finalPercent = 0;
       if (employee.employeeNumber<=9999){
        bonusPercentage + 0.05
      return finalPercent
     }


  // bonusPercentage * employee.annualSalary
  

    

  //     bonusPercentage * employee.annualSalary


  //     13>bonusPercentage>0

   
}
  



// let bonusPackage = {
//   name: ,
//   bonusPercentage: bonusPercentage,
//   totalCompensation: function totalCompensation,
//   totalBonus: employee.annualSalary * bonusPercentage
// }



for (let employee of employees){
  calculateIndividualEmployeeBonus(employee);
}



console.log(calculateIndividualEmployeeBonus(employees[0]));
