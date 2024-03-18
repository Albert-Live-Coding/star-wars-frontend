export const notFoundPage = () => {
    const page = document.createElement('div');
    page.classList.add('not-found-page');
    const title = document.createElement('h1');
    title.innerText = 'Not Found Page';
    page.appendChild(title);
    return page;
}