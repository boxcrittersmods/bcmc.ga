@echo off
title Web Server
call bundle install
call bundle exec jekyll serve -w --config _config.yml,_config-dev.yml