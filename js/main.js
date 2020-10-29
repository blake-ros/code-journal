const avatarInput = document.getElementById('avatarUrl');
avatarInput.addEventListener('input', function (e) {
  const avatarImage = document.querySelector('img');
  avatarImage.src = e;
});

const formValidation = document.querySelector('form');
formValidation.addEventListener('submit', function (e) {
  data.profile.username = e;
  data.profile.fullName = e;
  data.profile.location = e;
  data.profile.bio = e;
  data.profile.avatarUrl = e;
  formValidation.reset();

  const avatarImage = document.querySelector('img');
  avatarImage.src = 'images/placeholder-image-square.jpg';
});
