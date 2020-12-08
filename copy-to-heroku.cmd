@echo off
xcopy /s /d server.js ..\watt2buy.heroku
xcopy /s /d items.json ..\watt2buy.heroku
xcopy /s /d package.json ..\watt2buy.heroku
xcopy /s /d package-lock.json ..\watt2buy.heroku
xcopy /s /d node_modules ..\watt2buy.heroku\node_modules
xcopy /s /d public ..\watt2buy.heroku\public
xcopy /s /d views ..\watt2buy.heroku\views