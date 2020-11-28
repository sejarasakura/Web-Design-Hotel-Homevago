
function openPage(pageName,elmnt,color) {
	
	
  var i, tabcontent, tablinks;
  
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

function add_catergory_one_list(data_list) {
    document.write('<div class="catergory_one"><div class="catergory_one_upper_part"><h1><a href="single_page.html" onclick="change_current(' + data_list[data_type.iD] + ');">' + data_list[data_type.house_name] + '</a></h1>');
    document.write('</div><div class="catergory_one_down_part"><div class="catergory_image_box">');
    document.write('<a href="single_page.html" onclick="change_current(' + data_list[data_type.iD] + ');"><img src="' + data_list[data_type.image_file] + '/1.jpg" alt="Homevago" width="100%" height="100%" /></a>');
    document.write('</div><div class="catergory_detail"><table class="catergory_element">');
    document.write('<tr><td>Price/day</td><td class="central_semi">:</td><td>RM ' + data_list[data_type.price].toFixed(2) + '</td></tr>');
    document.write('<tr><td>Position</td><td class="central_semi">:</td><td>' + data_list[data_type.stage] + ' ' + data_list[data_type.area] + '</td></tr>');
    document.write('<tr><td>Discription</td><td class="central_semi">:</td><td style="font-size: 75%";>' + data_list[data_type.sample_d] + '</td></tr></table></div></div></div>');
}

