var exec = require('cordova/exec');

exports.helloWorld = function(arg0, success, error){
    //callback success, callback error, service/class name, action name
    exec(success, error, 'HelloWorld', 'helloworld', [arg0]);
}