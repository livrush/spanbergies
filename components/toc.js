app.component('toc', {
  bindings: {
    staffers: '<',
  },
  controller: function t() {
    const toc = this;
  },
  controllerAs: 'toc',
  templateUrl: './toc.html',
});

app.component('tocStaffer', {
  bindings: {
    first: '<',
    last: '<',
  },
  controller: function s() {
    const staffer = this;
    staffer.$onInit = function() {
      const first = staffer.first.split(' ').join('-').toLowerCase();
      const last = staffer.last.toLowerCase();
      staffer.url = './assets/staff-photos/' + [first, last].join('-') + '.png';
    };
  },
  controllerAs: 'staffer',
  template: `<div class="toc-staffer">
    <a ng-href="#{{staffer.first}}-{{staffer.last}}">
      <img ng-src="{{staffer.url}}" />
    </a>
  </div>`,
});
