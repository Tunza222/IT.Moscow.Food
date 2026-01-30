// Простой скрипт для демонстрации клика по кнопкам
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href').includes('🔗')) {
                e.preventDefault();
                alert('Эта кнопка ведет на внешний сайт. В реальной версии замените плейсхолдер на реальную ссылку.');
            }
        });
    });
    
    // Простое сообщение в консоль для проверки загрузки скрипта
    console.log('Скрипт навигации загружен успешно');
});