---
title: Critterguration
description: Settings API that shows each mod's settings in its own tab
image: https://github.com/tumble1999/critterguration/raw/master/screenshot.png
icon: https://github.com/tumble1999/critterguration/raw/master/icon.png
date: 2020-10-22 00:44:17
author:
  - TumbleGamer
unfinished: true
buttons:
  - type: 1
    name: Source
    href: https://github.com/tumble1999/critterguration
customData:
  modial: required
  cardboard: required
  ctrlPanel: required
  bcmacro-api: optional
list: documents
filters:
  - type: exists
    params:
      - "{{item.customData.critterguration}}"
---
## Install
```js
// @require      https://github.com/tumble1999/modial/raw/master/modial.js
// @require      https://github.com/tumble1999/critterguration/raw/master/critterguration.js
```
## Usage
```js
let settingContainer = Critterguration.registerSettingsMenu({ id: "test", name: "Test" });
settingContainer.innerText = "Welcome to the test settings page!";

settingContainer.createInput("Yes", "text", (value) => {
	console.log("You said", value);
});


let nameGroup = settingContainer.createInputRow("Name");
nameGroup.createInput("FirstName", "text");
nameGroup.createInput("Second Name", "text");
```
