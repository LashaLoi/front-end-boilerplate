# front-end-boilerplate

## Run project

To run the project you need to install [Node](https://nodejs.org/en/download/package-manager) in you machine.


Node will make the **npm** comand available in your terminal but for package manager, we are using **yarn** instead of **npm**. You have to install [Yarn](https://yarnpkg.com/en/docs/install#windows-stable)

With **Node** and **Yarn** installed, we can start runing our app.

1. Install all dependencies in the project -> ```yarn```
2. Run the project in development mode -> ```yarn start``` (It will open a browser tab in 'localhost:8080')

## Development enviroment

The project use **editorconfig**, **prettier** and **eslint** to help us to write the same code style  (tabs, line break, quotes, indentation, etc) and linters to write less bugs.

**⚠️ NOTE: If you have already set up the development enviroment, It is not necesary to repeat.**

### Set up prettier

In the solution there is a **.prettierrc** file wich has the configuration to format our code with the rules defined each time we save our file.

We need to install the prettier extension for our IDE to make it work.

- **VS Code:** [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- **Sublime:** [SublimeJsPrettier](https://github.com/jonlabelle/SublimeJsPrettier)

Make sure to follow the installation steps of the extensions to activate commands or configurations to autoformat on save.


### Set up editorconfig

In the solution there us a **.editorconfig** file wich has the configuration on how our IDE have to insert tabs, indentation, etc. With this, we get to every developer use the same tabs style and width, endline, etc.

We need to install the editorconfig extension for our IDE to make it work.

- **VS Code:** [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- **Sublime:** [editorconfig-sublime](https://github.com/sindresorhus/editorconfig-sublime)

### Set up EsLint

We use TypeScript that give us soft typed syntaxt and we have some linter rules that TypeScript doesn't cover for this we have to add EsLint extension.

- **VS Code:** [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
To make eslint work well in vscode you can add a .vscode folder in the root of project (only affects to this projet) or set up the global configuration with this.
```json
{
	"editor.formatOnSave": true,
	"editor.autoIndent": true,
	"editor.formatOnPaste": false,
	"prettier.stylelintIntegration": true,
	"prettier.singleQuote": true,
	"typescript.surveys.enabled": false,
	"files.eol": "\n",
	"eslint.autoFixOnSave":  true,
	"eslint.validate":  [
		"javascript",
		"javascriptreact",
		{"language":  "typescript",  "autoFix":  true  },
		{"language":  "typescriptreact",  "autoFix":  true  }
	],
	"[javascript]":  {
		"editor.formatOnSave":  false,
	},
	"[javascriptreact]":  {
		"editor.formatOnSave":  false,
	},
	"[typescript]":  {
		"editor.formatOnSave":  false,
	},
	"[typescriptreact]":  {
		"editor.formatOnSave":  false,
	},
}

```

- **Sublime:** [EsLint](https://packagecontrol.io/packages/ESLint)

## Scripts

In **package.json** there are commands to run **development** enviroment, **production**, **staging**, **autopush** and **linters**.

- Run development: ```yarn start```. Run the development server with **config_local.ts**
- Run production: ```yarn build:production```. Generate the build static files with **config_production.ts**
- Run staging: ```yarn build:staging```. Generate the build static files with **config_staging.ts**
- Run autopush: ```yarn build:autopush```. Generate the build static files with **config_autopush.ts**
- Run TypeScript linter: ```yarn lint:typescript```. Run the TypeScript linter in the **app** folder (the linter is run in real time in development and is executed in build process).
- Run typecheck: ```yarn typecheck```. Run the TypeScript types checking in the **app** folder (the type check is run in development and is executed in build process).

## Install dependencies

To install new dependencies in the project, we have to differentiate between 2 types **devDependencies** and **dependencies**.

- **devDependencies:** These are dependencies related to our environment or tool to help us like **Webpack**, **Babel**, **plugins**, **loaders**. To install the **devDependencies** you have to run ```yarn add --dev package-name```. this command will add the package in **package.json** in **devDependencies** section.

- **dependencies:** This dependencies are related to our application like **React**, **React-i18n**, **Redux**. To install **dependencies** you have to run ```yarn add package-name``` this command will add the package in **package.json** in **dependencies** section.

## Import convention

The order of imports in files is not important but we should follow the same order.

- First we have to import the resources or components that come from **node_modules** (if we have to use React, it have to be the first)
- Second we have to import our components separated by a blank line from the First block
- Third we have to add functions, types or helpers separated by a blank line from the Second block
- Fourth we have to add resources like images, svg, css separated by a blank line from the Third block

```javascript
// First block
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next';

//Second block
import { Header } from './Header';
import { Footer } from './Footer';
import { Menu } from './Menu';

//Third block
import { getData } from './service';
import { calculateRatio } from './utils';

//Fourth block
import { ReactComponent as Icon } from './icon.svg';

```

## Folder structure

For the folder structure we are using [**Fractal**](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af) structure wich is a infinite scalable folder structure for **React** apps.

To follow this structure we have a **app** folder where is all our aplication (components, hooks, HOC, styles).

Inside the **app** folder we have the **content** folder with **assets**, **translations**, etc. There is a **shared** folder so set the shared components between modules and there is a *modules** folder to put our application modules.

To estrucrute our application with a *Fractac** structure, each component has a folder at the same level with the same name and inside there are the components that uses exported with a barrel (**index**).

```
app
 |__ contents
 |__ shared
 |__ modules
	  |__ Application.ts
	  |__ Application
	  	    |__ Header.ts
			|__ Menu.ts
			|__ Footer.ts
			|__ index.ts
```

## Usage of SVG

For **SVG** we are using [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack), it loader allow us to  use **.svg** as a **react component**. We have to import the svg witn the named import **ReactComponent**.
```javascript
import { ReactComponent } from './icon.svg';
```
To avoid name colisions and have more descriptive name, que can rename it.
```javascript
import { ReactComponent as Icon } from './icon.svg';
```
Now we can use the **SVG** in the render like a a component.

```javascript
import { ReactComponent as Icon } from './icon.svg';

// ...
render() {
	return <Icon />
}
// ...
```

