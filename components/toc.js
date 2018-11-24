app.component('toc', {
  bindings: {
    staffers: '<',
  },
  controller: function t() {
    const toc = this;
    toc.hideToc = () => {
      const TOC = document.getElementsByClassName('table-of-contents-container');
      TOC[0].classList.add("hidden");
    };
  },
  controllerAs: 'toc',
  templateUrl: './components/toc.html',
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
    staffer.hideToc = () => {
      const TOC = document.getElementsByClassName('table-of-contents-container');
      TOC[0].classList.add("hidden");
    };
  },
  controllerAs: 'staffer',
  template: `<div class="toc-staffer" ng-click="staffer.hideToc()">
    <a ng-href="#{{staffer.first}}-{{staffer.last}}" ng-attr-title="{{staffer.first}} {{staffer.last}}">
      <img ng-src="{{staffer.url}}" />
    </a>
  </div>`,
});
