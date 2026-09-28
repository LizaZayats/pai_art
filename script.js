document.addEventListener('DOMContentLoaded', () => {
    const screenMain = document.getElementById('screen-main');
    const screenGallery = document.getElementById('screen-gallery');
    const screenColoring = document.getElementById('screen-coloring');
    const profileModal = document.getElementById('profileModal');
    const mobileMenu = document.getElementById('mobileMenu');

    const goToGalleryBtn = document.getElementById('goToGallery');
    const backToMainBtn = document.getElementById('backToMain');
    const backToMainMobileBtn = document.getElementById('backToMainMobile');
    const backToGalleryBtn = document.getElementById('backToGallery');

    // Кнопки меню
    const openMenuBtn = document.getElementById('openMenu');
    const closeMenuBtn = document.getElementById('closeMenu');
    const menuSettings = document.getElementById('menuSettings');
    const menuProfile = document.getElementById('menuProfile');

    // Кнопки профиля (десктоп)
    const openProfileDesktop = document.getElementById('openProfileDesktop');
    const closeProfileBtn = document.getElementById('closeProfile');

    // Главная картинка (для перехода в раскраску)
    const mainColoringLink = document.getElementById('mainColoringLink');

    // Функция переключения экранов
    function switchScreen(hideScreen, showScreen) {
        hideScreen.classList.remove('active');
        showScreen.classList.add('active');
    }

    // Навигация
    if(goToGalleryBtn) goToGalleryBtn.addEventListener('click', () => switchScreen(screenMain, screenGallery));
    if(backToMainBtn) backToMainBtn.addEventListener('click', () => switchScreen(screenGallery, screenMain));
    if(backToMainMobileBtn) backToMainMobileBtn.addEventListener('click', () => switchScreen(screenGallery, screenMain));
    if(backToGalleryBtn) backToGalleryBtn.addEventListener('click', () => switchScreen(screenColoring, screenGallery));

    // Переход в раскраску при клике на главную картинку
    if(mainColoringLink) {
        mainColoringLink.addEventListener('click', () => {
            switchScreen(screenMain, screenColoring);
        });
    }

    // Переход в раскрашивание по клику на карточку в галерее
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => switchScreen(screenGallery, screenColoring));
    });

    // Гамбургер-меню
    if(openMenuBtn) {
        openMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }
    if(closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // Закрытие меню при клике вне его
    mobileMenu.addEventListener('click', (e) => {
        if(e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    });

    // Обработка кнопок в меню
    if(menuProfile) {
        menuProfile.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            profileModal.classList.add('active');
        });
    }
    if(menuSettings) {
        menuSettings.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            alert('Настройки пока в разработке');
        });
    }

    // Профиль (десктоп)
    if(openProfileDesktop) {
        openProfileDesktop.addEventListener('click', () => {
            profileModal.classList.add('active');
        });
    }
    if(closeProfileBtn) {
        closeProfileBtn.addEventListener('click', () => {
            profileModal.classList.remove('active');
        });
    }
    
    // Закрытие профиля по клику вне
    profileModal.addEventListener('click', (e) => {
        if(e.target === profileModal) {
            profileModal.classList.remove('active');
        }
    });
});