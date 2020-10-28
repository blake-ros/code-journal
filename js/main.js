const avatarInput = document.getElementById('avatarUrl');
avatarInput.addEventListener('input', function (e) {
  const avatarImage = document.querySelector('img');
  avatarImage.src = e;
});
