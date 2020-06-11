var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'cordovaRioTest', 'coolMethod', [arg0]);
};

exports.helloWorld = function(arg0, success, error){
    exec(success, error, 'cordovaRioTest', 'helloWorld', [arg0]);
}