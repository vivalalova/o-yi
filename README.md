# o-yi

A express generator

##### Master

[![Build Status](https://travis-ci.org/vivalalova/o-yi.svg?branch=master)](https://travis-ci.org/vivalalova/o-yi/)

##### Develop
[![Build Status](https://travis-ci.org/vivalalova/o-yi.svg?branch=develop)](https://travis-ci.org/vivalalova/o-yi/)

## Notice

1. o-yi 0.2.0+ for node 7.6+.

2. [o-yi 0.1.x](https://github.com/vivalalova/o-yi/tree/node4) for node 4 +

## Installation

```bash
npm install -g o-yi
```

## GET STARTED

#### Create project

```bash
o-yi new {project name}
```

#### Enter {project name} folder

```bash
cd {project name}
```

#### Generate a CRUD API

```bash
o-yi generate {api name}
```

#### Add route in `api/config/route.js` just like

```javascript
const user = require('../controller/user.js')

module.exports = [{
    user: [
        ['get', '/', user.find],
        ['get', '/:id', user.findOne],
        ['post', '/', user.create],
        ['put', '/:id', user.update],
        ['delete', '/:id', user.delete],
    ]
}]
```

### Before Action

```javascript
module.exports = [{
    user: [
        //verify before api
        ['get', '/', user.findOne, jwt.verify],
        //API handler
        ['get', '/:id', user.findOne],
        ['post', '/', user.create],
        ['put', '/:id', user.update],
        ['delete', '/:id', user.delete],
    ]
}]
```
