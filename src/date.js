export function getRelativeDate(inputDate) {
  // 1. Create a date object for the input (adjust for timezone)
  const dateToCompare = new Date(inputDate + 'T00:00:00');
  
  // 2. Create a date object for "today" (stripping time)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // 3. Create a date object for "tomorrow"
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // 4. Compare
  if (dateToCompare.getTime() === today.getTime()) {
    return 'Today';
  } else if (dateToCompare.getTime() === tomorrow.getTime()) {
    return 'Tomorrow';
  } else {
    // 5. Return weekday or formatted date if needed
    return dateToCompare.toLocaleDateString('en-US', { weekday: 'long' }); // e.g., "Friday"
  }
}