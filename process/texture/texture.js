var args = process.argv.slice(2);
var realArgs = [], argOptions = {};
args.forEach(function(arg) {
    if (arg.indexOf('--') === 0) {
        arg = arg.substr(2);
        var eqI = arg.indexOf('=');
        if (eqI >= 0) {
            argOptions[arg.substr(0, eqI)] = arg.substr(eqI + 1);
        } else {
            argOptions[arg] = null;
        }
    } else {
        realArgs.push(arg);
    }
});

var config = {listen: {}};
if (argOptions['path']) {
    config.listen.path = argOptions['path'];
} else if (argOptions['port']) {
    config.listen.port = argOptions['port'];
    if (argOptions['host']) {
        config.listen.host = argOptions['host'];
    } else {
        config.listen.host = '127.0.0.1';
    }
} else {
    config.listen.host = '127.0.0.1';
    config.listen.port = '34264';
}

config.websocket = !!argOptions['websocket'];

config.allowLocal = !!argOptions['allow-local'];

if (argOptions['websocket']) {
    var TextureProcess = require('./websocket/TextureProcess');
} else {
    var TextureProcess = require('./socket/TextureProcess');
}

var ts = new TextureProcess(config);
ts.start();

