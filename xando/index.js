


$(document).ready(function () {
    $(".tile").click(function (e) {
        e.preventDefault();
        console.log($(this).attr('data-tile'));

    });


});


function getAttr(tagname, attr) {
    console.group(tagname.toUpperCase() + ' ' + attr.toUpperCase());
    console.log($(tagname).attr(attr));
    console.groupEnd();
}

function setAttr(tagname, attr, value) {
    $(tagname).attr(attr, value);
}