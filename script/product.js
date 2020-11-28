var current_data = 0;

const data_number = {
    home_data_0 : 1,
    home_data_1 : 2,
    home_data_2 : 3,
    home_data_3 : 4,
    home_data_4 : 5,
    home_data_5 : 6,
    office_data_0 : 7,
    office_data_1 : 8,
    office_data_2 : 9,
    office_data_3 : 10,
    office_data_4 : 11,
    office_data_5 : 12,
    room_data_0 : 13,
    room_data_1 : 14,
    room_data_2 : 15,
    room_data_3 : 16,
    room_data_4 : 17,
    room_data_5 : 18,
    restaurant_data_0 : 19,
    restaurant_data_1 : 20,
    restaurant_data_2: 21,
    restaurant_data_3: 22,
    restaurant_data_4: 23,
    restaurant_data_5: 24,
    place_data_0: 25,
    place_data_1: 26,
    place_data_2: 27,
    place_data_3: 28,
    place_data_4: 29,
    place_data_5: 30
}
// 0 1, 10,  
const data_type = {
    iD: 0,//
    image_file: 1,//
    number_image: 2,//
    promotion_bool: 3,
    house_name: 4,//
    price: 5,//
    country: 6,//
    stage: 7,//
    area: 8,//
    house_unit: 9,//
    map_link: 10,//
    sample_d: 11,//
    detail_d: 12,//
}

//let example_data = ["image file", "number of image", "promotion_stage", "house_name", "price", "contry", "stage", "area", "门牌", "simple discription", "detail discription"];

