/**
 * Created by skitsanos on 6/8/17.
 * <img class="uk-comment-avatar" src="/gravatar/{{doc.contact.email}}" alt="">
 */
module.exports = function ()
{
    var innerContent = '';
    var attribsContent = '';

    if (arguments.length == 1) {
        innerContent = arguments[0].fn(this);

        for (var key in arguments[0].hash) {
            attribsContent += key + '="' + arguments[0].hash[key] + '"';
        }

        delete arguments[0];
    }
    else {
        innerContent = arguments[1].fn(this);
        delete arguments[1];
    }

    return '<img class="uk-comment-avatar" src="' + innerContent + '" ' + attribsContent + ' />';
};
