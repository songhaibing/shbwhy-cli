#!/usr/bin/env node
//npm link 将package.json里面的bin和环境变量链接
const program = require('commander')
const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create')
//查看版本号
program.version(require('./package.json').version)
helpOptions();
//创建其他指令
createCommands();
program.parse(process.argv);
