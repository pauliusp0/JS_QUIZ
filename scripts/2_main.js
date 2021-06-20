// variables
const wrapper = document.querySelector('#wrapper');
// functions
const addBackgroundMain = () => {
  if (location.href.includes('index.html'))
    wrapper.style.backgroundColor = 'var(--ancent-color)';
  if (location.href.includes('html.html'))
    wrapper.style.backgroundColor = 'var(--html-color';
  if (location.href.includes('css.html'))
    wrapper.style.backgroundColor = 'var(--css-color';
  if (location.href.includes('js.html'))
    wrapper.style.backgroundColor = 'var(--js-color';
};

const addImage = () => {
  const logo = document.querySelector('#logo');
  if (location.href.includes('html.html'))
    logo.src =
      'https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png';
  if (location.href.includes('css.html'))
    logo.src =
      'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png';
  if (location.href.includes('js.html'))
    logo.src =
      'https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png';
};

// events
document.addEventListener('DOMContentLoaded', () => {
  addBackgroundMain();
  addImage();
});
