module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "react-app"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "strict": [0],                                        //【禁用】严格模式
    "indent": [2, 2, { "SwitchCase": 1 }],                // 语句缩进两个空格位
    "vars-on-top": [0],                                   //【禁用】var必须放在作用域顶部
    "radix": [0],                                         //【禁用】parseInt必须指定第二个参数
    "max-len": [1, { "code": 180 }],                      // 代码行最大长度180个字符
    "max-params": [1, { "max": 8 }],                      // 函数最多只能有8个参数
    "max-depth": [1, { "max": 5 }],                       // 嵌套块深度最多五级
    "semi": [2, "always"],                                // 语句强制分号结尾
    "one-var": [0],                                       //【禁用】连续声明规则
    "no-var": [0],                                        //【禁用】var，用let和const代替
    "no-plusplus": [0],                                   //【禁用】禁止使用++，--
    "no-underscore-dangle": [0],                          //【禁用】标识符不能以_开头或结尾
    "no-param-reassign": [0],                             //【禁用】禁止给参数重新赋值
    "no-shadow": [0],                                     //【禁用】外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    "no-console": [0],                                    //【禁用】禁止使用console
    "no-new": [0],                                        //【禁用】禁止在使用new构造一个实例后不赋值
    "no-loop-func": [0],                                  //【禁用】禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    "no-useless-constructor": [0],
    "no-useless-return": [0],
    "no-unused-expressions": [0],                         //禁止无用的表达式
    "no-unneeded-ternary": [0],                           //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    "no-useless-escape": [0],
    "no-multi-assign": [0],
    "no-lonely-if": [0],                                  //禁止else语句内只有if语句
    "no-useless-concat": [0],
    "no-script-url": [0],                                 //禁止使用javascript:void(0)
    "operator-assignment": [0],                           //赋值运算符 += -=等
    "dot-notation": [0],                                  //避免不必要的方括号
    "camelcase": [0],                                     //强制驼峰法命名
    "object-shorthand": [0],                              //强制对象字面量缩写语法
    "class-methods-use-this": [0],
    "prefer-template": [0],
    "prefer-const": [0],                                  //首选const
    "prefer-arrow-callback": [0],
    "no-irregular-whitespace": [2],                       //不能有不规则的空格
    "no-spaced-func": [2],                                //函数调用时 函数名与()之间不能有空格
    "no-sparse-arrays": [2],                              //禁止稀疏数组， [1,,2]
    "no-trailing-spaces": [1],                            //一行结束后面不要有空格
    "key-spacing": [1, { "beforeColon": false, "afterColon": true }],  //对象字面量中冒号的前后空格
    "semi-spacing": [1, { "before": false, "after": true }],           //分号前后空格
    "comma-spacing": [1],                                              //逗号前后的空格
    "object-curly-spacing": [1],                                       //强制在花括号中使用一致的空格
    "prefer-destructuring": ["error", {
      "array": false,
      "object": false,
    }, {
      "enforceForRenamedProperties": false,
    }],
    "func-names": [0],                                    //函数表达式必须有名字
    "generator-star-spacing": [0],                        //生成器函数*的前后空格
    "consistent-return": [0],                             //return 后面是否允许省略
    "no-mixed-operators": [0],
    "react/forbid-prop-types": [0],
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "global-require": [0],
    "import/order": [0],
    "import/prefer-default-export": [0],
    "react/sort-comp": [0],
    "react/no-multi-comp": [0],
    "react/no-unescaped-entities": [0],
    "react/no-array-index-key": [0],
    "react/no-find-dom-node": [0],
    "react/no-access-state-in-setstate": [0],
    "react/jsx-no-bind": [0],
    "react/no-unused-state": [0],
    "react/prop-types": [0],
    "react/no-unused-prop-types": [0],
    "react/no-danger": [0],
    "react/prefer-stateless-function": [0],
    "react/jsx-one-expression-per-line": [0],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "ignore",
      },
    ],
    "react/no-direct-mutation-state": [0],
    "react/destructuring-assignment": [0],
    "react/require-default-props": [0],
    "no-else-return": [0],
    "no-restricted-syntax": [0],
    "import/no-dynamic-require": [0],
    "import/newline-after-import": [0],
    "import/no-extraneous-dependencies": [0],
    "no-use-before-define": [0],
    "no-return-assign": [2, "except-parens"],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "jsx-a11y/href-no-hash": [0],
    "jsx-a11y/anchor-is-valid": [0],
    "jsx-a11y/label-has-associated-control": [0],
    "jsx-a11y/label-has-for": [0],
    "jsx-a11y/media-has-caption": [0],
    "no-nested-ternary": [0],
    "arrow-body-style": [0],
    "import/extensions": [0],
    "no-bitwise": [0],
    "no-cond-assign": [0],
    "import/no-unresolved": [0],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore",
      },
    ],
    "object-curly-newline": [0],
    "function-paren-newline": [0],
    "no-restricted-globals": [0],
    "require-yield": [1],
  },
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  settings: {
    polyfills: ["fetch", "promises"],
  },
  "plugins": ["react"],
};
