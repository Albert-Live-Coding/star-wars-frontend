export const landingPage = () => {
  const page = document.createElement('div');
  page.classList.add('landing-page');
  const title = document.createElement('h1');
  title.innerText = 'Landing Page';
  page.appendChild(title);
  return page;
};
