const app = angular
  .module('spanbergies', [])
  .component('app', {
    controller: function c(awards) {
      const app = this;
      // TODO: Use shuffle function here to shuffle people
      app.awards = _.shuffle(awards.byPerson);
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
          emojis: [
            'a sign??',
          ],
        },
        {
          nameFirst: 'Dana',
          nameLast: 'Bye',
          // award: 'Best removal of an undercover operative',
          award: 'Best dismissing undercover operative',
          emojis: [
            'female police officer',
            'siren',
          ],
        },
        {
          nameFirst: 'Karen',
          nameLast: 'Mask',
          // award: 'Best creation of long term morale building tool',
          award: 'Best morale building tool',
          emojis: [
            'good morning',
            'good night',
            'book',
          ],
        },
        {
          nameFirst: 'Max',
          nameLast: 'Heyworth',
          award: 'Best Slack-er',
          emojis: [
            'laughing',
            'slack',
          ],
        },
        {
          nameFirst: 'Justin',
          nameLast: 'Jones',
          award: 'Best late night whiskey provider',
          emojis: [
            'whiskey',
          ],
        },
        {
          nameFirst: 'Bettina',
          nameLast: 'Weiss',
          // award: 'Best brand ambassador for washable shoes made from recycled plastic who can give you a $20 coupon',
          award: 'Best recycled-plastic-shoe brand ambassador',
          emojis: [
            'shoes',
            'recycle',
          ],
        },
        {
          nameFirst: 'Sam Louis',
          nameLast: 'Taylor',
          award: 'Best dancing by the coffee maker',
          emojis: [
            'dancing guy',
            'coffee',
          ],
        },
        {
          nameFirst: 'MacKenzie',
          nameLast: 'Heidelmark',
          // award: 'Best spying on a staffer while they were pretending to work at home',
          award: 'Best cop-buddy movie style spying on a staffer',
          emojis: [
            'spy emojis',
            'or binoculars',
          ],
        },
        {
          nameFirst: 'Kayla',
          nameLast: 'Enoch',
          award: 'Best lifting kids upside down',
          emojis: [
            'upside down face',
          ],
        },
        {
          nameFirst: 'Wynne',
          nameLast: 'Graham',
          award: 'Best hiding birthday for selfless reasons',
          emojis: [
            'birthday cake',
          ],
        },
        {
          nameFirst: 'Zoe',
          nameLast: 'Kozlowski',
          award: 'Best being around inedible free food',
          emojis: [
            'no mouth',
          ],
        },
        {
          nameFirst: 'Adriane',
          nameLast: 'Vaughn',
          award: 'Best sassy faces',
          emojis: [
            'sassy face',
          ],
        },
        {
          nameFirst: 'Emma',
          nameLast: 'Carl',
          award: 'Best vodka choice',
          emojis: [
            'lemon, strawberry',
          ],
        },
        {
          nameFirst: 'Whitney',
          nameLast: 'Holt',
          // award: 'Best job not fucking up a friend online the day after Election Day',
          award: 'Best spotting a tracker',
          emojis: [
            'friendly face',
          ],
        },
        {
          nameFirst: 'Kristi',
          nameLast: 'Black',
          award: 'Best coffee order',
          // award: 'Best dancing on the bed',
          // award: 'Best laptop login password',
          emojis: [
            'coffee',
          ],
        },
        {
          nameFirst: 'Michael',
          nameLast: 'Phelan',
          award: 'Best deflection of a tracker',
          emojis: [
            'open hand',
          ],
        },
        {
          nameFirst: 'Eliza',
          nameLast: 'Wood',
          // award: 'Best job listening to Republicans for hours without bleeding from your ears',
          award: 'Best listening to Republicans',
          emojis: [
            'headphones',
          ],
        },
        {
          nameFirst: 'Mary Jo',
          nameLast: 'Sheeley',
          award: 'Best self care basket',
          emojis: [
            'basket',
          ],
        },
        {
          nameFirst: 'Nick',
          nameLast: 'Stevens',
          award: 'Best beard',
          emojis: [
            'beard man',
          ],
        },
        {
          nameFirst: 'Pat',
          nameLast: 'Dolan',
          award: 'Best avoiding photos',
          emojis: [
            'dash',
            'camera',
          ],
        },
        {
          nameFirst: 'Dale',
          nameLast: 'Wolf',
          award: 'Best Westbury Pharmacy customer',
          emojis: [
            'candy',
            'candy',
          ],
        },
        {
          nameFirst: 'Jin',
          nameLast: 'Sheeley',
          award: 'Best dog mom',
          emojis: [
            'dog',
          ],
        },
        {
          nameFirst: 'Rusty',
          nameLast: 'Tutton',
          award: 'Best pinch hitter',
          emojis: [
            'baseball bat and ball',
          ],
        },
        {
          nameFirst: 'Aateeb',
          nameLast: 'Khan',
          // award: 'Best moving to San Francisco without telling anyone',
          award: 'Best silent moving to SF',
          emojis: [
            'airplane',
          ],
        },
        {
          nameFirst: 'Michael',
          nameLast: 'Keegan',
          award: 'Best positive attitude',
          emojis: [
            'happy face',
          ],
        },
        {
          nameFirst: 'Abigail',
          nameLast: 'Spanberger',
          award: 'Best British accent in French',
          emojis: [
            'monocle',
            'french flag',
            'british flag',
          ],
        },
        // TODO: add Arika and Ryan??
        // TODO: add Andrea Goulet??
      ]
  });