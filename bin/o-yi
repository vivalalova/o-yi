let program = require('commander')
    // let mkdirp = require('mkdirp')
let os = require('os')
var fs = require('fs-extra')

let path = require('path')
let readline = require('readline')

let pkg = require('../package.json')
let version = pkg.version

let cwd = process.cwd()
var bin = path.join(__dirname, './')
console.log(bin)

program.version(version)

program
    .command('new [name]')
    .description('new a project')
    .action(function(name, options) {
        try {
            fs.copySync(bin + '/../templates/app/', name)
            console.log('success!')
            console.log('cd ' + name + ' && npm install')
        } catch (err) {
            console.error(err)
        }
    });

program.parse(process.argv)
