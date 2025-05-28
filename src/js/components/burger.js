export const useBurger = () => {
  const burgerBtn = document.querySelector('[data-burger="btn"]');
  const burgerMenu = document.querySelector('[data-burger="menu"]');
  const body = document.body;

  const closeIcon = `
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.414 0L5.914 4.5L10.414 0L11.828 1.414L7.328 5.914L11.828 10.414L10.414 11.828L5.914 7.328L1.414 11.828L0 10.414L4.5 5.914L0 1.414L1.414 0Z" fill="#98ED3A" />
</svg>
`;

  const burgerIcon = `
<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.4 4H0.6C0.0479999 4 0 4.447 0 5C0 5.553 0.0479999 6 0.6 6H13.4C13.952 6 14 5.553 14 5C14 4.447 13.952 4 13.4 4ZM13.4 8H0.6C0.0479999 8 0 8.447 0 9C0 9.553 0.0479999 10 0.6 10H13.4C13.952 10 14 9.553 14 9C14 8.447 13.952 8 13.4 8ZM0.6 2H13.4C13.952 2 14 1.553 14 1C14 0.447 13.952 0 13.4 0H0.6C0.0479999 0 0 0.447 0 1C0 1.553 0.0479999 2 0.6 2Z" fill="#98ED3A" />
</svg>
`;

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('header-burger--active');

    const isActive = burgerBtn.classList.toggle('header__burger--active');

    burgerBtn.innerHTML = isActive ? closeIcon : burgerIcon;

    burgerMenu.classList.toggle('header__info--visible');
    body.classList.toggle('body--fixed');
  });
};
