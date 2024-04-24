
class MovieFlix
{
     main()
    {
let movie1= document.getElementById("wide-card1")
let movie2= document.getElementById("wide-card2")
let movie3= document.getElementById("wide-card3")
let movie4= document.getElementById("wide-card4")
let movie5= document.getElementById("wide-card5")
let movie6= document.getElementById("wide-card6")

let temp;

function playMovie(btn)
{
     if(btn.id==movie1)
    {
        window.location.href="music.html"
        temp=1
    }
    else if(btn.id==movie2)
    {
        window.location.href="index.html"
        temp=2
    }
    else if(btn.id==movie3)
    {
        window.location.href="playpg.html"
        temp=1
    }
    // else if(movie4)
    // {
    //     window.location.href="index.html"
    // }
    // else if(movie5)
    // {
    //     window.location.href="index.html"
    // }
    // else if(movie6)
    // {
    //     window.location.href="index.html"
    // }


    // switch(btn.id== movie1)
    // {
    //     case :
    //     {
    //         window.location.href="index.html"
    //         break;
    //     }
    }
}
}