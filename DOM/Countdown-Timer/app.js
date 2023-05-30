const deadline = document.querySelector('.deadline')
const items = deadline.querySelectorAll('.deadline-format h4')

const MS_IN_DAY = 24 * 60 * 60 * 1000
const MS_IN_HOUR = 60 * 60 * 1000
const MS_IN_MINUTE = 60 * 1000
const MS_IN_SECOND = 1000

function getDateUnits(date) {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    return { year, month, day }
}

function getTimeUnits(time) {
    const days = Math.floor(time / MS_IN_DAY)
    const hours = Math.floor((time %  MS_IN_DAY) / MS_IN_HOUR)
    const minutes = Math.floor((time % MS_IN_HOUR) / MS_IN_MINUTE)
    const seconds = Math.floor((time % MS_IN_MINUTE) / MS_IN_SECOND)
    return { days, hours, minutes, seconds }
}

function getToday() {
    const today = new Date()
    return today
}

function getFuture() {
    const today = getToday()
    const { year, month, day } = getDateUnits(today)
    const futureDate = new Date(year, month, day + 1, 0, 0, 0)
    return futureDate
}

function getTimeInterval(date1, date2) {
    return date2.getTime() - date1.getTime()
}

function calculateRemainingTime() {
    const todayDate = getToday()
    const futureDate = getFuture()
    const timeInterval = getTimeInterval(todayDate, futureDate)
    const { days, hours, minutes, seconds } = getTimeUnits(timeInterval)
    const timeUnits = [days, hours, minutes,seconds]

    items.forEach((item, index) => {
        item.textContent = timeUnits[index].toString().padStart(2,'0')
    })
}

setInterval(calculateRemainingTime, 1000)

calculateRemainingTime()
