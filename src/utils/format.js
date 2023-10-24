// export function formatDate(isoString) {
//   const date = new Date(isoString);
//   const options = {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   };
//   return `${date.toLocaleDateString("en-US", options)} ${date.toLocaleTimeString()}`;
// }

export function formatDate(isoString) {
  if (!isoString) {
    return "Deadline is not set";
  }

  const date = new Date(isoString);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return `${date.toLocaleDateString("en-US", options)} ${date.toLocaleTimeString()}`;
}

export function formatDateWithWeekday(isoString) {
  const date = new Date(isoString);
  const options = {
    weekday: "long",
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}

export function formatDateForTodoCard(isoString) {
  const date = new Date(isoString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
    return "Today";
  } else if (date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear()) {
    return "Yesterday";
  } else {
    const options = {
      weekday: "long",
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  }
}
