// Mizu Template Handler
// By : Moe Alam
var express = require('express')
module.exports = {
    addHandlers : function(s,app,io){
        app.use('/assets', express.static(process.cwd() + '/web/templates/boilerplate/assets'));
    }
}