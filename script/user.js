
const user_data_num = {
    user_0 : 0,
    user_1 : 1,
    user_2 : 2,
    user_3 : 3,
    user_4 : 4,
    user_5 : 5,
    user_6 : 6,
    user_7 : 7,
    user_8 : 8,
    user_9 : 9,
    user_10 : 10,
    user_11 : 11,
    user_12 : 12,
}
function get_user(num)
{
    if(Number(num) <= 12 && Number(num) >= 0)
    {
        return window[("user_" + num)];
    }
    else if(Number(num) == -1)
    {
        return (window[("user_" + get_status_user_ver())]);
    }
    else{
        return user_0;
    }
}
// 
// name username contact email banknumber address country state brithday gender picture_url
var admin = ["Homevago", "N\\A", "N\\A", "N\\A", 
"N\\A", "N\\A", 
"N\\A", "N\\A", "N\\A", "N\\A", "../Image/homevago.png"];
var user_0 = ["Unknow User", "N\\A", "N\\A", "N\\A", 
"N\\A", "N\\A", 
"N\\A", "N\\A", "N\\A", "N\\A", "../Image/user/pic3.png"];
var user_1 = ["Wu Chuang Bo", "Chuangbo", "+6007882-9755", "Chuangbo@gmail.com", 
"4394484910452302", "293 Kampung Nelayan Sedili Besar", 
"Malaysia", "Johor", "10/26/1991", "Male", "../Image/user/pic1.jpg"];
var user_2 = ["Yun Ling", "yunling70", "+6009623-1155", "yunling70@gmail.com", 
"5293497253842697", "2Nd Floor Wisma Guru Jln Hiliran", 
"Malaysia", "Terengganu", "6/2/1983", "Female", "../Image/user/pic9.jpg"];
var user_3 = ["Lim Ming Jun", "mingjun", "+6007467-7255", "mingjun@yahoomail.com", 
"4532070448616724", "1 77A Jln Besar Taman Perumahan Jpn", 
"Malaysia", "Johor", "7/17/1972", "Male", "../Image/user/pic17.jpg"];
var user_4 = ["Wang Yi Ying", "yiying", "+604530-5086", "yiying@yahoomail.com", 
"4485960091368424", "16 Jln Ciku 14000 Bukit Mertajam", 
"Malaysia", "Penang", "9/16/1980", "Female", "../Image/user/pic7.jpg"];
var user_5 = ["Sun Yu Ping", "yueping", "+6034252-0560", "yueping200@hotmail.com", 
"5559107197966119", "G Bazar Keramat 7 Jln Enggang Taman Keramat", 
"Malaysia", "Selangor", "4/29/1977", "Female", "../Image/user/pic9.jpg"];
var user_6 = ["Lee sun Yang", "soonyang_2", "+6009245-9517", "bducimus@163.com", 
"4916777390478525", "Pejabat Felda Bukit Mendi Felda Bukit Mendi", 
"Malaysia", "Pahang", "5/14/1927", "Male", "../Image/user/pic14.jpg"];
var user_7 = ["Ong Chao Ming", "chao3900", "+60032693-3282", "chao3900@microsoft.com", 
"4556097359097595", "1 Palace Hotel Jln Mesjid India", 
"Malaysia", "Wilayah Persekutuan", "11/29/1999", "Male", "../Image/user/pic10.jpg"];
var user_8 = ["Ching Ming Hui", "minghui200", "+6009669-4043", "minghui200@163.com", 
"4539991015033071", "Block 3 7th Floor pv 10", 
"Malaysia", "Selangor", "10/27/1986", "Male", "../Image/user/pic24.jpg"];
var user_9 = ["Jiong Chow Yu", "honeychau", "+6007237-7576", "honeychau@yahoomail.com", 
"4485087094770909", "Cempaka 2 Taman Cempaka", 
"Malaysia", "Perak", "11/8/1978", "Male", "../Image/user/pic16.jpg"];
var user_10 = ["Sian Su Sau", "siansu3s", "+6009-514-6629", "siansu3s@yahoomail.com", 
"5505348734113964", "33G Jalan Naluri Taman Tas Mahkota Kua", 
"Malaysia", "Pinang", "3/11/1993", "Female", "../Image/user/pic19.jpg"];
var user_11 = ["Shin Chik Sio", "kalifashin", "+60(603) 3385305", "kalifashin@yahoomail.com", 
"5355860830993066", "9-3 Jalan 5/18A Taman Mastiara Batu 5", 
"Malaysia", "Perak", "3/21/1986", "Female", "../Image/user/pic26.jpg"];
var user_12 = ["Chin Han Ming", "hanming", "+6009966-9728", "hanming@yahoomail.com", 
"5355860830993066", "453 Kampung Keroh Kuala Krai Kuala Krai", 
"Malaysia", "Selangor", "9/21/1983", "Male", "../Image/user/pic23.jpg"];

function get_profile_pic(){
    var num = get_status();
    if(num > 12 || num < 0){
        return "../Image/user/pic3";
    }
    else{
        var data = get_user(num);
        return data[10];
    }
}

function get_status_user_ver() {
    return Number(localStorage.getItem("login_status"));
}

function set_user_picture(class_apply)
{
    var user_data = get_user(get_status_user_ver());
    if(class_apply == null || class_apply == "")
    {
        write_user_img("profile_pic", user_data);
    }
    else
    {
        write_user_img(class_apply, user_data);
    }
}

function write_user_img(class_apply, user_data)
{
    document.write('<img src="' + user_data[10] +'" alt="' + user_data[0] + '" title="' + user_data[0] + '" class="' + class_apply + '" />');
}
function write_user_img_portable(user_img, user_name)
{
    document.write('<img src="' + user_img +'" alt="' + user_name + '" title="' + user_name + '" class="maxsize" style="border-radius: 50%"/>');
}

function re_right()
{
    var local_right_ID;
    var status_var_local = get_status_user_ver();
    if(status_var_local >= 1 && status_var_local <= 12)
    {
        local_right_ID =document.getElementById("header_user_right_pic");
        local_right_ID.style.display = "block";
        local_right_ID =document.getElementById("header_user_right_icon");
        local_right_ID.style.display = "none"
    }
    else
    {
        local_right_ID =document.getElementById("header_user_right_pic");
        local_right_ID.style.display = "none";
        local_right_ID =document.getElementById("header_user_right_icon");
        local_right_ID.style.display = "block"
    }
}

function check_logined()
{
    var status_var_local = get_status_user_ver();
    if(status_var_local >= 1 && status_var_local <= 12)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function write_setting_li(bool_activate)
{
    document.write("<li  ");
    if(bool_activate == true)
    {
        document.write( "class='actived'  " );
    }
    document.write( "style='border-right: 1px solid #fff;' ><a href=" );
    if(check_logined())
    {
        document.write( "'myAccount.html'" );
    }
    else
    {
        document.write( "'login.html'" );
    }
    document.write( "><span class='icon-my_account'></span> My account(s)</a></li>" );
}
