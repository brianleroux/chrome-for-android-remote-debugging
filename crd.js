module.exports = function() {
    var spwn = require('child_process').spawn
    ,   cmd  = 'adb'
    ,   opts = ['forward', 'tcp:9222', 'localabstract:chrome_devtools_remote']
    ,   init = spwn(cmd, opts)
    
    init.stdout.pipe(process.stdout)
    init.stderr.pipe(process.stderr)

    init.on('exit', function() {
        spwn('open', ['http://localhost:9222'])
    })
}
