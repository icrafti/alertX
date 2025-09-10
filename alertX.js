function alertX(type, msg, autoClose = true, timeout = 3000) {
  // Создаём HTML уведомления
  const html = `
                <div class="alertX alert-${type} alert-dismissible fade show" role="alert" style="position: relative;">
                    ${msg}
                    <button type="button" class="close" aria-label="Закрыть">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `;

  // Находим контейнер
  let container = document.getElementById("alerts-containerX");
  if (!container) {
    container = document.createElement("div");
    container.id = "alerts-containerX";
    document.body.appendChild(container);
  }

  // Вставляем уведомление
  container.insertAdjacentHTML("afterbegin", html);

  // Находим последнее добавленное уведомление
  const alertEl = container.firstElementChild;

  // Обработчик закрытия
  const closeButton = alertEl.querySelector(".close");
  closeButton.addEventListener("click", function () {
    alertEl.remove();
  });

  // Авто-закрытие через N секунд
  if (autoClose) {
    setTimeout(() => {
      if (alertEl && alertEl.parentNode) {
        alertEl.classList.remove("show");
        alertEl.classList.add("fade");
        setTimeout(() => {
          alertEl.remove();
        }, 300); // время анимации fade out
      }
    }, timeout);
  }
}
