document.addEventListener("DOMContentLoaded", function () {
  const selectedLang = document.querySelector(".selected-lang");
  const optionLanguage = document.querySelector(".option-language");

  selectedLang.addEventListener("click", function () {
    optionLanguage.classList.toggle("show");
    selectedLang.classList.toggle("active");
  });

  optionLanguage.addEventListener("click", function () {
    // selected-lang va option-language elementlaridagi flag va name elementlarini olish
    const selectedFlag = selectedLang.querySelector(".lang-flag");
    const selectedName = selectedLang.querySelector(".lang-name");
    const optionFlag = optionLanguage.querySelector(".lang-flag");
    const optionName = optionLanguage.querySelector(".lang-name");
    console.log(selectedFlag.src);

    // flag va name elementlarini almashtirish
    [selectedFlag.src, optionFlag.src] = [
      optionFlag.src,
      selectedFlag.src,
    ];
    [selectedName.textContent, optionName.textContent] = [
      optionName.textContent,
      selectedName.textContent,
    ];

    // show va active classlarini olib tashlash
    optionLanguage.classList.remove("show");
    selectedLang.classList.remove("active");
  });
  window.addEventListener("click", (e) => {
    if (!selectedLang.contains(e.target) && !optionLanguage.contains(e.target)) {
      optionLanguage.classList.remove("show");
      selectedLang.classList.remove("active");
    }
  });
});
