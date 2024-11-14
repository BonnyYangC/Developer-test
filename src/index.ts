#!/usr/bin/env node

import call from "./cli.js"

const result = call(process.argv.slice(2))

console.log(result)
