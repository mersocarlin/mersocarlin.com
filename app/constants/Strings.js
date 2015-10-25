
let Strings = {};


Strings['default'] = {
  language: 'default'
};


Strings['pt-BR'] = Object.assign({}, Strings['en-US'], {
  language: 'pt-BR',

  App: {
    AppName: 'mersocarlin',
    GravatarUrl: 'https://s.gravatar.com/avatar/9d345af079c0e2a554a586c6cad3c20c?s=300',
    MyTitle: 'Software Engineer',
    SocialList: [
      {
        name: 'LinkedIn',
        url:  'https://www.linkedin.com/in/mersocarlin/en',
        icon: 'linkedin',
        side: 0
      },
      {
        name: 'Email',
        url:  'mailto:mersocarlin@mersocarlin.com',
        icon: 'envelope-o',
        side: 0
      },
      {
        name: 'Github',
        url:  'https://github.com/mersocarlin',
        icon: 'github',
        side: 1
      },
      {
        name: 'Twitter',
        url:  'http://www.twitter.com/mersocarlin',
        icon: 'twitter',
        side: 1
      }
    ]
  }
});


module.exports = Strings['pt-BR'];
