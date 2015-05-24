@echo off
set BASE_DIR=%~dp0
cd BASE_DIR
start http://127.0.0.1:8125/index.html
node C:\web-server.js 8125

