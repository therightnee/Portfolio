function testing(football){
	document.write(football);
};

function entry(title, caption, image_source, function_name, link_title){
this.title = title;
this.caption = caption;
this.image_source = image_source;
this.function_name = function_name;
this.link_title = link_title;
};

function filler(link1, description1, link2, description2, link3, description3, link4, description4, heading, main_body){
this.link1 = link1;
this.description1 = description1;
this.link2 = link2;
this.description2 = description2;
this.link3 = link3;
this.description3 = description3;
this.link4 = link4;
this.description4 = description4;
this.heading = heading;
this.main_body = main_body;
};

var rebang = new entry(
		"Custom Speakers",
		"This is a test",
		"./img/1200.jpg",
		"fill(rebang_data)", 
		"Read on"
	);

var rebang_data = new filler(
		"./img/1200.jpg",
		"test1",
		"./img/1200.jpg",
		"test2",
		"./img/1200.jpg",
		"test3",
		"./img/1200.jpg",
		"test4",
		"REBANG",
		"THIS IS A TEST"
	);

var VT_REU = new entry(
		"Custom Speakers",
		"This is a test",
		"./img/1200.jpg",
		"fill(rebang_data)", 
		"Read on"
	);

var VT_REU_data = new filler(
		"./img/1200.jpg",
		"test",
		"./img/1200.jpg",
		"test",
		"./img/1200.jpg",
		"test",
		"./img/1200.jpg",
		"test",
		"REBANG",
		"THIS IS A TEST"
	);

var items  = [rebang, VT_REU, rebang, VT_REU]; //fill array with list of JSON DB's
