---
title: BCMacro API
author:
  - TumbleGamer
description: Adds an API that lets mods create specific actions that can be
  bound to buttons or keys.
date: 16-05-2020
buttons:
  - name: Install
    href: http://cdn.boxcrittersmods.ga/BCMacroAPI/master/bcmacro-api.user.js
  - name: Documentation
    href: http://docs.boxcrittersmods.ga/bcmacros
    browser: null
    type: "1"
featured: false
userscript: true
working: true
content: ""
recommended: true
recommend: false
---
# BCMacro API

[![BCMacro API](https://api.boxcrittersmods.ga/button/bcmacro-api)](https://boxcrittersmods.ga/mods/bcmacro-api/)

An API for creating buttons and keybinds.

### Mod Development

```javascript
var myMacroPack = BCMacros.createMacroPack("Pack Name");
myMacroPack.createMacro({
    name:"Macro 1",
    action:function() {
        console.log("Hello World")
    },
    button:{}
})

myMacroPack.createMacro({
    name:"Macro 2",
    action:function() {
        console.log("Hello World")
    },
    key:"p"
})
```

### API Reference

All documentation lives [here](http://github.boxcrittersmods.ga/bcmacroapi)

### Examples

View some simple usage examples [here](https://github.com/boxcritters/bcmacroapi/tree/master/test).

## Licensing

All the code of this project is licensed under the [Apache License version 2.0](https://github.com/boxcritters/bcmacroapi/blob/master/LICENSE) (Apache-2.0).

```license
	Copyright 2020 TumbleGamer <tumblegamer@gmail.com>
	Copyright 2020 The Box Critters Modding Community

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

		http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
```

All the documentation of this project is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0) license.

[![CC BY-SA 4.0](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0/)