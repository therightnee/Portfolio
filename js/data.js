function entry(title, caption, image_source, function_name, link_title, link_location){
this.title = title;
this.caption = caption;
this.image_source = image_source;
this.function_name = function_name;
this.link_title = link_title;
this.link_location = link_location;
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
		"For an introductory entreprenurship class, my team and I decided to build\
		laser cut wood speakers, custom made to order.",
		"./img/RE!/bothspeakers.jpg",
		"fill(rebang_data)",
		"Read more",
		"#link"
	);

var rebang_data = new filler(
		"./img/RE!/3proto.jpg",
		"'An early prototype to test the joining mechanism.'",
		"./img/RE!/classAB.jpg",
		"'Our first Class AB amplifier.'",
		"./img/RE!/board.png",
		"'Design for a Class D amplifier.'",
		"./img/RE!/classDAmp.jpg",
		"'The assembled, but not functional, Class D amplifier.'",
		"Custom Laser Cut Speakers",
		"My team and I wanted to do some technical hands on work and bring a product \
		to market before the semester ended. We failed to produce even one finished \
		set of speakers, but we learned a lot. \
		<br /> I was in charge of the electrical design and manufacture, and worked \
		on the Class D amplifier. Through this experience I learned to use Eagle, \
		how to route a board, and how frustrating surface mount soldering can be. \
		At the end of the semester, however, I learned how truly game changing \
		economies of scale are, and the barriers of entry to the portable audio \
		market are high."
	);

var VT_REU = new entry(
		"CenTiRe Research",
		"During the summer of 2013 I worked at the Center for Tire Research. I learned\
		a lot about vehicle dynamics and designed a semi-active suspension test\
		platform",
		"./img/VT_REU/tire_section.jpg",
		"fill(VT_REU_data)",
		"Read more",
		"#link"
	);

var VT_REU_data = new filler(
		"./img/VT_REU/middle.png",
		"'An early iteration of the platform.'",
		"./img/VT_REU/final.png",
		"'The final design.'",
		"./img/VT_REU/breakout.png",
		"'Breakout for the ADXL103 chip.'",
		"./img/VT_REU/sensor.jpg",
		"'Fully assembled sensor board.'",
		"REU at Virginia Tech",
		"Traveling to the southwest reaches of Virginia, I spent a memorable summer \
		at Virginia Tech, working with Dr. Saied Taheri as part of the Center for \
		Tire Research. During my ten weeks with the program, my research focused on \
		designing a testing platform for semi-active suspensions. Given my passion \
		for cars and land vehicles it was a wonderful experience. In my spare time \
		I would read class material on topics like vehicle dynamics and tire mechanics. \
		While there wasn't enough time to build the rig, my partner, Jordan Ikeda, and I \
		thoroughly reviewed the designs and gathered all the materials. Fall 2013, the \
		project will continue as a senior design project, backed by General Motors."
	);

var NewsReader = new entry(
		"Rainbow Reader",
		"I decided to write my own because I found it more efficient to \
		 see all the headlines at once, instead of having to scroll through a \
		 long list.",
		"./img/Rainbow_Reader.jpg",
		"javascript:void(0)",
		"See it!",
		"'../RainbowReader/index.php#current=news' target=_blank"
	);

var IMEC = new entry(
		"IMEC",
		"Summer of 2012 found me in Leuven, Belgium working for a first year Formula\
		Student team.",
		"./img/IMEC/printed_knuckle.jpg",
		"fill(IMEC_data)",
		"Read more",
		"#link"
	);

var IMEC_data = new filler(
		"./img/IMEC/display.jpg",
		"'Preparing the car for display.'",
		"./img/IMEC/all_tech.jpg",
		"'A sampling of all the advanced technologies employed on the vechicle.'",
		"./img/IMEC/shipping_container.jpg",
		"'A shipping container for Aerion - my major project for the summer.'",
		"./img/IMEC/lift.jpg",
		"'The lid for the container which doubled as a on ramp.'",
		"IMEC in Belgium",
		"After my freshman year of college, I was hired by IMEC, an international research \
		comapny to work in Belgium for the summer. I had no idea what awaited me there, but \
		it was fantastic. Given my experience with fabrication, I was sent to work with \
		Formula Group T, working on their frist entry in the European Formula Student \
		comeptitions - Aerion. Not only did I sharpen my welding and manufacturing skills \
		I got to work with cutting edge technologies like biodegradeable composites to \
		laser sintered titanium."
	);

var items  = [rebang, VT_REU, NewsReader, IMEC]; //fill array with list of JSON DB's
