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

  handleLoadingData().then((items) =>
    items.results.forEach((item) => {
      const element = document.createElement('p');
      element.innerText = item.title;
      page.appendChild(element);
    })
  );

  return page;
};
