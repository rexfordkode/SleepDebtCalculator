//T
const getSleepHours = day => {
 day = day.toLowerCase();

  switch (day){
    case 'monday':
    return 8;
    break;
    
    case 'tuesday':
    return 7;
    break;

    case 'wednesday':
    return 6;
    break;

    case 'thursday':
    return 5;
    break;

    case 'friday':
    return 4;
    break;

    case 'saturday':
    return 3
    break;

    case 'sunday':
    return 9;
    break;
  }
};

const getActualSleepHours = () => 
  /*  getSleepHours('monday')
  + getSleepHours('tuesday') 
  + getSleepHours('wednesday') 
  + getSleepHours('thursday')
  + getSleepHours('friday') 
  + getSleepHours('saturday')
  + getSleepHours('sunday'); */
  6 + 7 + 9 + 8 + 5 + 3 + 11;

//The code below will determine the ideal sleep hours for a week
const getIdealSleepHours = idealHours => idealHours * 7;

//Should print the sum of all sleep hours in the week 
console.log(getActualSleepHours());

//If the ideal hours be 8 should print 56
console.log(getIdealSleepHours(8));

//Will calculate the actual sleep debt
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  //
  if(actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep of '+ actualSleepHours +' hours.');
  } else if(actualSleepHours > idealSleepHours){
    console.log('You got more sleep than needed.');
    }else {
console.log('You got '+(actualSleepHours- idealSleepHours)+ ' hours(s) less sleep than you needed this week. Get some rest.');}
  }
  calculateSleepDebt();

