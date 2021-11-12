let numberPadList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const initializeNumberPad = () => {
  let numberPadContent = "";
  for (let index = 0; index < numberPadList.length; index++) {
    numberPadContent += `<div  card-number="${numberPadList[index]}" >${numberPadList[index]}</div>`;
  }
  // updating the numberpad container
  document.getElementById("number-pad-container").innerHTML = numberPadContent;
};

// Calling initializeNumberPad on load to update the keypad container with default sorting
initializeNumberPad();

const shuffle = () => {
  let curId = numberPadList.length;
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // swap the numbers
    let tmp = numberPadList[curId];
    numberPadList[curId] = numberPadList[randId];
    numberPadList[randId] = tmp;
  }
  initializeNumberPad();
};
const sort = () => {
  numberPadList.sort(function (a, b) {
    return a - b;
  });
  initializeNumberPad();
};
