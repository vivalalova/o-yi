# o-yi

A express generator


##### Master

[![Build Status](https://travis-ci.org/vivalalova/o-yi.svg?branch=master)](https://travis-ci.org/vivalalova/o-yi/)

##### Develop
[![Build Status](https://travis-ci.org/vivalalova/o-yi.svg?branch=develop)](https://travis-ci.org/vivalalova/o-yi/)


## Installation

```bash
npm install -g o-yi
```

## Usage

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
        ['delete', '/', user.delete],
    ]
}]
```
