const avatarInput = document.getElementById('avatarUrl');
avatarInput.addEventListener('input', function (e) {
  const avatarImage = document.querySelector('img');
  avatarImage.src = e.target.value;
});

const formValidation = document.getElementById('edit-profile-form');
formValidation.addEventListener('submit', function (e) {
  event.preventDefault();
  const form = document.getElementById('edit-profile-form');

  for (var field in data.profile) {
    data.profile[field] = form.elements[field].value;
  }

  const avatarImage = document.querySelector('img');
  avatarImage.setAttribute('src', 'images/placeholder-image-square.jpg');

  form.reset();

  data.view = 'profile';
  dataView(data);
});

function renderProfile(profile) {

  const container = document.createElement('div');
  container.className = 'container';

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

  const thirdRow = document.createElement('div');
  thirdRow.className = 'row mt-3';

  const editButton = document.createElement('a');
  editButton.textContent = 'Edit';
  editButton.className = 'edit-button button-style pr-2 pl-2 pb-1 pt-1 header-font';
  editButton.setAttribute('href', '#');
  editButton.setAttribute('data-view', 'edit-profile');

  thirdRow.append(editButton);

  secondColumn.append(userIcon);
  secondColumn.append(userInfo);
  secondColumn.append(breakTag);
  secondColumn.append(locationIcon);
  secondColumn.append(locationInfo);
  secondColumn.append(bioInfo);
  secondColumn.append(thirdRow);

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

  const thisForm = document.getElementById('edit-profile-form');
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

document.addEventListener('DOMContentLoaded', function (e) {
  if(data.profile.username === '') {
    data.view = 'edit-profile';
    dataView(data);
  } else {
    dataView(data);
  }
});

document.addEventListener('click', function (e) {
  if(event.target.tagName !== 'A') return;
  const view = event.target.getAttribute('data-view');
  if(data.profile.username === '' && view !== 'edit-profile') {
    return;
  }
  data.view = view;
  dataView(data);
});

const newEntryButton = document.getElementById('entryButton');
newEntryButton.addEventListener('click', function(e) {
  data.view = 'create-entry';
  dataView(data);
})

const imageUrl = document.getElementById('imageURL');
imageUrl.addEventListener('input', function(e) {
  const imageEntry = document.getElementById('photo-entry');
  imageEntry.src = e.target.value;
})

const journalEntry = document.getElementById('journal-entry');
journalEntry.addEventListener('submit', function(e) {
  event.preventDefault();

  const newEntry = {};
  newEntry.imageURL = "";
  newEntry.title = "";
  newEntry.notes = "";

  const form = document.getElementById('journal-entry');
  for (var field in newEntry) {
    newEntry[field] = form.elements[field].value;
  }

  data.entries.push(newEntry);

  const photoImage = document.getElementById('photo-entry');
  photoImage.setAttribute('src', 'images/placeholder-image-square.jpg');

  form.reset();

  data.view = "entries";
  dataView(data);
})
