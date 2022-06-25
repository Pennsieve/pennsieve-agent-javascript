# pennsieve-agent-javascript
Javascript agent for the Pennsieve uploads service


# Installation
1. Install node and node package manager


```bash 
    sudo apt-get install node
    sudo apt-get install npm
```

2. Through npm package manager install required libraries. Root may be needed.

```bash
    npm install @grpc/grpc-js
    npm install @grpc/proto-loader
```

This command will creade a ``modules_node`` folder in the current directory.

3. Start pennsieve server
```bash
pennsieve server
```

Pennsieve server will be running on port 9000.

4. Run the javasript client

```bash
    node pennsieve.js
```