/* image file, number of image, house_name, price, stage, contry, area, 门牌, simple discription, detial discription*/
var home_data_0 = [1, "../Image/home1", 7, true, "Apartment Jahilia", 456.50, "Malaysia", "Perak", "Ampang Jalan Kemboja 3A", "39", "https://maps.google.com/maps?q=mid%20valley&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "4 room, 2 toilet, near to lrt, mrt", "Strategically located, KL Eco City Vogue Suite 1 is at the epicentre of luxury amenities and fine living with premier shopping complexes such as Mid Valley Megamall, The Gardens Mall, KL Gateway Shopping Mall and Nu Sentral Mall."];
var home_data_1 = [2, "../Image/home2", 9, false, "Setapak House", 650.00, "Malaysia", "Kedah", "PV 12", "BLOCK-D-12-5", "https://maps.google.com/maps?q=leisure%20mall&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "3 room, 1 toilet, bus stop 3min to taruc", "s1006sf 3BR at RM650 net ! Newly renovated, 3 BR apartment located in the heart of Wangsa Maju KL City. Large open floor plan with full height kitchen cabinet, and storage cabinet. Unit also equipped with ceiling fans, and water heaters. Unit facing unobstructed views out morning sunshine."];
var home_data_2 = [3, "../Image/home3", 5, false, "Petaling Gardents House", 400.00, "Malaysia", "Selangor", "damansara", "B1-9-5", "https://maps.google.com/maps?q=cheras%20sentral%20mall&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "2room, kictchen, reading room, near high wayeasy drive", "This luxury apartment also guarded by 24-hour security surveillance, smart card security access and intercom system. Vogue Suite 1 promises luxury living in the comforts of the city with excellent relaxation, leisure facilities and offers a panoramic view of Kuala Lumpur city centre and Bangsar."];
var home_data_3 = [4, "../Image/home4", 7, false, "Elemanted Ampang", 360.00, "Malaysia", "Kedah", "Ampang jalan 31/4", "12-36", "https://maps.google.com/maps?q=setia%20city%20mall&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "3 room with gardent swimming pool and gym", "The development is centrally located in the heart of the shopping district of Bukit Bintang, neighbouring Pavilion Mall and Grand Millennium Hotel. Right across the residence is the swanky Starhill Gallery along with Fahrenheit88."];
var home_data_4 = [5, "../Image/home5", 7, false, "Maluri Resot", 490.00, "Malaysia", "Sabah", "Jalan TKUW", "127", "https://maps.google.com/maps?q=setia%20city%20mall&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "3 room, large living room 45\" large TV", "Another major advantage of living in the heart of the city centre is the public transportation’s impeccable services. It is truly a blessing to know that the light rail transits (LRTs), monorails and rapid transit system (MRTs) are a matter of minutes away on foot. "];
var home_data_5 = [6, "../Image/home6", 7, true, "Pudu Apertment", 650.00, "Malaysia", "Johor", "Jalan chan show lin", "BLOCK-A-11-9", "https://maps.google.com/maps?q=setia%20city%20mall&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "*kindly contact/ sms /what's app*012 - 606 0614 Ben for more information & make appointment to visit ", "The closest operating station is the Bukit Bintang Monorail station, which is situated right opposite of the development, beside Fahrenheit88. Or residents could walk along the covered walkway that connects Pavilion to Suria KLCC in order to take the LRT route."];
var office_data_0 = [7, "../Image/office1", 3, false, "KLCC office", 1350.00, "Malaysia", "Perak", "Jalan KLCC", "21-3-403", "https://maps.google.com/maps?q=nordin%20(motel)&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "Restorant around the office. mrt 20min reach", "Hi we cover all Mid Valley and KL Eco City office units. We have sizes from 1000 to 50,000. Rental from RM3,800 up! Kindly call Rachel 012-2095780 for complete guide!"];
var office_data_1 = [8, "../Image/office2", 7, false, "Pavilion Office", 1270.00, "Malaysia", "Kedah", "Jalan bukit bingtang", "level-5", "https://maps.google.com/maps?q=setia%20city%20mall&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "shopping any way! very near mrt/monorail", "- A new international financial district in the Golden Triangle of Kuala Lumpur, underpinned by a world-class commercial, residential, hospitality, retail, leisure and cultural offering. \n- Seamless business environment for financial services firms, multinational companies and supporting ancillary businesses. - Fully integrated with highways and major arterial roads \n- Direct connected to the city's largest integrated underground MRT interchange station."];
var office_data_2 = [9, "../Image/office3", 4, true, "Datistion Office", 1270.00, "Malaysia", "Perak", "Jalan bukit bingtang", "level-5", "https://maps.google.com/maps?q=jalan%20bunga%20kemboja&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "GRADE A STRATA OFFICES IN THE CBD OF FUTURE AND THE HUB OF TRANSPORTATION OF MALAYSIA kL SENTRAL", "Quick Facts about The Exchange 106 -Land Area 148,896sq.ft -Building Height: 492.3m versus Petronas Twin Tower: 452m -Number of Floors and Zones: 106 floors and 6 basements \n1.Low Zone \n2.Mid Zone \n3.Low High Zone \n4.Sky Lobby \n5.High Zone \n6.Super High Zone \n7.Sky Floor"];
var office_data_3 = [10, "../Image/office4", 6, false, "solaris dutamas", 6000.00, "Malaysia", "Johor", "Jalan dutamas 1", "21-7", "https://maps.google.com/maps?q=setia%20city%20mall&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "Built-up : 1,600 sq. ft.Land area :Please call Stephanie 0122366149", "-Turnstile Security Access Gate -Intelligent Destination Lift Control System -1400 Car Parks -Sky Garden .6 Story Sky Garden for dining, extensive greenery -Retail Outlets -15,000sqft Private Roof Top Garden A spectacular state-of-art 45 story Grade A office tower designed as a contemporary monoblock glass box."];
var office_data_4 = [11, "../Image/office5", 6, false, "Pavilion Office", 17000.00, "Malaysia", "Selangor", "Jalan bukit bingtang", "level-5", "https://maps.google.com/maps?q=setia%20city%20mall&t=&z=13&ie=UTF8&iwloc=&output=embed",
    " BANGSAR SOUTH OFFICE SPECIALIST, CALL 016-2126193 or EMAIL: clarisseproperty@gmail.com NOW!", "WE ARE THE LEADING OFFICE SPACE SOLUTION EXPERT * WE COVER ALL BANGSAR SOUTH OFFICE including The Horizon, Vertical Business Suites, Vertical Corporate Tower, UOA Corporate Tower, Menara Suezcap KL Gateway CONTACT US NOW FOR FREE & NON-OBLIGATORY CONSULTATION of office size, rental, condition, etc"];
var office_data_5 = [12, "../Image/office6", 4, true, "Bangs Hukum Office", 25000.00, "Malaysia", "Terengganu", "Jalan bukit bingtang", "level-5", "https://maps.google.com/maps?q=jalan%20bunga%20kemboja&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "we are specialise in Bangsar South, UOA Bangsar, Mid Valley & KlCC most of the units. We cover from 800sqft - 18,0000sqft. ", "Q Sentral is destined to become an iconic landmark in the Kuala Lumpur Skyline. Q Sentral Offer investors and owners stratafied office space that have been separated into 2 distinct zone. -High Zone 30 story through 42story -Lower Zone 13A story 29 story FOR VIEWING CALL or What Up MR.CHELVAM AT 6012 5020137,6016-3777253 OR EMAIL AT chelvam888@gmail.com, www.klproperty.iagent.my"];
var room_data_0 = [13, "../Image/room1", 5, false, "Casa Green", 850.00, "Malaysia", "Negeri Sembilan", "Jalan KLCC", "-", "https://maps.google.com/maps?q=Seagull%20Beach%20Village%20Resort&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "Walking to Kg Muhibbah LRT station, Mamak, Chinese Kopitiam, 99 Speedmart, Mynews Mart etc.", "Single balcony room available at RM650/month!!!Casa Green @ Bukit Jalil - Brand New Condo with Brand New Furnishings @ Bukit Jalil. 1st month rental + 2 months deposit + 1/2 month utility deposit + access card deposit to start!.Spectacular 50m olympic size swimming pool. 4000sf fully equipped gymnasium."]
var room_data_1 = [14, "../Image/room2", 4, true, "Metro Prima, Fortune Avenue Condo", 770.00, "Malaysia", "Melaka", "Kepong", "Block level 12", "https://maps.google.com/maps?q=Best%20Stay%20Hotel%20Pangkor%20Island&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "Near Maybank, HSBC Bank, KFC, PIZZA HUT, 99 Speedmart, KK Mart, mamak, restaurants", "5mins walk to Aeon Big, Aeon, 10mins drive to BREM Mall. NON-SHARING / SINGLE room, price include utility bills. newly renovated, tiled, full grille, ceiling fan. 24hrs security, CCTV, swimming pool, gym. Contract: 6months minimum stay (deposit not refundable if less than 6months). Age 18 – 50 years old only"]
var room_data_2 = [15, "../Image/room3", 4, false, "Fadason Park Condo", 540.00, "Malaysia", "Selangor", "FADASON PARK CONDO", "level-5", "https://maps.google.com/maps?q=%20%20%2BSaiKeat%E7%9E%AD%E8%A7%A3%E8%A9%B3%E6%83%85%20%20Pearl%20Suria%20KL%20South&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "Location Link: https://goo.gl/maps/7Aw9Y6uU1Mz \n10 mins drive to AEON, AEON Big, BREM Mall", "- Payment: 1+1 + RM100 (key and card deposit) - Contract: 6months minimum stay (deposit not refundable if less than 6months) - Malaysian Citizens only - Prefer Chinese and Malay - Age 18 – 50 years old only - Tenant need to keep their space clean and pay rent on time every month - Following is not allowed in the premise: pets, children and babies, smoking, air-cond and air-coolers"]
var room_data_3 = [16, "../Image/room4", 5, false, "Casa Tropicana condo", 960.00, "Malaysia", "Kelantan", "Jalan dutamas 1", "-", "https://maps.google.com/maps?q=nordin%20(motel)&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "Fully Furniture,small room 500++ 3 rooms for rent ", "-Fully furnished -Any additional furnishings given : washing machine, dryer, fridge, LCD TV. 5 aircond units -Included Utilities,Wifi -Near Surian LRT Station -Balcony View:Garden View For more details whatsapp to 011-2103 7848"]
var room_data_4 = [17, "../Image/room5", 5, false, "Damai Residences Kota Kemuning ", 780.00, "Malaysia", "Johor", "Bukit Kemuning", "level-12", "https://maps.google.com/maps?q=Abukit%20keramat&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "Please call 012-6386603 for viewing or inquiries.", "All rooms with private bathroom & Water Heater\nNew air conditioning\nFan & Lighting\nTables/Chairs, Wardrobes, Bedding is upon request. Rental: Master Bedroom - RM650 exclude utilities Other Rooms - RM550 exclude utilities Available in May 2019."]
var room_data_5 = [18, "../Image/room6", 5, false, "PV5 Small Room", 650.00, "Malaysia", "Sarawak", "setapak central", "Block K", "https://maps.google.com/maps?q=jalan%20bunga%20kemboja&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "Condo Facilities: Swimming pool, gym, mamak shop ,24 hours security,playground, & etc", "Facilities: \n>fridge \n>washing machine >water heater \n>Ceiling Fan \n> 5 mins walking distance to Paparich,Secret Recipe,MacD,Old Town \n> Near LRT station \n-Friendly & tidy Chinese housemates \n-Clean & comfortable environment \n-KLCC View"]
var restaurant_data_0 = [19, "../Image/restaurant1", 5, false, "CRAFT Beer Market", 2350.00, "Malaysia", "Melaka", "Jalan Lok Yue", "21-3-403", "https://maps.google.com/maps?q=Cybersquare%20SOHO%2C%20Cyberjaya&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "CRAFT Beer Market is a premium casual restaurant and bar with a passion for fresh local food and great craft beer.", "The multi-level CRAFT Beer Market in Toronto is a unique venue with the capacity to host groups of up to 500. There are a variety of semi-private areas available for meetings, business dinners, receptions, cocktail parties, engagement parties, weddings, birthday celebrations, team building, presentations and more! "];
var restaurant_data_1 = [20, "../Image/restaurant2", 4, false, "Blu Ristorante", 3270.00, "Malaysia", "Melaka", "Jalan bunga raya", "-", "https://maps.google.com/maps?q=%20%20%2BSaiKeat%E7%9E%AD%E8%A7%A3%E8%A9%B3%E6%83%85%20%20Pearl%20Suria%20KL%20South&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "Blu Ristorante is a Toronto Italian restaurant in Yorkville, based on authentic classic cuisine, yet, contemporary.", "We offer three private rooms and full Buy-Outs to our guests: Small, middle, large Private Room !! \nBuy-Out - Holds up to 110 people, please call to arrange details (416.921.1471), prices vary through the days of the week."];
var restaurant_data_2 = [21, "../Image/restaurant3", 5, true, "JOEY Eaton Centre", 2570.00, "Malaysia", "Pahang", "Jalan mesapotania", "level-5", "https://maps.google.com/maps?q=Padi%20Box%20Homestay&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "JOEY Eaton Centre Private Events provides guests with a team that will work with you to customize your event needs. ", "JOEY offers catering and bar services, as well as onsite event planning, light, sound, cleanup, and setup. It allows clients to reserve the venue for a private reception with exclusive rooms for all capacities. This restaurant also caters to dietary needs and preferences, such as gluten free, lactose free, nut free, no pork, vegan, and vegetarian"];
var restaurant_data_3 = [22, "../Image/restaurant4", 4, false, "Stratus Restaurant", 6000.00, "Malaysia", "Sabah", "Jalan oskada", "21-7", "https://maps.google.com/maps?q=Mori%20Residence%20%7C%20Melaka%20City%2C%20Melaka&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "Stratus's Private Event Rooms host intimate seated dinners for 10 guests, to larger parties of 100 people with our full buy-outs on weekends. ", "From the 36th floor of Meis Van Der Rohe designed TD South Tower, big city palates are pleasantly surprised by our craft kitchen, which marries both traditional flavours and ingenuity for our loyal Bay St. fan base. In our modern yet relaxed interior, our well informed team truly delivers on the promise of world class service. "];
var restaurant_data_4 = [23, "../Image/restaurant5", 6, false, "La Vecchia Ristorante", 7900.00, "Malaysia", "Selangor", "Jalan Tun adulah hukum", "24A", "https://maps.google.com/maps?q=Modern%20Rustic%20Beachside%20Bungalow%20%7C%20Tanjung%20Bungah%2C%20Penang&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "Whether a corporate meeting or a special celebration, our team looks forward to providing an unforgettable experience.", "La Vecchia delivers the authentic taste of Italy with a genuine Italian ambiance. From the stone and stucco walls covered in Italian pictures and art, La Vecchia captures the essence of Italian dining with European flair. "];
var restaurant_data_5 = [24, "../Image/restaurant6", 4, true, "Brassaii restuarant", 5000.00, "Malaysia", "Sarawak", "Jalan suangi besi", "11C", "https://maps.google.com/maps?q=Mutze%20Guest%20House&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "You can entertain their guests, both, casually and elegantly offering superior quality ingredients, full of flavour and very well presented. ", "A fixture of Toronto's King West social scene, Brassaii Restaurant and Lounge is a multi-functional space well-suited to host a variety of occasions from corporate business meetings and casual cocktails to Toronto's most premier-luxury events."];
var place_data_0 = [25, "../Image/place1", 4, false, "FarmerPark", 50.00, "Malaysia", "Selangor", "Jalan Tun razak", "987-99",  "https://maps.google.com/maps?q=Village%20Castle%20Homestay%20%7C%20Johor%20Bahru%2C%20Johor&t=&z=13&ie=UTF8&iwloc=&output=embed",
"Farmer park is suitable for those who love and enjoy leisure time with mother nature", "At here, you can basically throw all the troubles off and enjoy yourself in such beautiful lands!"];
var place_data_1 = [26, "../Image/place2", 3, false, "Newcastle's Room", 70.00, "Malaysia", "Melaka", "NewYork12 Road", "987-99" , "https://maps.google.com/maps?q=Cozy%20Stay%20%7C%20Kuantan%2C%20Pahang&t=&z=13&ie=UTF8&iwloc=&output=embed", "One double-room for rent, we provide 2 chairs, desk, queen-sized bed with good viewing of outside!",
    "Hope you enjoy the place if you like it after rental, if not please let us know and we will make the improvement! Wish you a good day!"];
var place_data_2 = [27, "../Image/place3", 3, true, "2-story Home", 50.00, "Malaysia", "Negeri Sembilan", "Allah Road", "987-53", "https://maps.google.com/maps?q=Traders%20Villa%20%7C%20Melaka%20City%2C%20Melaka&t=&z=13&ie=UTF8&iwloc=&output=embed", "Rental of 2story house for a few days as the owners will be out station for travelling", 
    "Hope you enjoy the place if you like it after rental, if not please let us know and we will make the improvement! Wish you a good day!"];
var place_data_3 = [28, "../Image/place4", 3, false, "Fancy Room", 90.00, "Malaysia", "Kelantan", "Jesus Road", "987-23", "https://maps.google.com/maps?q=The%20Monte%20Boutique%20Retreat%20%7C%20Langkawi%2C%20Kedah&t=&z=13&ie=UTF8&iwloc=&output=embed", "Beautiful and clean place which is very suitable for you to rest and stay for a few days or weeks!",  
    "Hope you enjoy the place if you like it after rental, if not please let us know and we will make the improvement! Wish you a good day!"];
var place_data_4 = [29, "../Image/place5", 4, false, "Detached House", 80.00, "Malaysia", "Selangor", "Rome Road", "987-29", "https://maps.google.com/maps?q=Mutze%20Guest%20House%20%E2%80%93%20Nordic%20Simplicity%20%7C%20Melaka%20City%2C%20Melaka&t=&z=13&ie=UTF8&iwloc=&output=embed", "This place is suitable for you if you want to have a huge party or meeting here!", 
    "Hope you enjoy the place if you like it after rental, if not please let us know and we will make the improvement! Wish you a good day!"];
var place_data_5 = [30, "../Image/place6", 3, false, "Villa", 60.00, "Malaysia", "Terengganu", "Genting Road", "987-12", "https://maps.google.com/maps?q=Home%20%40%20Regalia%2C%20KL&t=&z=13&ie=UTF8&iwloc=&output=embed", "The villa is actually near to a beach which you can enjoy the wind from sea and good viewing!", 
    "Hope you enjoy the place if you like it after rental, if not please let us know and we will make the improvement! Wish you a good day!"];

function get_product(data_sri_number)
{
    return creat_product_page(data_sri_number);
}

function creat_product_page(data_sri_number) {
    if(data_sri_number == 0)
    current_data = localStorage.getItem("current_data");
    else
    current_data = data_sri_number;
    switch(Number(current_data))
    {
        case data_number.home_data_0: 
        return (home_data_0);break;
        case data_number.home_data_1: 
        return (home_data_1);break;
        case data_number.home_data_2: 
        return (home_data_2);break;
        case data_number.home_data_3: 
        return (home_data_3);break;
        case data_number.home_data_4: 
        return (home_data_4);break;
        case data_number.home_data_5:
        return (home_data_5);break;
        case data_number.office_data_0: 
        return (office_data_0);break;
        case data_number.office_data_1: 
        return (office_data_1);break;
        case data_number.office_data_2:
        return (office_data_2);break;
        case data_number.office_data_3:
        return (office_data_3);break;
        case data_number.office_data_4:
        return (office_data_4);break;
        case data_number.office_data_5: 
        return (office_data_5);break;
        case data_number.room_data_0: 
        return (room_data_0);break;
        case data_number.room_data_1: 
        return (room_data_1);break;
        case data_number.room_data_2: 
        return (room_data_2);break;
        case data_number.room_data_3: 
        return (room_data_3);break;
        case data_number.room_data_4: 
        return (room_data_4);break;
        case data_number.room_data_5:
        return (room_data_5);break;
        case data_number.restaurant_data_0:
        return (restaurant_data_0);break;
        case data_number.restaurant_data_1: 
        return (restaurant_data_1);break;
        case data_number.restaurant_data_2:
        return (restaurant_data_2);break;
        case data_number.restaurant_data_3:
        return (restaurant_data_3);break;
        case data_number.restaurant_data_4:
        return (restaurant_data_4);break;
        case data_number.restaurant_data_5: 
        return (restaurant_data_5);break;
        case data_number.place_data_0: 
        return (place_data_0);break;
        case data_number.place_data_1: 
        return (place_data_1);break;
        case data_number.place_data_2: 
        return (place_data_2);break;
        case data_number.place_data_3: 
        return (place_data_3);break;
        case data_number.place_data_4: 
        return (place_data_4);break;
        case data_number.place_data_5:
        return (place_data_5);break;
    }
}

function change_current(data_var){
    current_data = data_var;
    localStorage.setItem("current_data", data_var);
}

function change_current_next(){
	current_data--;
	current_data = valid_current_data(current_data);
    localStorage.setItem("current_data", current_data);
}
function change_current_pre(){
	current_data++;
	current_data = valid_current_data(current_data);
    localStorage.setItem("current_data", current_data);
}

function valid_current_data(data){
	if(data <= 0)
	{
		return 30;
	}
	else if (data > 30)
	{
		return 1;
	}
	else{
		return data;
    }
}
function for_each_display_none()
{
    var scroll_container_var = document.getElementsByClassName("scroll_container");
    for (let i = 0; i < scroll_container_var.length; i++) 
    {
        scroll_container_var[i].style.display = "none";
    }
}
function display_stage(the_stage_number)
{
    const stage_id_full_name = ["johor","melaka", "ns", "pahang", "perak", "selangor", "terengganu", "kelantan", "kedah", "sabah", "sarawak"]
    var stage_target_id = document.getElementById(stage_id_full_name[the_stage_number]);
    for_each_display_none();
    stage_target_id.style.display = "block";
}
function start_stage()
{
    display_stage(5);
}
function write_item(item_number_image_part){
    var item_number_image_part_data = creat_product_page(item_number_image_part);
    document.write('<div class="item"><a href="single_page.html"  onclick="change_current('+ item_number_image_part +');">');
    document.write('<img src="' + item_number_image_part_data[data_type.image_file] + '/1.jpg" alt="' + item_number_image_part_data[data_type.house_name] + '" title="' + item_number_image_part_data[data_type.house_name] + '" width="100%" height="100%">')
    document.write('</a></div>');
}

function write_star(num_star)
{
    for(let x = 0; x < num_star; x++)
    {
        document.write('<span class="icon-yellow-star-active"></span>');
    }
    for(let x = 0; x < (5-num_star); x++)
    {
        document.write('<span class="icon-star-empty" style="color: #333"></span>');
    }
}