
var login_status = 0;


function valid_required(field, alerttxt) {
    with (field) {
        if (value == null || value == "" || value == 0) {
            alert(alerttxt);
            return false;
        }
        else {
            return true;
        }
    }
}







function valid_number(num, min, max) {
    var field = parseInt(num);
        if (!(field >= min && field <= max) || field == "" || field==null ) {
            return false;
        }
        else {
            return true;
        }
}







function validate_sign(thisform) {
    with (thisform) {

        if (valid_required(frist, "Frist name is not fill!") == false) {
            frist.focus();
            return false;
        }
        else if (valid_required(last, "Last name is not fill!") == false)
        {
            last.focus();
            return false;
        }
        else if (valid_required(username, "Usename name is not fill!") == false)
        {
            username.focus();
            return false;
        }
        else if (valid_required(password, "Password is not fill!") == false)
        {
            password.focus();
            return false;
        }
        else if (valid_required(cpassword, "Confirm Password is not fill!") == false) 
        {
            cpassword.focus();
            return false;
        }
        else if (password.value != cpassword.value) 
        {
            cpassword.value = "";
            alert("The password is not match to confirm password");
            cpassword.focus();
            return false;
        }
        else if (valid_required(phone1, "The phonenumber format error") == false)
        {
            phone1.focus();
            return false;
        }
        else if (valid_number((phone2.value), 1000000, 999999999) == false)
        {
            alert("The phonenumber is not correct");
            phone2.focus();
            return false;
        }
        else if (
        valid_number((date_day.value), 1, 31) == false || 
        valid_number((date_month.value), 1, 12) == false || 
        valid_number((date_year.value), 2000, 2200) == false
        )
        {
            alert("The date is not correct");
            date_day.focus();
            return false;
        }
        else if (!(gender.value == "f" || gender.value == "m"))
        {
            alert("Please select a gender");
            gender.focus();
            return false;
        }
        else if (valid_required(country, "Please select a country") == false)
        {
            country.focus();
            return false;
        }
        else if (host.checked == false && user.checked == false)
        {
            alert("Please atleast select a account type");
            host.focus();
            return false;
        }
        else
        {
            return true;
        }
    }
}


// password is set as Aa73218324, AaAa73218324, ALAN, 
function login(userID, password) {
    var cmp_user;
    if (password === "Aa73218324" || password === "AaAa73218324" || password === "ALAN" || password === "TAN") {
        if (userID == "user" || userID == "host" || userID == "admin") {
            login_status = Math.floor(Math.random() * (Math.floor(12) - Math.ceil(1) + 1)) + Math.ceil(1);
            var user = get_user(login_status);
            alert("Welcome !! " + user[0]);
            cmp_user = true;
        }
        else if((Number(userID) >=1 &&Number(userID) <=13))
        {   
            login_status = Number(userID);
            var user = get_user(login_status);
            alert("Welcome !! " + user[0]);
            cmp_user = true;
        }
        else {
            alert("The password or user name is incorrect");
            login_status = 0;
            cmp_user = false;
        }
    }
    else {
        alert("The password or user name is incorrect");
        login_status = 0;
        cmp_user = false;
    }
    localStorage.setItem("login_status", login_status);
    return cmp_user;
}


function logout() 
{
    login_status = 0;
    localStorage.setItem("login_status", 0);
}

function get_status() {
    login_status = Number(localStorage.getItem("login_status"));
    return login_status;
}



