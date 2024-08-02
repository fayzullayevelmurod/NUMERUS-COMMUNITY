document.addEventListener('DOMContentLoaded', function () {
  try {
    const selectedLang = document.querySelector('.selected-lang');
    const optionLanguage = document.querySelector('.option-language');

    selectedLang.addEventListener('click', function () {
      optionLanguage.classList.toggle('show');
      selectedLang.classList.toggle('active');
    });

    optionLanguage.addEventListener('click', function () {
      // selected-lang va option-language elementlaridagi flag va name elementlarini olish
      const selectedFlag = selectedLang.querySelector('.lang-flag');
      const selectedName = selectedLang.querySelector('.lang-name');
      const optionFlag = optionLanguage.querySelector('.lang-flag');
      const optionName = optionLanguage.querySelector('.lang-name');
      console.log(selectedFlag.src);

      // flag va name elementlarini almashtirish
      [selectedFlag.src, optionFlag.src] = [optionFlag.src, selectedFlag.src];
      [selectedName.textContent, optionName.textContent] = [
        optionName.textContent,
        selectedName.textContent,
      ];

      // show va active classlarini olib tashlash
      optionLanguage.classList.remove('show');
      selectedLang.classList.remove('active');
    });
    window.addEventListener('click', (e) => {
      if (
        !selectedLang.contains(e.target) &&
        !optionLanguage.contains(e.target)
      ) {
        optionLanguage.classList.remove('show');
        selectedLang.classList.remove('active');
      }
    });
  } catch (error) {}

  // select
  try {
    const customSelects = document.querySelectorAll('.custom-select');
    let activeSelect = null;

    customSelects.forEach((select) => {
      const selectedBox = select.querySelector('.selected-box');
      const selectOption = select.querySelector('.select-option');
      const selectedImg = select.querySelector('.selected-img');
      const selectedText = select.querySelector('.selected-text');
      const optionItems = selectOption.querySelectorAll('.option-item');

      selectedBox.addEventListener('click', () => {
        if (activeSelect && activeSelect !== selectOption) {
          activeSelect.classList.remove('show');
        }
        selectOption.classList.toggle('show');
        activeSelect = selectOption.classList.contains('show')
          ? selectOption
          : null;
      });

      optionItems.forEach((option) => {
        option.addEventListener('click', () => {
          const optionImg = option.querySelector('.option-img').src;
          const optionText = option.querySelector('.option-text').textContent;
          selectedImg.src = optionImg;
          selectedText.textContent = optionText;
          selectOption.classList.remove('show');
          activeSelect = null;
        });
      });
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.custom-select')) {
        if (activeSelect) {
          activeSelect.classList.remove('show');
          activeSelect = null;
        }
      }
    });
  } catch (error) {}
});
