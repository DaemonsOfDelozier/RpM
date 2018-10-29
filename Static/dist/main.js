
var posts_ = posts;

function tree(data) {
    if (typeof(data) == 'object') {
        var ul = $('<ul>');
        var url = data.url;
        var str = "Click Here to View";
        var str_link = str.link(url);
        ul.append(str_link);
        for (var i in data) {
            ul.append($('<li>').text(i).append(tree(data[i])));

        }
        return ul;
    } else {
        var textNode = document.createTextNode(' => ' + data);
        return textNode;
    }
}

$("#routes").append(tree(posts_));