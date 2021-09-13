const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
    '#fa03c5',
    '#e1fa03',
    '#fa0303'
  ];

  const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
  };

  let intervalId = null;
  // let isActive = false;
  // const randomIntegerFromInterval = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };

  // refs.startBtn.addEventListener('click', () = {
  //   if (isActive) {
  //     return;
  //   };
  //   isActive = true;
  //   intervalId = setInterval(() => {
  //     const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  //     document.body.style.backgroundColor = randomColor;
  //   }, 1000);
  // });

  // refs.stopBtn.addEventListener('click', () => {
  //   clearInterval(intervalId);
  //   isActive = false;
  // });
  refs.startBtn.onclick = () => {
    refs.startBtn.disabled = true;
    intervalId = setInterval(() => {
    document.body.style.backgroundColor = colors[randomId(0, colors.length - 1)];
  }, 1000);
};

refs.stopBtn.onclick = () => {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
};

function randomId(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}