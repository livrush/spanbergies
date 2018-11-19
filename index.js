const app = angular
  .module('spanbergies', [])
  .component('app', {
    controller: function c(awards) {
      const app = this;
      // TODO: Use shuffle function here to shuffle people
      app.awards = awards.byPerson;
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
          emoji: 'a sign??',
        },
        {
          nameFirst: 'Dana',
          nameLast: 'Bye',
          award: 'Best removal of an undercover operative from office',
          emoji: 'police siren',
        },
        {
          nameFirst: 'Karen',
          nameLast: 'Mask',
          award: 'Best creation of long term morale building tool',
          emoji: 'good morning good night',
        },
        {
          nameFirst: 'Max',
          nameLast: 'Heyworth',
          award: 'Best joker on Slack',
          emoji: 'laughing',
        },
        {
          nameFirst: 'Justin',
          nameLast: 'Jones',
          award: 'Best late night whiskey provider',
          emoji: 'whiskey',
        },
        {
          nameFirst: 'Bettina',
          nameLast: 'Weiss',
          award: 'Best brand ambassador for washable shoes made from recycled plastic who can give you a $20 coupon',
          emoji: 'shoes',
        },
        {
          nameFirst: 'Sam Louis',
          nameLast: 'Taylor',
          award: 'Best dancing by the coffee maker',
          emoji: 'dancing guy',
        },
        {
          nameFirst: 'MacKenzie',
          nameLast: 'Heidelmark',
          award: 'Best spying on a staffer while they were pretending to work at home',
          emoji: 'spy emoji, or binoculars',
        },
        {
          nameFirst: 'Kayla',
          nameLast: 'Enoch',
          award: 'Best lifting kids upside down',
          emoji: 'upside down face',
        },
        {
          nameFirst: 'Wynne',
          nameLast: 'Graham',
          award: 'Best hiding of birthday for selfless reasons',
          emoji: 'birthday cake',
        },
        {
          nameFirst: 'Zoe',
          nameLast: 'Kozlowski',
          award: 'Best putting up with food shit',
          emoji: 'no mouth',
        },
        {
          nameFirst: 'Adriane',
          nameLast: 'Vaughn',
          award: 'Best sassy faces',
          emoji: 'sassy face',
        },
        {
          nameFirst: 'Emma',
          nameLast: 'Carl',
          award: 'Best vodka choice',
          emoji: 'lemon, strawberry',
        },
        {
          nameFirst: 'Whitney',
          nameLast: 'Holt',
          award: 'Best job not fucking up a friend online the day after Election Day',
          emoji: 'friendly face',
        },
        {
          nameFirst: 'Kristi',
          nameLast: 'Black',
          award: 'Best coffee order',
          emoji: 'coffee',
        },
        {
          nameFirst: 'Michael',
          nameLast: 'Phelan',
          award: 'Best deflection of a tracker',
          emoji: 'open hand',
        },
        {
          nameFirst: 'Eliza',
          nameLast: 'Wood',
          award: 'Best job listening to Republicans for hours without bleeding from your ears',
          emoji: 'headphones',
        },
        {
          nameFirst: 'Mary Jo',
          nameLast: 'Sheeley',
          award: 'Best self care basket',
          emoji: 'basket',
        },
        {
          nameFirst: 'Nick',
          nameLast: 'Stevens',
          award: 'Best beard',
          emoji: 'beard man',
        },
        {
          nameFirst: 'Pat',
          nameLast: 'Dolan',
          award: 'Best at avoiding photo',
          emoji: 'wind that looks like fart',
        },
        {
          nameFirst: 'Dale',
          nameLast: 'Wolf',
          award: 'Best Westbury Pharmacy customer',
          emoji: 'candy',
        },
        {
          nameFirst: 'Jin',
          nameLast: 'Sheeley',
          award: 'Best dog mom',
          emoji: 'dog',
        },
        {
          nameFirst: 'Rusty',
          nameLast: 'Tutton',
          award: 'Best pinch hitter on the field team',
          emoji: 'baseball bat and ball',
        },
        {
          nameFirst: 'Aateeb',
          nameLast: 'Khan',
          award: 'Best moving to San Francisco without telling anyone',
          emoji: 'airplane',
        },
        {
          nameFirst: 'Michael',
          nameLast: 'Keegan',
          award: 'Best positive attitude',
          emoji: 'happy face',
        },
        {
          nameFirst: 'Abigail',
          nameLast: 'Spanberger',
          award: 'Best British accent in French',
          emoji: 'monocle',
        },
      ]
  });