---
title: BCMacro API
description: Adds an API that lets mods create specific actions that can be
  bound to buttons or keys.
date: 2020-05-16
icon: https://github.com/boxcrittersmods/bcmacros/raw/master/icon.png
author:
  - TumbleGamer
userscript: true
recommend: true
featured: true
buttons:
  - name: Install
    href: http://cdn.bcmc.ga/bcmacros/master/bcmacro-api.user.js
  - name: Source
    href: https://github.com/boxcrittersmods/bcmacros
    type: 1
  - name: Documentation
    href: http://docs.bcmc.ga/bcmacros
    type: 1
customData:
  ctrlPanel: required
  cardboard: optional
  critterguration: required
  modial: required

list: documents
filters:
  - type: match
    params:
      - "{{item.customData.bcmacro-api}}"
      - required
---
