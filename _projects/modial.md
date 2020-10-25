---
title: Modial
description: Modal API
date: 2020-10-19 00:04:47
icon: https://github.com/tumble1999/modial/raw/master/icon.png
author:
  - TumbleGamer

buttons:
  - type: 1
    name: Source
    href: https://github.com/tumble1999/modial/

list: documents
filters:
  - type: match
    params:
      - "{{item.customData.modial}}"
      - required
---
```js
// @require      https://github.com/tumble1999/modial/raw/master/modial.js
```
```js
let modal = new Modial();
// or
modal.setContent("Body");
// or
modal.setContent("Header","Body","Footer");
// or
modal.setContent({
header:"Header",
body:"Body",
footer:"Footer"
});

// or you can get the nodes to do things like append children or something
modal.getHeaderNode()
modal.getBodyNode()
modal.getFooterNode()

modal.show()
modal.hide()
```