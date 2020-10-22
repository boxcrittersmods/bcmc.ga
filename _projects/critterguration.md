---
title: Critterguration
description: Settings API that shows each mod's settings in its own tab
date: 2020-10-22 00:44:17
author:
  - TumbleGamer
unfinished: true
buttons:
  - type: 1
    name: Source
    href: https://github.com/tumble1999/critterguration
customData:
  popper: required
  cardboard: required

list: documents
filters:
  - type: match
    params:
      - "{{item.customData.critterguration}}"
      - required
---