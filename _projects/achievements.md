---
title: Achievements
description: API for creating and managing achievements
date: 2022-05-04
author:
  - Tumble
list: documents
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
