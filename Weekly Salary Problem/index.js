function calculateSalary(hour, day) {
    const isWeekend = [6,7].includes(day)
    const NORMAL_RATE = 10
    const OVERTIME_RATE = 15
    let salary = 0

    if (hour <= 8) {
        salary = hour * NORMAL_RATE 
    }   else {
        salary = 8 * NORMAL_RATE + (hour - 8) * OVERTIME_RATE
    }
    return isWeekend ? salary * 2 : salary
}
function weeklySalary(hours) {    
    return hours.reduce((total, current, index) => total + calculateSalary(current, index + 1), 0)
  }

  console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0])===400)
  console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0])===410)
  console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0])===280)