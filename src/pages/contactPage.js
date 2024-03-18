export const contactPage = () => {
    const page = document.createElement('div');
    page.classList.add('contact-page');
    const title = document.createElement('h1');
    title.innerText = 'Contact Page';
    page.appendChild(title);
    return page;
}