app.component('toc', {
  bindings: {
    staffers: '<',
  },
  controller: function t() {
    const toc = this;
    console.log(toc);
  },
  controllerAs: 'toc',
  templateUrl: '/components/toc.html',
});

app.component('staffer', {
  bindings: {
    first: '<',
    last: '<',
  },
  controller: function s() {
    const staffer = this;
    staffer.$onInit = function() {
      const first = staffer.first.split(' ').join('-').toLowerCase();
      const last = staffer.last.toLowerCase();
      staffer.url = '/assets/staff-photos/' + [first, last].join('-') + '.png';
      console.log(staffer.url);
    };
  },
  controllerAs: 'staffer',
  // template: `<div class="staffer">{{staffer.first}}</div>`,
  template: `<div class="toc-staffer"><img ng-src="{{staffer.url}}" /></div>`,
});
