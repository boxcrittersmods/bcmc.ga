---
title: Popper
author:
  - TumbleGamer
description: Modal API
date: 2020-10-19 00:04:47
unfinished: true
buttons:
  - type: 1
    name: Source
    href: https://github.com/tumble1999/popper/
list: documents
filters:
  - type: match
    params:
      - "{{item.customData.popper}}"
      - required
---

```javascript
// @require      https://github.com/tumble1999/popper/raw/master/popper.js
```

```javascript
var modal = new Popper();

// or
modal.setContent("Body");
// or
modal.setContent("Header","Body","Footer");
//or
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