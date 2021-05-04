# Shiro
A Discord bot made for FFXIV guild listings.

## Project Status
Project is currently retired due to technical limitations with the Discord API that won't allow the bot to function as envisioned.

## Usage
- Use the command "~init" in the channel you want Shiro to reside in.
- Users can now react to Shiro's message to search or create guild listings.

## Installation
- Clone repo to desired location
- Install dependencies and start the bot with these commands
```bash
npm install
node index.js
```
- Bot uses a .env and config.json file for sensitive information like Discord token and MongoDB token. You will need to create these files with your own keys. 
config.json should contain your Discord token, while your .env file will contain your MongoDB token with the format
```
ATLAS_URI=MONGODB_TOKEN_HERE
```
