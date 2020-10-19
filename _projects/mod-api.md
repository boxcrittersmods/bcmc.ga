---
title: BoxCritters Mod API Server
author:
  - TumbleGamer
  - Alvarito050506
date: 2019-04-26
buttons:
  - name: Link
    href: https://api.boxcrittersmods.ga
  - type: 1
    name: Source
    href: https://github.com/boxcritters/bc-mod-api
---
## Aims
## what was used


## How to use
API Url: `https://bc-mod-api.herokuapp.com/`
### Version Info
This is information on how to get Box Critters Version info.

#### GET `/`
Gets information on the current version of box critters.

Example output:
```json
{
  "assetsFolder": "https://boxcritters.com/media/53-pickle/",
  "version": "53-pickle",
  "versionNum": "53",
  "versionName": "pickle"
}
```

#### GET `/versions`
Retrives a list of versions.

Example Output:
```json
[
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17-EX2",
  "18-EX2",
  "19-EX2",
  "20-party",
  "22-easter",
  "23-beep",
  "24-tech",
  "25-egghunt",
  "27-eggstatic",
  "28-blue",
  "29-bunny",
  "30-black",
  "31-baseball",
  "32-dark",
  "33-dark",
  "34-dark",
  "36-click",
  "37-fast",
  "38-moveit",
  "39-monk",
  "40-beaver",
  "40-test",
  "41-emit",
  "44-float",
  "45-3D",
  "46-cool",
  "47-backs",
  "48-backs",
  "49-slots",
  "51-space",
  "52-exp3",
  "53-pickle"
]
```
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
#### `/scripts/getapi.js`
How to use:
```js
getBCModAPI(function (versionData) {
    console.log("Current Version", versionData.version);
});
```


### Cross-Origin Resource Sharins Proxy
> Fixes the old problem where you couldnt move when using themes
#### GET `/cors/:url`
#### GET `/cors/data/:url`

### Feedback Management
> Created for [https://boxcritters.github.io/feedback](https://boxcritters.github.io/feedback)
#### POST `/feedback/:repo`
### Version Description
> Created for Robert#2583's "Changes Meter"
#### GET `/description`
Example Output:
```
Welcome to the third Box Critters Experiment!
This experiment includes the addition of new rooms and critters. To move between rooms please use the command "/join [roomId]". Example: "/join tavern" or "/join bridge". Over the next couple weeks I plan to add more rooms.

Welcome to the second Box Critters Experiment.
Box Critters is slowly coming together. Experiment two adds inventory and items to the world. I am planning to giveaway a new item every week. You may unlock the item by saying "/FreeItem" in the message box.

Welcome to the first Box Critters Experiment.
This is a simple experiment, just create an account, login, move around and say hi! Over the next couple weeks I plan to start working on the second experiment. Become a BETA or follow me on Twitter @RocketSnail to learn more.
```