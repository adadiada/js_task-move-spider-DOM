'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const wallCoords = wall.getBoundingClientRect();
  // Розрахунок нових координат відносно "стіни"//
  let newTop = Math.max(
    e.clientY - wallCoords.top - spider.clientHeight / 2,
    0,
  );

  let newLeft = Math.max(
    e.clientX - wallCoords.left - spider.clientWidth / 2,
    0,
  );

  // Обмеження руху павука в межах стіни//
  newTop = Math.min(newTop, wall.clientHeight - spider.clientHeight);
  newLeft = Math.min(newLeft, wall.clientWidth - spider.clientWidth);
  // Переміщення павука//
  spider.style.top = newTop + 'px';
  spider.style.left = newLeft + 'px';
});
