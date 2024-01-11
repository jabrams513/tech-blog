module.exports = {
  format_time: (date) => {
    return new Date(date).toLocaleTimeString();
  },
  format_date: (date) => {
    const formattedDate = new Date(date);
    return `${formattedDate.getMonth() + 1}/${formattedDate.getDate()}/${formattedDate.getFullYear()}`;
  },
};