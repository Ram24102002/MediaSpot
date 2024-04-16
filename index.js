var input=document.getElementById("input");
var pass=document.getElementById("password");
var sub=document.getElementById("sub-btn");
var eye=document.getElementById("fa-eye-slash")

var email="User";
var password="password";



// password verification
 
function passwordVerify()
{
    if(pass.value==password && input.value==email)
{
    window.location.href="main-pg.html"
}
else
{
    alert("Email or Password is Incorrect")
    console.log("Email or Password is Incorrect")
}
}



//enter

function keypress(event)
{
    if(event.keyCode===13)
    {
        passwordVerify();
    }
}



// password eye

function eyeClick()
{
    // alert("entering")
    if(pass.type=="password")
    {
        pass.type= "text";
    }
    else
    {
        pass.type="password";
    }
}
