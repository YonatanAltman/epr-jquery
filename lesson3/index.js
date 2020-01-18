// https://docs.google.com/document/d/1DjyREXiQB6zNy72Kl7D1S_Ufa9Dxbz2fDD5s9GdAHlw/edit
console.log('Script Ready', new Date().getTime());


$(document).ready(function () {
    let src = 'https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F6623d5a6ae583f81ee3515b6b3615c7f%2F204855766%2Flandscape-1456483171-pokemon2.jpg&client=amp-blogside-v2&signature=a66341cc83efebc3c63cadf0db972d9a16e1b05d';
    setAttrValue('img', 'src', src);
    $('img').addClass('selected');
    $('img').removeClass('selected');
    printAttr('img');
    let tagname = 'li';
    let index = 1;
    console.log('eq(index)', $(tagname).eq(index).text());
    console.log('eq(index)', $(tagname).eq(index).attr('some-attr'));
    getUsers();
    postUser();
});


function printAttr(tag) {
    console.log('id', $(tag).attr('id'));
    console.log('class', $(tag).attr('class'));
    console.log('name', $(tag).attr('name'));
    console.log('src', $(tag).attr('src'));
    console.log('title', $(tag).attr('title'));
    console.log('tagname', $(tag).prop('tagName'));

}
function setAttrValue(tag, attr, value) {
    $(tag).attr(attr, value);
}

function getUsers() {
    let url = 'https://reqres.in/api/users'
    $.get(url, (res) => {
        console.log('GET',res);
        
    })
    
}
function postUser() {
    let url = 'https://reqres.in/api/users'
    let user = {name:'Yonatan',job:'fullstack'};
    $.post(url,user, (res) => {
        console.log('POST',res);

    })

}
