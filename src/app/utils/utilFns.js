export function getInitials(name) {
  if (!name) return "";

  return name
    .trim()
    .split(/\s+/)          // split by one or more spaces
    .map(word => word[0])  // take first letter of each word
    .join("")
    .toUpperCase();
}