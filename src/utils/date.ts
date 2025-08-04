import moment from "moment";

// Format date for daily view
export const formatDateDaily = (date: string | undefined): string => {
  if (!date) return "N/A"; // Handle undefined or null dates
  try {
    if (!moment(date).isValid()) throw new Error("Invalid date");
    return moment(date).format("MMM D, YYYY");
  } catch {
    return date;
  }
};
