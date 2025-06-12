export const useQuestionsAccordion = () => {
  const accordionLists = document.querySelectorAll('.questions__list');

  accordionLists.forEach((element) => {
    element.addEventListener('click', (event) => {
      const accordionControl = event.target.closest('.questions__control');
      if (!accordionControl) return;
      event.preventDefault();
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      const accordionList = accordionItem.parentElement;
      const accordionOpenedItem = accordionList.querySelector('.questions__item--opened');
      const accordionOpenedContent = accordionList.querySelector(
        '.questions__item--opened .questions__content',
      );

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('questions__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }

      accordionItem.classList.toggle('questions__item--opened');

      if (accordionItem.classList.contains('questions__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
};
