const routes = ['', 'films', 'single-film', 'contact'];
export const header = () => {
  const element = document.createElement('header');
  const title = document.createElement('h2');
  title.innerText = 'Web Title';
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  routes.forEach((route) => {
    const li = document.createElement('li');
    const link = document.createElement('p');
    link.innerText = route || 'home';
    li.appendChild(link);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  element.appendChild(title);
  element.appendChild(nav);
  return element;
};
