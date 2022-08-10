# pennsieve-agent-javascript
JavaScript client for the new Pennsieve Agent

## Prerequisites

### Pennsieve Agent
Install the new [Pennsieve Agent](https://github.com/Pennsieve/pennsieve-agent/releases)

### Node.js
Install [Node.js](https://nodejs.org) v16.15.1 or later (in the v16 releases), and the NPM package manager.

(*Optional*) Install [NVM - the Node Version Manager](https://github.com/nvm-sh/nvm). This tool makes installing and using different versions of Node.js a lot easier.

#### Linux
```bash 
sudo apt-get install node
sudo apt-get install npm
```

#### Mac OS
You can use [Homebrew](https://brew.sh) to install most things.
```bash
brew install node
```

Using **NVM** to install and manage Node.js installations is recommended.

### Required Libraries and Packages
The **Pennsieve Agent JavaScript library** uses gRPC and Protobuf loader packages.

Use the NPM package manager to install the required libraries.

```bash
npm install @grpc/grpc-js
npm install @grpc/proto-loader
```

## Using the Pennsieve Agent JavaScript library

### Run the Pennsieve Agent
Ensure the Pennsieve Agent is running. It can be run in the background, or in the foreground (in a terminal window). It will be listenting on port 9000 for requests from the Pennsieve Agent JavaScript library.

To start the Pennsieve Agent (in the background):

```bash
pennsieve agent
```

- ensure you have adequate authentication setup with the Pennsieve Agent
- ensure an active profile is selected in the Pennsieve Agent

Check your profile with this Pennsieve Agent command:
```bash
pennsieve whoami
```

The same operation can be performed with the `whoami.js` program in the examples directory.
```bash
node whoami.js
```
