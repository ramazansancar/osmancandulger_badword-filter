# Bad Word Filter for EN && TR lang words

![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/osmancandulger/bdfb7916de152ee25cd78a35bdc9098e/raw/badword-filter__heads_main.json) <br>

You may filter quickly your strings in a couple steps. You can check is provided string is valid ? or you can simply replace bad word with given character.(You can use swear words list only for English language for now.)

# Related Functions

You can import related functions as follows;

```javascript
import { checkIsValid, replaceWordWith, ValidationOptions } from 'badword-filter';
```

## checkIsValid

This function takes two args and returns boolean as validation result. <br>
You can use swear words list only for English language for now.

```javascript
// TR
const ValidationOptionsTR: ValidationOptions = {
  language: 'tr',
  swear: boolean, // true if you want to check swear words.
  negative: boolean,
  political: boolean,
  religion: boolean,
};

checkIsValid('word', ValidationOptionsTR);
// returns: false

// EN
const ValidationOptionsEN: ValidationOptions = {
  language: 'en',
  swear: boolean, // true if you want to check swear words.
};

checkIsValid('word', ValidationOptionsEN);
// returns: false
```

| Parameter           | Type     | Description                                   |
| :------------------ | :------- | :-------------------------------------------- |
| `data`              | `string` | **Required**. Your string to validate.        |
| `ValidationOptions` | `object` | **Required**. Your wished badword list types. |

## replaceWordWith

This function takes three args and returns masked string with given pattern as validation result. <br>
You can use swear words list only for English language for now.

```javascript
// TR
const ValidationOptionsTR: ValidationOptions = {
  language: 'tr',
  swear: boolean,
  negative: boolean,
  political: boolean,
  religion: boolean,
};
replaceWordWith('word', '*', ValidationOptionsTR);
// returns: '****'

// EN
const ValidationOptionsEN: ValidationOptions = {
  language: 'en',
  swear: boolean,
};
replaceWordWith('word', '*', ValidationOptionsEN);
// returns: '****'
```

| Parameter              | Type     | Description                                             |
| :--------------------- | :------- | :------------------------------------------------------ |
| `data`                 | `string` | **Required**. Your string to validate.                  |
| `replacementCharacter` | `string` | **Required**. Your special character using as replacer. |
| `ValidationOptions`    | `object` | **Required**. Your wished badword list types.           |

## Demo

- [CodeSandBox Demo](https://codesandbox.io/s/badword-filter-demo-sxtz6?file=/src/App.vue)
- [CodePen Demo](https://codepen.io/osmancandulger/pen/wvqXKdz)

## Authors

- [@osmancandulger](https://www.github.com/osmancandulger)

## LICENCE

[MIT License](./LICENCE)
