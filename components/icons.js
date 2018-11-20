app.component('icons', {
  bindings: {
    icons: '<',
  },
  controller: function t() {
    const icons = this;
  },
  controllerAs: 'icons',
  templateUrl: './components/icons.html',
});

app.component('icon', {
  bindings: {
    name: '<',
  },
  controller: function t() {
    const icon = this;
    icon.$onInit = function() {
      icon.url = `./assets/icons/${icon.name}.svg`;
    }
  },
  controllerAs: 'icon',
  templateUrl: './components/icon.html',
});
