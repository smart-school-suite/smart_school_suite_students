export const formatDateAndCalculateAge = (dateString) => {
    const birthday = new Date(dateString);

    if (isNaN(birthday.getTime())) {
        console.error("Invalid date format provided:", dateString);
        return "Error: Invalid date format. Please use YYYY-MM-DD.";
    }

    const dateOptions = {
        weekday: 'short', 
        month: 'short', 
        day: '2-digit',
        year: 'numeric'
    };
    
    const formattedDate = birthday.toLocaleDateString('en-US', dateOptions).replace(/,/g, '');

    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();

    const monthDifference = today.getMonth() - birthday.getMonth();
    const dayDifference = today.getDate() - birthday.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return `${formattedDate}, ${age} years Old`;
};

export function formatDate(dateString, showWeekday = false) {
  if (!dateString || typeof dateString !== 'string') {
    return 'Invalid Date';
  }

  const date = new Date(`${dateString}T00:00:00Z`);

  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  let formatterOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  };

  if (showWeekday) {
    formatterOptions.weekday = 'short';
  }

  const formatter = new Intl.DateTimeFormat('en-GB', formatterOptions);

  return formatter.format(date);
}

export const getTimeLeftToStart = (startDate) => {
  const now = new Date().getTime();
  const start = new Date(startDate).getTime();

  if (isNaN(start) || now >= start) return "Started";

  const diffMs = start - now;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (days > 0) return `${days} ${days === 1 ? "day" : "days"} left`;

  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  if (hours > 0) return `${hours} ${hours === 1 ? "hour" : "hours"} left`;

  const minutes = Math.floor(diffMs / (1000 * 60));
  if (minutes > 0) return `${minutes} ${minutes === 1 ? "minute" : "minutes"} left`;

  return "Starting now";
};

export const getEventStatus = (date, start_time, end_time) => {
  const now = new Date();
  const startDateTime = new Date(`${date}T${start_time}:00`);
  const endDateTime = new Date(`${date}T${end_time}:00`);
  const nowMs = now.getTime();
  const startMs = startDateTime.getTime();
  const endMs = endDateTime.getTime();
  const status = {
    upcoming: false,
    inProgress: false,
    completed: false,
  };
  if (nowMs > endMs) {
    status.completed = true;
  }
  else if (nowMs >= startMs && nowMs <= endMs) {
    status.inProgress = true;
  }
  else {
    status.upcoming = true;
  }

  return status;
};