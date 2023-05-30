function getDays(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in one day
    const diffInMs = Math.abs(date2 - date1); // Absolute difference in milliseconds
    const diffInDays = Math.round(diffInMs / oneDay); // Round to nearest integer
    return diffInDays;
  }
  
  const date1 = new Date("December 29, 2018");
  const date2 = new Date("January 1, 2019");
  console.log(getDays(date1, date2));
  
  const date3 = new Date("June 14, 2019");
  const date4 = new Date("June 20, 2019");
  console.log(getDays(date3, date4));
  
  const date5 = new Date("July 20, 2019");
  const date6 = new Date("July 30, 2019");
  console.log(getDays(date5, date6));