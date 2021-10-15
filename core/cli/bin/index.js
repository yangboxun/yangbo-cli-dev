#! /usr/bin/env node

// const utils = require('@yangbo-cli-dev/utils')
// utils()
// console.log('hello yangbocli')
const importLocal  = require('import-local')

if(importLocal(__filename)) {
    require('npmlog').info('cli', '正在使用 yangnbocli 本地版本')
} else {
    require('../lib')(process.argv.slice(2));
}