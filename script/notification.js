

function go_to_notification(idmane)
{
    var all_notification = document.getElementsByClassName("all_notification");
    var need_active = document.getElementById(idmane);

    for(let k = 0; k < all_notification.length; k++)
    {
        all_notification[k].style.display = "none";
    }
    need_active.style.display = "block";
}

function write_thankyou(extenttion)
{
    document.write("<br /><br /><br /><br />");
    document.write("<h1 class='thankyou'>Thank you for your support! Glad to hear from you," + extenttion + "<h1>")
}
