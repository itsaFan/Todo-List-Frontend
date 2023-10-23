export function formatDate(isoString) {
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
