app.component('icon', {
  bindings: {
    name: '<',
  },
  controller: function t() {
    const icon = this;
    console.log(icon.name)
  },
  controllerAs: 'icon',
  templateUrl: '/components/icon.html',
});
