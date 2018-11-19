app.component('staffer', {
  bindings: {
    details: '<',
    index: '<',
  },
  controller: function t(logic) {
    const staffer = this;
    staffer.$onInit = function () {
      staffer.style = logic.styleBoolean(staffer.index) ? 'light' : 'dark';
    };
  },
  controllerAs: 'staffer',
  templateUrl: '/components/staffer.html',
});
