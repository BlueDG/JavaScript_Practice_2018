var button = document.querySelector('button');
var div = document.querySelector('div');
var body = document.body;
// Button
button.addEventListener("click", function(info)
{
    console.log("button capturing > ", button);
}, true);// mode capturing (capturing d'évenement)
button.addEventListener("click", function(info)
{
    console.log("button bubbling > ", button);
    info.stopPropagation();// https://developer.mozilla.org/fr/docs/Web/API/Event/stopPropagation
});// mode bubbling (remonté d'évenement)
// Div
div.addEventListener("click", function(info)
{
    console.log("div capturing > ", div);
}, true);// mode capturing (capturing d'évenement)
div.addEventListener("click", function(info)
{
    console.log("div bubbling > ", div);
});// mode bubbling (remonté d'évenement)
// Body
body.addEventListener("click", function(info)
{
    console.log("body capturing > ", body);
}, true);// mode capturing (capturing d'évenement)
body.addEventListener("click", function(info)
{
    console.log("body bubbling > ", body);
});// mode bubbling (remonté d'évenement)