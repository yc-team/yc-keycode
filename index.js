var keypress = require('keypress');

//() * @ is not support
var keycodes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'escape': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'windows': 91,
  'command': 91,
  'right click': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
};

// lower case chars
for (i = 97; i < 123; i++) keycodes[String.fromCharCode(i)] = i - 32;

// numbers
for (var i = 48; i < 58; i++) keycodes[i - 48] = i;

// numpad keys
for (i = 0; i < 10; i++) keycodes['numpad '+i] = i + 96;



keypress(process.stdin);


//
if (process.stdin.setRawMode) {
    process.stdin.setRawMode(true);
} else {
    require('tty').setRawMode(true);
}

//keypress module offer the function
process.stdin.on('keypress', function (c, key) {
    //@Example 数字1键
    //{ '0': '1', '1': undefined }

    //@Example enter键
    //{ '0': '\r',
    //  '1': {name: 'enter', ctrl: false,
    //        meta: false,shift: false,sequence: '\r' } }
    console.log(arguments);

    if (!key) {
        console.log(keycodes[c]);
    } else {
        console.log(keycodes[key.name]);
    }

    //ctrl + c 退出
    if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
    }
});