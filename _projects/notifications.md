---
title: Notifications
description: API for sending and logging notifications
date: 2022-05-04
author:
  - Tumble
buttons:
  - name: Source
    href: https://github.com/tumble1999/bc-notify
  - type: 1
    name: Install
    href: https://github.com/tumble1999/bc-notify/raw/master/bc-notify.user.js
customData:
  modial: required
  critterguration: required
  ctrlPanel: optional
  bcmacro-api: optional
list: documents
filters:
  - type: exists
    params:
      - "{{item.customData.notifications}}"
---
## Install:
```js
// @require      https://github.com/tumble1999/bc-notify/raw/master/bc-notify.user.js
```

## Usage
```js
BCNotify.notify({
	mod: {
		name: "Mod Name"
	},
	title: "Hello World",
	body: "This is some text",
	//optional
	icon: "url to icon"
});
```
