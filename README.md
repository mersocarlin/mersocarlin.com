# mersocarlin

Get the AMD module located at `mersocarlin.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'Mersocarlin': 'mersocarlin'
  }
});

require(['react', 'Mersocarlin'], function(React, Mersocarlin) {

  React.render(React.createElement(Mersocarlin), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm run dev`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
