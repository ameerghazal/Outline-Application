function getTimeDifference(created_at) {
  // Convert the provided string to a Date object
  const createdAtDate = new Date(created_at);

  // Get the current time
  const currentTime = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentTime - createdAtDate;

  // Convert milliseconds to seconds
  const secondsDifference = Math.floor(timeDifference / 1000);

  // Convert seconds to minutes
  const minutesDifference = Math.floor(secondsDifference / 60);

  // Convert minutes to hours
  const hoursDifference = Math.floor(minutesDifference / 60);

  // Convert hours to days
  const daysDifference = Math.floor(hoursDifference / 24);

  // Determine the highest time unit that is greater than zero
  let timeString = "";
  if (daysDifference > 0) {
    timeString = daysDifference + " days";
  } else if (hoursDifference > 0) {
    timeString = hoursDifference + " hours";
  } else if (minutesDifference > 0) {
    timeString = minutesDifference + " minutes";
  } else if (secondsDifference > 0) {
    timeString = secondsDifference + " seconds";
  }

  return timeString;
}

export default getTimeDifference;
