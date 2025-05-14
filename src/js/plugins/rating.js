  const ratingList = document.querySelector('.testimonial__rating');
  const stars = ratingList?.querySelectorAll('li');
  
  // Добавляем обработчик клика на каждую звезду
  stars?.forEach(star => {
    star.addEventListener('click', function(e) {
      e.stopPropagation(); // Предотвращаем всплытие события, чтобы не сработал обработчик на document
      const ratingValue = parseInt(this?.getAttribute('data-rating'));
      
      // Удаляем класс _active у всех звезд
      stars.forEach(star => star.classList?.remove('_active'));
      
      // Добавляем класс _active выбранной звезде и всем предыдущим
      for (let i = 0; i < ratingValue; i++) {
        stars[i].classList.add('_active');
      }
    });
  });
  
  // Обработчик клика по документу для сброса рейтинга
  document.addEventListener('click', (e)=> {
    // Проверяем, был ли клик вне списка звезд и до его тобертки
    if (!ratingList.contains(e.target) && ratingList.closest('.testimonial__rating-wrapper').contains(e.target)) {
      // Удаляем класс _active у всех звезд
      stars.forEach(star => star.classList.remove('_active'));
    }
  });

