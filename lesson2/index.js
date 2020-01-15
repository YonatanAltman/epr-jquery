// console.log('Script Ready',new Date().getTime());



$(document).ready(function () {
    // console.log('Dom Ready',new Date().getTime());

    $('button').click(someFunction);
    document.getElementsByTagName('button')[0]
        .addEventListener("click", (e) => {
            console.log('addEventListener', e);

        })
});



function someFunction(e) {
    $('.h').toggle(4000).toggle(200);
    console.log('someFunction', e);
}
function someFunction1() {
    $('body')
        .append("<h1>😎someFunction!!</h1>")

}