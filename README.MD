## devDependencies
    "@wdio/cli": "^9.0.7",
    "@wdio/local-runner": "^9.0.7",
    "@wdio/mocha-framework": "^9.0.6",
    "@wdio/spec-reporter": "^9.0.7"

    
## How to run
    "npm init -y",
    "npm init wdio@latest/npm install",
    "npm run wdio",
    "wdio": "wdio run wdio.conf.js" -> save in packege.json,


## tambahkan script di package.json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "wdio": "wdio run wdio.conf.js"
    },
