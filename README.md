# o-yi

A express generator

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
    user: [
        ['get', '/', 'find'],
        ['get', '/:id', 'findOne'],
        ['post', '/', 'create'],
        ['put', '/:id', 'update'],
        ['delete', '/', 'delete'],
    ]
```
