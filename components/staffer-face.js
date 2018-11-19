app.component('face', {
  bindings: {
    staffer: '<',
  },
  controller: function t() {
    const face = this;
    console.log(face);
    face.$onInit = function () {
      const first = face.staffer.nameFirst.split(' ').join('-').toLowerCase();
      const last = face.staffer.nameLast.toLowerCase();
      face.url = '/assets/staff-photos/' + [first, last].join('-') + '.png';
    };
  },
  controllerAs: 'face',
  templateUrl: '/components/staffer-face.html',
});
