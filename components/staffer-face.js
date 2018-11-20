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
      face.url = `./assets/staff-photos/${[first, last].join('-')}.png`;
      face.seal = `./assets/seal-${face.theme}.svg`;
    };
  },
  controllerAs: 'face',
  templateUrl: './components/staffer-face.html',
});
