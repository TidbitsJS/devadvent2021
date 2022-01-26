export const countdown = (date, referenceDate = new Date()) => {
    const diff = date.getTime() - referenceDate.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return {
        days,
        hours,
        minutes,
        seconds,
    };
}

export const formatCountdown = countdown => {
    const days = countdown.days.toString()
    const hours = countdown.hours.toString()
    const minutes = countdown.minutes.toString()
    const seconds = countdown.seconds.toString()

    if(seconds < 0 ) {
        return 'No more wait'
    }

    const daysFormatted = days > 0 && `${days} days`
    const hoursFormatted = hours > 0 && `${hours} hours`
    const minutesFormatted = minutes > 0 && `${minutes} minutes`
    const secondsFormatted = seconds >= 0 && `${seconds} seconds`
    
    return [daysFormatted, hoursFormatted, minutesFormatted, secondsFormatted].filter(Boolean).join(', ')
}
