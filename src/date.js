export function getRelativeDate(inputDate) {
  const dateToCompare = new Date(inputDate + 'T00:00:00');
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  if (dateToCompare.getTime() === today.getTime()) {
    return 'Today';
  } else if (dateToCompare.getTime() === tomorrow.getTime()) {
    return 'Tomorrow';
  } else {
    return dateToCompare.toLocaleDateString('en-US', { weekday: 'long' }); // e.g., "Friday"
  }
}

export function isItDayTime(dateTime){
  if((dateTime.slice(0, 2))>=16){
    return false;
  }
  return true

  
}