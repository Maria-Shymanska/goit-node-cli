# Contact Manager CLI
A simple Node.js command-line application for managing contacts.

## Description
This app allows you to:

List all contacts

Get a contact by ID

Add a new contact

Remove a contact by ID

Contacts are stored in the db/contacts.json file.

## Installation
Clone the repository:
git clone <your-repo-url>
cd <your-folder-name>
Install dependencies:


npm install
## Usage
Run commands in your terminal:

### List all contacts:
node index.js -a list
Get a contact by ID:
node index.js -a get -i <contact-id>
Add a new contact:


node index.js -a add -n <name> -e <email> -p <phone>
Remove a contact by ID:

node index.js -a remove -i <contact-id>
File Structure
contacts.js — contains logic for working with files and contacts

index.js — entry point; parses command-line arguments and runs actions

db/contacts.json — JSON file storing the contacts data

## Technical Details
Requires Node.js v14 or higher

Uses the fs/promises module for file operations

Uses the commander package to parse CLI arguments
