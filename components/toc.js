app.component('toc', {
  bindings: {
      num: '<',
    },
    controller: () => {
      const choice = this;
    },
    controllerAs: 'choice',
    templateUrl: '/templates/choice.html',
});

app.component('toc-person', {
  bindings: {
    : '<',
  },
  controller: () => {
    const choice = this;
  },
  controllerAs: 'choice',
  templateUrl: '/templates/choice.html',
})