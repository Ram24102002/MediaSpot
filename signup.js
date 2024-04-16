
var pass=document.getElementById("password");
var cpass=document.getElementById("corr-password");

var empty="";

function passwordVerify()
{
    if(pass.value!=empty)
    {
        if(pass.value==cpass.value)
        {
            window.location.href="main-pg.html"
        }
        else
        {
            alert("Enter same Password 🫠")
        }
    }
    else
    {
        alert("Password Cannot be Empty ❌")
    }
}