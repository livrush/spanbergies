const app = angular
  .module('spanbergies', [])
  .component('app', {
    controller: function c(awards) {
      const app = this;
      app.awards = awards.byPerson;
      console.log(app.awards);
    },
    controllerAs: 'app',
    templateUrl: './components/app.html',
  })
  .factory('awards', function f() {
    return {
      byPerson: [{
          nameFirst: 'Adam',
          nameLast: 'Spanberger',
          award: 'Best sign putter-upper and billboard believer',
        },
        {
          nameFirst: 'Dana',
          nameLast: 'Bye',
          award: 'Best removal of an undercover operative from office',
        },
        {
          nameFirst: 'Karen',
          nameLast: 'Mask',
          award: 'Best creation of long term morale building tool',
        },
        {
          nameFirst: 'Max',
          nameLast: 'Heyworth',
          award: 'Best on Slack',
        },
        {
          nameFirst: 'Justin',
          nameLast: 'Jones',
          award: 'Best late night whiskey provider',
        },
        {
          nameFirst: 'Bettina',
          nameLast: 'Weiss',
          award: 'Best brand ambassador for washable shoes made from recycled plastic who can give you a $20 coupon',
        },
        {
          nameFirst: 'Sam Louis',
          nameLast: 'Taylor',
          award: 'Best dancing by the coffee maker',
        },
        {
          nameFirst: 'MacKenzie',
          nameLast: 'Heidelmark',
          award: 'Best spying on a staffer while they were pretending to work at home',
        },
        {
          nameFirst: 'Kayla',
          nameLast: 'Enoch',
          award: 'Best lifting kids upside down',
        },
        {
          nameFirst: 'Wynne',
          nameLast: 'Graham',
          award: 'Best hiding of birthday for selfless reasons',
        },
        {
          nameFirst: 'Zoe',
          nameLast: 'Kozlowski',
          award: 'Best putting up with food shit',
        },
        {
          nameFirst: 'Adriane',
          nameLast: 'Vaughn',
          award: 'Best sassy faces',
        },
        {
          nameFirst: 'Emma',
          nameLast: 'Carl',
          award: 'Best vodka choice',
        },
        {
          nameFirst: 'Whitney',
          nameLast: 'Holt',
          award: 'Best job not fucking up a friend online the day after Election Day',
        },
        {
          nameFirst: 'Kristi',
          nameLast: 'Black',
          award: 'Best coffee order',
        },
        {
          nameFirst: 'Michael',
          nameLast: 'Phelan',
          award: 'Best deflection of a tracker',
        },
        {
          nameFirst: 'Eliza',
          nameLast: 'Wood',
          award: 'Best job listening to Republicans for hours without bleeding from your ears',
        },
        {
          nameFirst: 'Mary Jo',
          nameLast: 'Sheeley',
          award: 'Best self care basket',
        },
        {
          nameFirst: 'Nick',
          nameLast: 'Stevens',
          award: 'Best beard',
        },
        {
          nameFirst: 'Pat',
          nameLast: 'Dolan',
          award: 'Best at avoiding photo',
        },
        {
          nameFirst: 'Dale',
          nameLast: 'Wolf',
          award: 'Best Westbury Pharmacy customer',
        },
        {
          nameFirst: 'Jin',
          nameLast: 'Sheeley',
          award: 'Best dog mom',
        },
        {
          nameFirst: 'Rusty',
          nameLast: 'Tutton',
          award: 'Best pinch hitter on the field team',
        },
        {
          nameFirst: 'Aateeb',
          nameLast: 'Khan',
          award: 'Best moving to San Francisco without telling anyone',
        },
        {
          nameFirst: 'Michael',
          nameLast: 'Keegan',
          award: 'Best positive attitude',
        },
        {
          nameFirst: 'Abigail',
          nameLast: 'Spanberger',
          award: 'Best British accent in French',
        },
      ]
    }
  });