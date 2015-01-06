yc-keycode
============

yc tool for show keycode in command line

## how to use

```javascript
node index.js
```

## feature

* support numbers
* support lower case chars
* support keyname like enter tab and so on

## not support

F1 - F12 is not support, but i can tell you:

```javascript
for (i = 1; i < 13; i++) keycodes['f'+i] = i + 111;
```