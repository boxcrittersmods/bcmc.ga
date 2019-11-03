@echo off
title Web Server
cd "%~0.."
:start
bundle exec jekyll serve -w --config _config.yml,_config-dev.yml
goto :start