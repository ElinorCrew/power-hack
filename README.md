ElinorCrew@PowerHack2014
========================

A gamification of electricity meter readings for the energy sector.
Code provided by ElinorCrew for #PowerHack2014. Visit the live demo at [kraftkamp.no](http://kraftkamp.no). 

This repository contains [express.js](http://expressjs.com/3x/api.html), [underscore.js](http://underscorejs.org/) and [logfmt](https://github.com/csquared/node-logfmt). On the client-side, [knockout.js](http://knockoutjs.com/documentation/introduction.html), [underscore.js](http://underscorejs.org/) and [d3.js](https://github.com/mbostock/d3/wikigit) are pulled directly from CDN. Bootstrap css is added to /public/style.

d3.js and knockout are used together to create interesting and reusable graphs to present electricity consumption data.

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
Visit [localhost:1704](http://localhost:1704/) to see the main page and [localhost:1704/json](http://localhost:1704/json) to get the JSON example.

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

Get a version of jslint for your text editor and remove all errors before committing. If not you'll get a nasty visit from @teodoran. Check [jslinterrors](http://jslinterrors.com/) for more info on individual error messages.


Folder structure
----------------

Server-side code and npm dependencies are located in the root folder. Client-side code are located in the /public folder.

* Server.js contains the Node server code. It uses express.js.
* /public/index.html is the main webpage served.
* /public/app.js contains the code responsible for bootstrapping the javascript code on the client-side.
* /public/achievements contains the code for the achievement module.
* /public/highscore contains code for displaying highscores.
* /json-provider.js provides JSON objects.


Heroku setup
------------

First install the [Heroku toolbelt](https://devcenter.heroku.com/articles/quickstart#step-2-install-the-heroku-toolbelt).

Then you have to navigate to the project folder and link the git repository to the Heroku deployment server using:

```
git remote add heroku git@heroku.com:power-hack.git
```

Now you can deploy the site to heroku with:

```
git push heroku master
```

Testing
-------

Since time is in short supply, the page is rolled without much tests. When needed [mocha](http://mochajs.org/) specs are written and placed in the /spec folder. To install mocha and the [should.js](https://github.com/visionmedia/should.js) assertion library, install the development dependencies with npm. Run all tests with ```npm test```.

For the sake of simplicity, mocha is currently only set up to run server-side tests.

Authors
-------

* Teodor A. Elstad (http://twitter.com/_teodoran)
* Simen H. Granlund (http://twitter.com/simengranlund)
* Magnus Kirø (http://twitter.com/magnuskiro)
* George Lee (http://twitter.com/georgekw89)
* Steffen P. Henriksen (http://twitter.com/spohner)
