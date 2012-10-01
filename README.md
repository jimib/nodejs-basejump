nodejs-basejump
===============

Simple boilerplate template for starting applications, auto loads all controllers and models into globally accessible structure without clutter using 'earlybird'. Also includes 'chauffeur' to help organise routes.

Set up:
node_modules is in the git ignore list so after pulling a copy you need to run:

npm install -d

Structure:

The core code is in the app directory. Basejump uses my Earlybird module to bootstrap the application and get everything running. Earlybird itself is very basi and doesn't push any design pattern on to the developer, except that the application folder structure is directly mapped to the application object, this means that within our code we can reference our controllers by 'app.controllers.my_controller'. Making a block of code globally accessible is of completely optional and is dependent on if an object is returned by the module.exports method.

Within each directory a developer can add '.earlybird.conf' to control how modules are loaded. Within base-jump a conf file is provided in the root of 'app':

{
	"include" : ["preinit", "models", "controllers", "init"]
	,"exclude" : ["public","views"]
}

Which causes the modules to be loaded in the following order: 

app
	- preinit [1st]
	- models [2nd]
	- controllers [3rd]
	- init [4th]
	- views [ignored]
	- public [ignored]

The npm package includes express, connect-flash and jade; these are all completely optional however and this should be flexible enough to adapt to any particular style of development.