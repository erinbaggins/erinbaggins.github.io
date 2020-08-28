const getSleepHours = day => {

    switch (day) {
      case 'monday':
        return 8
        break;
      case 'tuesday':
        return 7
        break;
      case 'wednesday':
        return 8
        break;
      case 'thursday':
        return 5
        break;
      case 'friday':
        return 8
        break;
      case 'saturday':
        return 10
        break;
      case 'sunday':
        return 12
        break;
      default:
          return "error!"
          break;
    }
  };
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  
  
  };
  
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    console.log("You've slept " + actualSleepHours + " hours this week.");
    console.log("The ideal amount of sleep per week is " + idealSleepHours + " hours.");
  
    if (actualSleepHours === idealSleepHours) {
      console.log("You've got the perfect amount of sleep!");
      }
    else if (actualSleepHours > idealSleepHours) {
      console.log("You've got " + (actualSleepHours - idealSleepHours) + " more hours of sleep than needed this week.");
    }
    else if (actualSleepHours < idealSleepHours) {
      console.log("You should get some rest because you've slept " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.");
    } 
    else {
      console.log("error! something went wrong, check your code.");
    }
  
  };
  
  
  
  calculateSleepDebt();