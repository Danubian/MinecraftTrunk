console.log("Starting up minecraft.js...");
var spawn = require('child_process').spawn; 
console.log("Spawn created...");
var minecraftServerProcess = spawn('java', [
    '-Xmx1024M',
    '-Xms1024M',
    '-jar',
    'minecraft_server.1.8.1.jar',
    'nogui' ]); 
console.log("Initialized server process...");
function log(data) {
    process.stdout.write(data.toString());
}

minecraftServerProcess.stdout.on('data', log);
minecraftServerProcess.stderr.on('data', log);
console.log("Done!");
