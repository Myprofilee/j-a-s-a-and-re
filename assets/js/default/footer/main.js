$(function () {
    var bar = '';
    bar += '<div class="footer-wrap pd-20 mb-20 card-box">';
        bar += 'Mosyn - Jasa Pembuatan Website';
    bar += '</div>';

    $("#footer").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('mosyn').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}