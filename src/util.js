const today = new Date();

export function isShowToday(date) {
  const showDate = new Date(date);
  const showDay = new Date(showDate.getTime() - showDate.getTimezoneOffset() * -60000);
  return showDay.toDateString() == today.toDateString();
}

export function isShowPast(date) {
  const showDate = new Date(date);
  const showDay = new Date(showDate.getTime() - showDate.getTimezoneOffset() * -60000);
  return showDay < today && !isShowToday(date);
}
