const child_process = require('child_process');

try {
    child_process.execSync('docker pull mergermarket/cdflow-commands:latest')
    child_process.execSync('curl -o cdflow https://raw.githubusercontent.com/mergermarket/cdflow/master/cdflow.py | chmod +x cdflow')
    //core.exportVariable('CDFLOW_IMAGE_ID','mergermarket/cdflow-commands')
}catch {

}
