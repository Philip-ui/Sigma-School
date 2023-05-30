function calculateAge(date) {
    //split() splits a string into an array of substrings, and returns the array:
    let ageArray = date.split("/");
    //The parseInt method parses a value as a string and returns an integer.
    let ageDay = parseInt(ageArray[0], 10);
    let ageMonth = parseInt(ageArray[1], 10);
    let ageYear = parseInt(ageArray[2], 10);
    // Create a Date object for the birth date
  const agePerson = new Date(ageYear, ageMonth - 1, ageDay);
    // Calculate the difference in milliseconds between the birth date and current date
  const ageInMs = Date.now() - agePerson.getTime();
    // Convert the age from milliseconds to years
  const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
    // Round down to the nearest integer
    const age = Math.floor(ageInYears);
    return age;
  }
  
  console.log(calculateAge("20/7/2002"));
  console.log(calculateAge("1/1/1979"));
  