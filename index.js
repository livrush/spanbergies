const app = angular
  .module('spanbergies', [])
  .component('app', {
    controller: function c(awards) {
      const app = this;
      // TODO: Use shuffle function here to shuffle people
      app.awards = _.shuffle(awards.byPerson);
      app.toggleToc = () => {
        const TOC = document.getElementsByClassName('table-of-contents-container');
        TOC[0].classList.toggle("hidden");
      };
    },
    controllerAs: 'app',
    templateUrl: './components/app.html',
  })
  .factory('logic', function() {
    return {
      styleBoolean: (index) => index % 2 === 0,
    };

    // TODO: Add shuffle function here
  })
  .service('awards', function f() {
      this.byPerson = [{
          nameFirst: 'Adam',
          nameLast: 'Spanberger',
          // award: 'Best sign putter-upper and billboard believer',
          award: 'Best billboard believer',
          icons: [
            'billboard',
            'billboard',
            'billboard',
            'billboard',
            'billboard',
          ],
        },
        {
          nameFirst: 'Dana',
          nameLast: 'Bye',
          // award: 'Best removal of an undercover operative',
          award: 'Best dismissing undercover operative',
          icons: [
            'siren',
            'police',
            'siren',
            'police',
            'siren',
          ],
        },
        {
          nameFirst: 'Karen',
          nameLast: 'Mask',
          // award: 'Best creation of long term morale building tool',
          award: 'Best morale building tool',
          icons: [
            'book',
            'cloudy',
            'book',
            'moon',
            'book',
          ],
        },
        {
          nameFirst: 'Max',
          nameLast: 'Heyworth',
          award: 'Best Slack-er',
          icons: [
            'slack',
            'smile',
            'slack',
            'smile',
            'slack',
          ],
        },
        {
          nameFirst: 'Justin',
          nameLast: 'Jones',
          award: 'Best late night whiskey provider',
          icons: [
            'scotch',
            'shots',
            'scotch',
            'shots',
            'scotch',
          ],
        },
        {
          nameFirst: 'Bettina',
          nameLast: 'Weiss',
          // award: 'Best brand ambassador for washable shoes made from recycled plastic who can give you a $20 coupon',
          award: 'Best recycled-plastic-shoe brand ambassador',
          icons: [
            'shoes',
            'recycle',
            'shoes',
            'recycle',
            'shoes',
          ],
        },
        {
          nameFirst: 'Sam Louis',
          nameLast: 'Taylor',
          award: 'Best dancing by the coffee maker',
          icons: [
            'dance',
            'coffee-mug',
            'dance',
            'coffee-mug',
            'dance',
          ],
        },
        {
          nameFirst: 'MacKenzie',
          nameLast: 'Heidelmark',
          // award: 'Best spying on a staffer while they were pretending to work at home',
          award: 'Best cop-buddy movie style spying on a staffer',
          icons: [
            'binoculars',
            'detective',
            'binoculars',
            'detective',
            'binoculars',
          ],
        },
        {
          nameFirst: 'Kayla',
          nameLast: 'Enoch',
          award: 'Best lifting kids upside down',
          icons: [
            'girl',
            'lifting',
            'girl',
            'lifting',
            'girl',
          ],
        },
        {
          nameFirst: 'Wynne',
          nameLast: 'Graham',
          award: 'Best hiding birthday for selfless reasons',
          icons: [
            'balloons',
            'cake',
            'balloons',
            'cake',
            'balloons',
          ],
        },
        {
          nameFirst: 'Zoe',
          nameLast: 'Kozlowski',
          award: 'Best survival around inedible free food',
          icons: [
            'groceries',
            'zip-mouth',
            'groceries',
            'zip-mouth',
            'groceries',
          ],
        },
        {
          nameFirst: 'Adriane',
          nameLast: 'Vaughan',
          // award: 'Best sassy faces',
          award: 'Best cracking the call time whip',
          icons: [
            'telephone',
            'eyes',
            'telephone',
            'eyes',
            'telephone',
          ],
        },
        {
          nameFirst: 'Emma',
          nameLast: 'Carl',
          award: 'Best vodka choice',
          icons: [
            'lemon',
            'strawberry',
            'lemon',
            'strawberry',
            'lemon',
          ],
        },
        {
          nameFirst: 'Whitney',
          nameLast: 'Holt',
          // award: 'Best job not fucking up a friend online the day after Election Day',
          award: 'Best spotting a tracker',
          icons: [
            'search',
            'whistle',
            'search',
            'whistle',
            'search',
          ],
        },
        {
          nameFirst: 'Kristi',
          nameLast: 'Black',
          award: 'Best coffee order',
          // award: 'Best dancing on the bed',
          // award: 'Best laptop login password',
          icons: [
            'coffee',
            'scroll',
            'coffee',
            'scroll',
            'coffee',
          ],
        },
        {
          nameFirst: 'Michael',
          nameLast: 'Phelan',
          award: 'Best deflection of a tracker',
          icons: [
            'no-entry',
            'no-mouth',
            'no-entry',
            'no-mouth',
            'no-entry',
          ],
        },
        {
          nameFirst: 'Eliza',
          nameLast: 'Wood',
          // award: 'Best job listening to Republicans for hours without bleeding from your ears',
          award: 'Best long-term exposure to Republicans',
          icons: [
            'headphones',
            'elephant',
            'headphones',
            'elephant',
            'headphones',
          ],
        },
        {
          nameFirst: 'Mary Jo',
          nameLast: 'Sheeley',
          award: 'Best self care basket',
          award: 'Best office mom',
          icons: [
            'medal',
            'flowers',
            'medal',
            'flowers',
            'medal',
          ],
        },
        {
          nameFirst: 'Nick',
          nameLast: 'Stevens',
          award: 'Best beard',
          icons: [
            'beard',
            'bearded',
            'beard',
            'bearded',
            'beard',
          ],
        },
        {
          nameFirst: 'Pat',
          nameLast: 'Dolan',
          award: 'Best avoiding photos',
          icons: [
            'wind',
            'camera',
            'wind',
            'camera',
            'wind',
          ],
        },
        {
          nameFirst: 'Dale',
          nameLast: 'Wolf',
          award: 'Best Westbury Pharmacy customer',
          icons: [
            'mint',
            'fish',
            'mint',
            'fish',
            'mint',
          ],
        },
        {
          nameFirst: 'Jin',
          nameLast: 'Sheeley',
          award: 'Best dog mom',
          icons: [
            'pawprints',
            'mom',
            'pawprints',
            'mom',
            'pawprints',
          ],
        },
        {
          nameFirst: 'Rusty',
          nameLast: 'Tutton',
          award: 'Best pinch hitter',
          icons: [
            'baseball',
            'cap',
            'baseball',
            'cap',
            'baseball',
          ],
        },
        {
          nameFirst: 'Aateeb',
          nameLast: 'Khan',
          // award: 'Best moving to San Francisco without telling anyone',
          award: 'Best silent moving to SF',
          icons: [
            'airplane',
            'moving',
            'airplane',
            'moving',
            'airplane',
          ],
        },
        {
          nameFirst: 'Michael',
          nameLast: 'Keegan',
          // award: 'Best positive attitude',
          award: 'Best polite reminders for self care',
          icons: [
            'happy',
            'happy',
            'happy',
            'happy',
            'happy',
          ],
        },
        {
          nameFirst: 'Abigail',
          nameLast: 'Spanberger',
          award: 'Best British accent in French',
          icons: [
            // 'monocle',
            'soldier',
            'eiffel-tower',
            'soldier',
            'eiffel-tower',
            'soldier',
          ],
        },
        // TODO: add Arika and Ryan??
        // TODO: add Andrea Goulet??
      ]
  });