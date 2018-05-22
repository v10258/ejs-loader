# ejs-loader for webpack

EJS loader for webpack. Uses ejs function to compile templates.

## Installation

`npm install ejs-loader`

## Usage

``` javascript
var template = require("ejs!./file.ejs");
// => returns the template function compiled with undesrcore (lodash) templating engine.

// And then use it somewhere in your code
template(data) // Pass object with data
```

### Options

``` js
module.exports = {
    module: {
        loaders: [
            {
                test: /\.ejs$/, 
                loader: 'ejs-loader'
            },
        ]
    }
};
```


### Including nested templates



## Release History
* 0.0.1 - Initial release

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
