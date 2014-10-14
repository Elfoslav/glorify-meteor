Template.helpers.rendered = function() {
  SyntaxHighlight();
};

Template.helpers.helpers({
  books: function() {
    return ['Discover Meteor', 'Meteor in action', 'Practical Meteor'];
  },
  booksObjects: function() {
    return [
      { title: 'Discover Meteor', pages: 300 },
      { title: 'Meteor in action', pages: 250 },
      { title: 'Practical Meteor', pages: 199 }
    ];
  },
  add: function(a, b) {
    return a + b;
  },
  showBooks: function() {
    return '{{#each books}}\n' +
            '  <p>{{this}}</p>\n' +
            '{{/each}}';
  },
  showBooksObjects: function() {
    return '{{#each books}}\n' +
            '  <p>{{title}}, {{pages}} pages.</p>\n' +
            '{{/each}}';
  },
  addHelper: function() {
    return '{{add 5 6}}';
  }
});