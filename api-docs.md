---
layout: default
title: How to use the box critters mod api
---
API Url: `https://bc-mod-api.herokuapp.com/`
### Version Info
This is information on how to get Box Critters Version info.

#### GET `/`
Gets information on the current version of box critters.

Example output
```json
{
  "assetsFolder": "https://boxcritters.com/media/53-pickle/",
  "version": "53-pickle",
  "versionNum": "53",
  "versionName": "pickle"
}
```

#### GET `/versions`
Retrives a list of versions
#### GET `/version/:version-name`
Example Output:
```json
{
  "assetsFolder": "https://boxcritters.com/media/51-space/",
  "version": "51-space",
  "versionNum": "51",
  "versionName": "space",
  "description": ""
}
```
### Scripts
Helper js files to help you retrive api data

List of Scripts:
- `/scripts/getapi.js`


### Cross-Origin Resource Sharins Proxy
> Fixes the old problem where you couldnt move when using themes
#### GET `/cors/:url`
#### GET `/cors/data/:url`

### Feedback Management
> Created for <https://boxcritters.github.io/feedback>
#### POST `/feedback/:repo`
### Version Description
> Created for Robert#2583's "Changes Meter"
#### GET `/description`