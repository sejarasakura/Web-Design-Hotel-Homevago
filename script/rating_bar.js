

function generate_rating_bar(five_s, four_s, three_s, two_s, one_s)
{
    document.write("<style>");
    document.write('.bar-5 {width: ' + five_s + '%; height: 18px; background-color: #009688 ;}');
    document.write('.bar-4 {width: ' + four_s + '%; height: 18px; background-color: #35a79c ;}');
    document.write('.bar-3 {width: ' + three_s + '%; height: 18px; background-color: #54b2a9 ;}');
    document.write('.bar-2 {width: ' + two_s + '%; height: 18px; background-color: #65c3ba ;}');
    document.write('.bar-1 {width: ' + one_s + '%; height: 18px; background-color: #83d0c9 ;}');
    document.write("</style>");
}

function rating_col(num, star)
{
    document.write('<div class="col"><div class="side"><div>' + num +'</div></div>')
    document.write('<div class="middle"><div class="bar-container_inside">');
    document.write('<div class="bar-' + star + '"></div></div></div><div class="side right">');
    document.write('<div>'+star+' <span class="icon-yellow-star-active"></span></div></div></div>');
}