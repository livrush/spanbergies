app.component('face', {
  bindings: {
    staffer: '<',
    theme: '<',
  },
  controller: function t() {
    const face = this;
    face.$onInit = function () {
      const first = face.staffer.nameFirst.split(' ').join('-').toLowerCase();
      const last = face.staffer.nameLast.toLowerCase();
      face.url = './assets/staff-photos/' + [first, last].join('-') + '.png';
    };
  },
  controllerAs: 'face',
  templateUrl: './staffer-face.html',
});
