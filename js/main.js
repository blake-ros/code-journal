const avatarInput = document.getElementById('avatarUrl');
avatarInput.addEventListener('input', function (e) {
  const avatarImage = document.querySelector('img');
  avatarImage.src = e.target.value;
});

const formValidation = document.querySelector('form');
formValidation.addEventListener('submit', function (e) {
  event.preventDefault();
  const form = document.querySelector('form');

  for (var field in data.profile) {
    data.profile[field] = form.elements[field].value;
  }

  const avatarImage = document.querySelector('img');
  avatarImage.setAttribute('src', 'images/placeholder-image-square.jpg');

  form.reset();
});
