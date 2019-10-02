const child_process = require('child_process');

try {
  child_process.execSync('docker pull mergermarket/cdflow-commands:latest');
  child_process.execSync('curl -o cdflow https://raw.githubusercontent.com/mergermarket/cdflow/master/cdflow.py');
  child_process.execSync('chmod +x ./cdflow ')
  child_process.execSync('sudo mv ./cdflow /usr/local/bin/cdflow')
  child_process.execSync('sudo pip install docker boto3 PyYAML dockerpty')
  //core.exportVariable('CDFLOW_IMAGE_ID','mergermarket/cdflow-commands')
} catch {

}