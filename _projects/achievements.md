---
title: Achievements
description: API for creating and managing achievements
date: 2022-05-05
author:
  - Tumble
list: documents
buttons:
  - name: Source
    href: https://github.com/tumble1999/bc-achieve
  - type: 1
    name: Install
    href: https://github.com/tumble1999/bc-achieve/raw/master/bc-achieve.user.js
customData:
  modial: required
  critterguration: required
  ctrlPanel: optional
  bcmacro-api: optional
  notifications: required
filters:
  - type: exists
    params:
      - "{{item.customData.achievements}}"
---
## Install
```js
// @require https://github.com/tumble1999/bc-achieve/raw/master/bc-achieve.user.js
```

## Usage
```js
BCAchieve.createAchievement({
	mod: BCAchieve,
	name: "Test Achivement",
	description: "Test the achivement system."
});

BCAchieve.createAchievement({
	mod: BCAchieve,
	name: "Test Incremental Achivement",
	description: "Test the achivement system.",
	amount: 5
});

BCAchieve.createAchievement({
	mod: BCAchieve,
	name: "Test Image Achivement",
	description: "Test the achivement system.",
	icon: "https://boxcritters.com/images/menu/Btn_Menu_Items_A.png"
});
```