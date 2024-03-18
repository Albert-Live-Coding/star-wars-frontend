import { fetchSingleEndpointData } from '../utils/fetchSingleEndpointData.js';

export const handleLoadingData = async () => {
  const data = await fetchSingleEndpointData('/films');
  return data;
};

export const allFilmsPage = () => {
  const page = document.createElement('div');
  page.classList.add('all-films-page');
  const title = document.createElement('h1');
  title.innerText = 'All Films Page';
  page.appendChild(title);

  const list = document.createElement('ul');
  handleLoadingData().then((items) =>
    items.results.forEach((item) => {
      const element = document.createElement('li');
      element.innerText = item.title;
      list.appendChild(element);
    })
  );
  page.appendChild(list);

  return page;
};
