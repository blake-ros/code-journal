/* exported data */

var data = {
  view: 'edit-profile',
  profile: {
    username: '',
    fullName: '',
    location: '',
    avatarUrl: '',
    bio: ''
  },
  entries: []
};

const myData = localStorage.getItem('code-journal');

if (myData !== null) {
  data = JSON.parse(myData);
}

window.addEventListener('beforeunload', function (e) {
  const myState = JSON.stringify(data);
  localStorage.setItem('code-journal', myState);
});
