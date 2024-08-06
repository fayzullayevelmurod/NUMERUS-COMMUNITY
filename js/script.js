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

  try {
    const openLeftPanelBtn = document.querySelector('.open-left__panel-btn');
    const leftPanel = document.querySelector('.left-panel');

    openLeftPanelBtn.addEventListener('click', () => {
      leftPanel.classList.toggle('show');
      document.body.style.overflow = 'hidden';
    });

    window.addEventListener('click', (e) => {
      if (
        !openLeftPanelBtn.contains(e.target) &&
        !leftPanel.contains(e.target)
      ) {
        leftPanel.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  } catch (error) {}

  // Barcha .admin-ansver elementlarini olamiz
  const adminAnswers = document.querySelectorAll('.admin-ansver');

  adminAnswers.forEach((adminAnswer) => {
    // Har bir .admin-ansver ichidan kerakli elementlarni olamiz
    const editButton = adminAnswer.querySelector('.edit-review__btn');
    const adminCommentBox = adminAnswer.querySelector('.admin-comment__box');
    const commentDate = adminAnswer.querySelector('.comment-date');
    const editReview = adminAnswer.querySelector('.edit-review');
    const textArea = editReview.querySelector('textarea');
    const publishButton = editReview.querySelector('.publish-btn');
    const commentDesc = adminCommentBox.querySelector('.desc');

    // Edit tugmasiga hodisa qo'shamiz
    editButton.addEventListener('click', () => {
      // hidden classini qo'shamiz
      adminCommentBox.classList.add('hidden');
      commentDate.classList.add('hidden');

      // show classini qo'shamiz
      editReview.classList.add('show');
    });

    // Publish tugmasiga hodisa qo'shamiz
    publishButton.addEventListener('click', () => {
      // Textarea bo'sh bo'lsa, focus qilish
      if (textArea.value.trim() === '') {
        textArea.focus();
      } else {
        // Textarea qiymatini desc ga o'rnatish
        commentDesc.textContent = textArea.value;

        // Hozirgi sanani formatda olish
        const today = new Date();
        const formattedDate = today.toLocaleDateString('ru-RU');

        // Comment date ni yangilash
        commentDate.textContent = formattedDate;

        // show classini olib tashlash
        editReview.classList.remove('show');

        // hidden classini olib tashlash
        adminCommentBox.classList.remove('hidden');
        commentDate.classList.remove('hidden');
      }
    });
  });
});
