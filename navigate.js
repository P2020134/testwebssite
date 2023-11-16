function navigateTo(page) {
  window.location.href = page;
}

window.onload = function () {
  document.getElementById('home').addEventListener('click', function () {
      navigateTo('onboarding.html');
  });

  document.getElementById('features').addEventListener('click', function () {
      navigateTo('features.html');
  });

  document.getElementById('purpose').addEventListener('click', function () {
      navigateTo('purpose.html');
  });

  document.getElementById('contact').addEventListener('click', function () {
      navigateTo('contact.html');
  });
};
