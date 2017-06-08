/**
 * Handlebars content rendering helpers loader
 * Created by skitsanos on 5/25/17.
 */

var fs = require('fs');
var path = require('path');

module.exports = {
    path: global.appRoot + '/app/content-helpers/',

    list: function ()
    {
        fs.readdir(this.path, function (err, items)
        {
            if (items != undefined) {
                for (var i = 0; i < items.length; i++) {
                    if (path.extname(items[i]).toLowerCase() == '.js') {
                        var filename = path.basename(items[i], '.js');
                        console.log(filename);
                    }
                }
            }
        });
    },

    load: function (container, callback)
    {
        var _path = this.path;

        fs.readdir(this.path, function (err, items)
        {
            if (items != undefined) {
                for (var i = 0; i < items.length; i++) {
                    if (path.extname(items[i]).toLowerCase() == '.js') {
                        var filename = path.basename(items[i], '.js');
                        container[filename] = require(_path + filename);
                    }
                }

                callback();
            }
        });
    }
};
