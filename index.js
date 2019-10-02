const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('child_process');


try {

    exec('pip3 install --user --upgrade setuptools wheel | sudo pip3 install cdflow')

}catch {

}
