var button = document.querySelector('button');
button.style.position = "absolute";//
var x = 0;
function move()
{
    button.style.left = x+"px";// x+"px" => "10px"
    x += 1;// x += 10; => x = x + 10; on va ajouter 10 à x
    if (x > 100)
        clearInterval(interv);
}

//var interv = setInterval(move, 100);// 1 * 1000 (ça prend le temps en ms), répétition tous les XXX ms
/*
function moveY()
{
    button.style.top = x+"px";
}

setTimeout(moveY, 2000);// clearTimeout
*/
var y = 0;
function moveBis()
{
    button.style.top = y+"px";
    y += 10;// on ajoute 2 à y
    if (y > 1000)
    {
        y = 0;
        button.style.top = y+"px";
        // cancelAnimationFrame(animation);// Annuler le requestanimationframe courant
    }
    //else
        requestAnimationFrame(moveBis);
}

requestAnimationFrame(moveBis);// https://developer.mozilla.org/fr/docs/Web/API/Window/requestAnimationFrame
/*
var x = 0;
while (x < 10)
{
    move();
    x += 10;
}
*/