'use strict';

document.addEventListener('click', (e) => {
  // const spider = document.querySelector('.spider');
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = wall.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();
  let newTop = Math.max(e.clientY - wallRect.top - spider.offsetHeight / 2, 0);
  let newLeft = Math.max(e.clientX - wallRect.left - spider.offsetWidth / 2, 0);

  newTop = Math.min(newTop, wall.offsetHeight - spider.offsetHeight);
  newLeft = Math.min(newLeft, wall.offsetWidth - spider.offsetWidth);
  spider.style.top = `${newTop}px`;
  spider.style.left = `${newLeft}px`;
});
