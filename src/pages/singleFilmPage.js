export const singleFilmPage = () => {
    const page = document.createElement('div');
    page.classList.add('single-film-page');
    const title = document.createElement('h1');
    title.innerText = 'Single Film Page';
    page.appendChild(title);
    return page;
}