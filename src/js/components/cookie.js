export const useCookie = () => {
  const cookieBanner = document.querySelector('.cookie');
  const closeButton = document.querySelector('.cookie__close');
  const buttons = document.querySelectorAll('.cookie__control-button');
  const checkboxes = document.querySelectorAll('.cookie__options-checkbox');

  const [necessaryCheckbox, analyticsCheckbox, preferencesCheckbox] = checkboxes;

  const savedSettings = JSON.parse(localStorage.getItem('cookie-settings'));

  if (!savedSettings || !savedSettings.cookieAccepted) {
    cookieBanner.classList.add('cookie--visible');

    necessaryCheckbox.checked = true;
    necessaryCheckbox.disabled = true;

    closeButton.addEventListener('click', hideBanner);

    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        if (index === 0) acceptAll();
        else if (index === 1) acceptSelection();
        else rejectAll();
      });
    });
  }

  function acceptAll() {
    const settings = {
      necessary: true,
      analytics: true,
      preferences: true,
      cookieAccepted: true,
    };
    saveSettings(settings);
  }

  function acceptSelection() {
    const settings = {
      necessary: true,
      analytics: analyticsCheckbox.checked,
      preferences: preferencesCheckbox.checked,
      cookieAccepted: true,
    };
    saveSettings(settings);
  }

  function rejectAll() {
    analyticsCheckbox.checked = false;
    preferencesCheckbox.checked = false;

    const settings = {
      necessary: true,
      analytics: false,
      preferences: false,
      cookieAccepted: true,
    };
    saveSettings(settings);
  }

  function saveSettings(settings) {
    localStorage.setItem('cookie-settings', JSON.stringify(settings));
    hideBanner();
    console.log('Cookie settings saved:', settings);
  }

  function hideBanner() {
    cookieBanner.classList.remove('cookie--visible');
  }
};
