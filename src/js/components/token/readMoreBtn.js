export const useReadMoreBtn = () => {
  const maxWords = 28;
  const blocks = document.querySelectorAll('.about-token__item');

  if (!blocks.length) return;

  blocks.forEach((block) => {
    const description = block.querySelector('.about-token__item-description');
    if (description && !description.dataset.originalHtml) {
      description.dataset.originalHtml = description.innerHTML;
    }
    const descriptionList = block.querySelector('.about-token__item-description-list');
    if (descriptionList && !descriptionList.dataset.originalHtml) {
      descriptionList.dataset.originalHtml = descriptionList.outerHTML;
    }
  });

  function extractWordsFromHTML(html) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const brs = tempDiv.querySelectorAll('br');
    brs.forEach((br) => br.replaceWith(' '));
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    const cleanedText = textContent.trim();
    const words = cleanedText.split(' ').filter((word) => word !== '');
    return words;
  }

  function updateTextDisplay() {
    const screenWidth = window.innerWidth;
    blocks.forEach((block) => {
      const description = block.querySelector('.about-token__item-description');
      const descriptionList = block.querySelector('.about-token__item-description-list');
      if (!description) return;
      const originalHTML = description.dataset.originalHtml || description.innerHTML;
      const originalListHTML =
        descriptionList && descriptionList.dataset.originalHtml
          ? descriptionList.dataset.originalHtml
          : descriptionList
            ? descriptionList.outerHTML
            : '';
      // --- CHANGED: Extract words from both description and list ---
      let totalWords = extractWordsFromHTML(originalHTML);
      if (originalListHTML) {
        totalWords = totalWords.concat(extractWordsFromHTML(originalListHTML));
      }
      // -----------------------------------------------------------
      if (screenWidth > 992) {
        description.innerHTML = originalHTML;
        if (descriptionList) {
          const existingList = block.querySelector('.about-token__item-description-list');
          if (!existingList) {
            description.insertAdjacentHTML('afterend', originalListHTML);
          }
        }
        return;
      }
      if (totalWords.length > maxWords) {
        const shortText = totalWords.slice(0, maxWords).join(' ');
        let newHTML = `
          <span class="about-token__item-description--small">${shortText}</span>
          <span class="about-token__item-description--full" style="display: none;">${originalHTML}</span>
        `;
        if (descriptionList) {
          const listHTML = originalListHTML;
          newHTML += `
            <span class="about-token__item-description-list--wrapper" style="display: none;">
              ${listHTML}
            </span>
          `;
        }
        newHTML += `<button class="about-token__item-description--more">Читать полностью</button>`;
        description.innerHTML = newHTML;
        const btn = description.querySelector('.about-token__item-description--more');
        const fullText = description.querySelector('.about-token__item-description--full');
        const smallText = description.querySelector('.about-token__item-description--small');
        const listWrapper = description.querySelector(
          '.about-token__item-description-list--wrapper',
        );
        btn.addEventListener('click', () => {
          smallText.style.display = 'none';
          fullText.style.display = 'inline';
          if (listWrapper) listWrapper.style.display = 'block';
          btn.style.display = 'none';
        });
        if (descriptionList) {
          descriptionList.remove();
        }
      } else {
        description.innerHTML = originalHTML;
        if (descriptionList) {
          const existingList = block.querySelector('.about-token__item-description-list');
          if (!existingList) {
            description.insertAdjacentHTML('afterend', originalListHTML);
          }
        }
      }
    });
  }

  updateTextDisplay();
  window.addEventListener('resize', updateTextDisplay);
};
