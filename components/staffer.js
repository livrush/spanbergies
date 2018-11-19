app.component('staffer', {
  bindings: {
    details: '<',
    index: '<',
  },
  controller: function t(logic) {
    const staffer = this;
    staffer.$onInit = function () {
      staffer.style = logic.styleBoolean(staffer.index) ? 'light' : 'dark';
      staffer.photoOrder = logic.styleBoolean(staffer.index) ? 'order-md-1' : 'order-md-2';
      staffer.textOrder = logic.styleBoolean(staffer.index) ? 'order-md-2' : 'order-md-1';
    };
  },
  controllerAs: 'staffer',
  templateUrl: '/components/staffer.html',
});
