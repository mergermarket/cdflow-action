const child_process = require('child_process');

try {

    child_process.execSync('pip3 install --user --upgrade setuptools wheel | sudo pip3 install cdflow')

}catch {

}
