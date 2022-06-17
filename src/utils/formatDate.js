export const formatDate = (date) => {
 return Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: '2-digit'
 }).format(new Date(Date.parse(date)));
};