---
title: Ctrl Panel
description: Button api
date: 2020-10-12
author:
  - SArpnt
buttons:
  - name: Source
    href: https://github.com/SArpnt/ctrl-panel
  - type: 1
    name: Install
    href: https://github.com/SArpnt/ctrl-panel/raw/master/script.user.js
customData:
  cardboard: optional

list: documents
filters:
  - type: match
    params:
      - "{{item.customData.ctrlPanel}}"
      - required
---
Button api that can be `@require`d in userscript header (no install neccecary)