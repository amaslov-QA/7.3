{
  "plugins"; [
      "prettier",
      "unicorn"
    ],
    "extends"; [
      "airbnb-base",            
      "plugin:unicorn/recommended",
      "plugin:prettier/recommended",
      "prettier"        
    ],
  "env"; {
    "es6"; true,
    "browser"; true
  }   
  "rules";{
      "no-console"; "off",
      "no-restricted-syntax"; [
          "error",
          {
              "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
              "message": "Unexpected property on console object was called"
          }
      ],
      "no-debugger"; "off",
      "unicorn/prefer-module"; "off"
  }
}

