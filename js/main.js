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

function renderProfile(profile) {

  const container = document.createElement('div');

  const row = document.createElement('div');
  row.className = 'row header-font title pt-1 pl-2 margin-left mt-2';
  row.textContent = profile.fullName;

  const secondRow = document.createElement('div');
  secondRow.className = 'row mt-2';

  const column = document.createElement('div');
  column.className = 'column-half';

  const image = document.createElement('img');
  image.setAttribute('src', profile.avatarUrl);
  image.className = 'column-full';

  column.append(image);
  secondRow.append(column);

  const secondColumn = document.createElement('div');
  secondColumn.className = 'column-half';

  const userIcon = document.createElement('i');
  userIcon.className = 'fas fa-user fa-2x icon-margin mt-2';

  const userInfo = document.createElement('div');
  userInfo.className = 'header-font mb-2 inline-block';
  userInfo.textContent = profile.username;

  const breakTag = document.createElement('br');

  const locationIcon = document.createElement('i');
  locationIcon.className = 'fas fa-map-marker-alt fa-2x mr-2';

  const locationInfo = document.createElement('div');
  locationInfo.className = 'header-font inline-block';
  locationInfo.textContent = profile.location;

  const bioInfo = document.createElement('div');
  bioInfo.className = 'secondary-font mt-3';
  bioInfo.textContent = profile.bio;

  secondColumn.append(userIcon);
  secondColumn.append(userInfo);
  secondColumn.append(breakTag);
  secondColumn.append(locationIcon);
  secondColumn.append(locationInfo);
  secondColumn.append(bioInfo);

  secondRow.append(secondColumn);

  container.append(row);
  container.append(secondRow);

  return container;
}

function dataView(data) {
  const view = data.view;

  if (view === 'profile') {
    const profile = document.querySelector('div[data-view="profile"]');
    profile.innerHTML = '';
    profile.append(renderProfile(data.profile));
  }

  const thisForm = document.querySelector('form');
  if (view === 'edit-profile') {
    for (const info in data.profile) {
      thisForm.elements[info].value = data.profile[info];
    }
    if (data.profile.avatarUrl !== '') {
      const avatarImage = document.querySelector('img');
      avatarImage.setAttribute('src', data.profile.avatarUrl);
    } else {
      const avatarImage = document.querySelector('img');
      avatarImage.setAttribute('src', 'images/placeholder-image-square.jpg');
    }
  }

  const allDataViews = document.querySelectorAll('div[data-view]');
  for (let i = 0; i < allDataViews.length; i++) {
    if (allDataViews[i].getAttribute('data-view') === view) {
      allDataViews[i].className = '';
    } else {
      allDataViews[i].className = 'hidden';
    }
  }
}

dataView(data);
