@echo off
title Web Server
cd..
:start
bundle exec jekyll serve -w --config _config.yml,_config-dev.yml
goto :start