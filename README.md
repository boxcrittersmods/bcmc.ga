# Box Critters Modding Community
[![Build Status](https://travis-ci.com/boxcritters/bcmc.ga.svg?branch=master)](https://travis-ci.com/boxcritters/bcmc.ga)

## Credits
Google Play and the Google Play logo are trademarks of Google LLC.

## Run test server on linux

1. Install Ruby
2. add to `~/.bashrc`:
```sh
export GEM_HOME="$(ruby -e 'puts Gem.user_dir')"
export PATH="$PATH:$GEM_HOME/bin"
```
3. Follow instructions to [install Jekyll](https://jekyllrb.com/docs/installation/)
4. run `webserver.sh`
