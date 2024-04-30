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

export function animateTitle(newTitle) {
  let titleArray = newTitle.split('');
  let currentIndex = 0;

  function startAnimation() {
    // remove the first character from the title and add it to the end
    titleArray.push(titleArray.shift());
    // set the document's title to the new string
    // console.log(titleArray);
    document.title = titleArray.join('');

    // increment the current index and reset it to 0 if it's equal to the title's length
    currentIndex = (currentIndex + 1) % titleArray.length;
  }

  // start the animation
  setInterval(startAnimation, 250);  // adjust the interval as needed
}
