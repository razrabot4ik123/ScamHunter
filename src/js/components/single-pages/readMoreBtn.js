export const useReadMoreBtn = () => {
  const maxWords = 31;
  const block = document.querySelector('.information__description');
  if (!block) return;

  const originalHTML = block.innerHTML;

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

    if (screenWidth > 576) {
      block.innerHTML = originalHTML;
    } else {
      const words = extractWordsFromHTML(originalHTML);

      if (words.length > maxWords) {
        const shortText = words.slice(0, maxWords).join(' ');

        block.innerHTML = `
          <span class="information__description--small">${shortText}</span>
          <span class="information__description--full" style="display: none;">${originalHTML}</span>
          <button class="information__description--more">Читать полностью</button>
        `;

        const btn = block.querySelector('.information__description--more');
        btn.addEventListener('click', () => {
          block.querySelector('.information__description--small').style.display = 'none';
          block.querySelector('.information__description--full').style.display = 'inline';
          btn.style.display = 'none';
        });
      } else {
        block.innerHTML = originalHTML;
      }
    }
  }

  updateTextDisplay();
  window.addEventListener('resize', updateTextDisplay);
};
