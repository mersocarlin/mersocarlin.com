
let Strings = {};


Strings['default'] = {
  language: 'default'
};


Strings['pt-BR'] = Object.assign({}, Strings['en-US'], {
  language: 'pt-BR',

  App: {
    GravatarUrl: 'https://s.gravatar.com/avatar/9d345af079c0e2a554a586c6cad3c20c?s=300',

    CenterName: 'mersocarlin',

    Social: [
      {
        Name: 'LinkedIn',
        URL: 'https://www.linkedin.com/in/mersocarlin/en'
      },
      {
        Name: 'GMail',
        URL: 'mailto:mersocarlin@mersocarlin.com'
      },
      {
        Name: 'Facebook',
        URL: 'http://www.facebook.com/mersocarlin'
      },
      {
        Name: 'Twitter',
        URL: 'http://www.twitter.com/mersocarlin'
      }
    ]
  }
});


module.exports = Strings['pt-BR'];
