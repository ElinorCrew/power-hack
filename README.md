ElinorCrew@PowerHack2014
========================

Code for #PowerHack2014. Visit the live demo at [power-hack.herokuapp.com](http://power-hack.herokuapp.com/).

Currently this project contains express.js, underscore.js and logfmt. On the client-side, knockout.js and d3.js is pulled directly from CDN. Bootstrap css is added to /public/style.

The initial demo page is [d3-knockout-demo](https://github.com/teodoran/d3-knockout-demo), and shows how d3.js and knockout can be used together to create interesting and reusable graphs.

Some links from Demo Steinkjer:
* [API documentation](https://api.demosteinkjer.no/docs/)
* [API Quick Start Guide](https://www.demosteinkjer.no/content/122/API-Quick-Start-Guide)


Setup guide
-----------
Requirements:

* Node

Clone source into a folder and then install dependencies with: 

```
npm install
```

Launch the site at localhost with:

```
npm start
```
Visit [localhost:1704](http://localhost:1704/) to see the main page and [localhost:1704/json](http://localhost:1704/json) to get the example json.

### Installation guides

The following guides are for newer versions of Ubuntu, although links to more general instructions can be found.

#### Installing node

This is a brief summary of [howtonode.org](http://howtonode.org/how-to-install-nodejs), but with the updated location of the node git repository. For the most up to date installation guide, refer to the [nodejs.org](http://nodejs.org/download/) homepage.

Install the dependencies:

```
sudo apt-get install g++ curl libssl-dev apache2-utils
sudo apt-get install git-core
```

Clone and build from source with:

```
git clone git@github.com:joyent/node.git
cd node
./configure
make
sudo make install
```

#### Hot tips

Get a version of jslint for your text editor and remove all errors before committing. If not you'll get a nasty visit from @teodoran. 


Folder structure
----------------

Server-side code and npm dependencies is put in the root folder. Client-side code is put in the /public folder.

* Server.js contains the Node server code. It uses express.js.
* /public/index.html is the main webpage served.
* /public/app.js contains the code responsible for bootstrapping the javascript code on the client-side.


Heroku setup
------------

First install the [Heroku toolbelt](https://devcenter.heroku.com/articles/quickstart#step-2-install-the-heroku-toolbelt).

Then you have to link the git repository to the Heroku deployment server using:

```
git remote add heroku git@heroku.com:kodekollektivet.git
```

Now you can deploy the site to heroku with:

```
git push heroku master
```
