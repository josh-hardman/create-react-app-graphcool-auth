This is a basic authentication boilerplate using react, graphcool, and auth0 🎉

* Copy the .env.template file and create a .env
* Create new auth0 client, get values from settings tab
* Add http://localhost:3000/callback to allowed callbacks
* Add a new api endpoint (Or use existing)
* Set these values appropriately in .env
* yarn in the root directory
* cd into the server folder and yarn there too
* run export AUTH0_DOMAIN=yourcooldomain
* run export AUTH0_API_IDENTIFIER=yourcoolidentifier
* create a new graphql project from cli, or interface (must upgrade it). 
* Set the appid in the graphcoolrc for dev
* (Need to use the .env if possible instead of exporting... I couldn't figure it out)
* Make sure the GQL_ENDPOINT in your .env file matches your desired endpoint
* npm i -g graphcool-framework

These instructions are lacking things. If you mysteriously find your way into this repo and need help, please let me know.