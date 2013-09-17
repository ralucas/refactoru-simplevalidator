var phFunc = function(){

	var phoneNumber = prompt("Please enter your phone number (include area code and dashes)\n And no worries, we won't sell your information, we promise");

	var rawPh = phoneNumber.slice(0,3) + phoneNumber.slice(4,7) + phoneNumber.slice(8,12);

	var numPh = Number(rawPh);

	var dashes = phoneNumber.charAt(3) + phoneNumber.charAt(7);

		if(dashes !== "--"){
			alert("Please enter your phone number with dashes!");
			phFunc();
		}

		else if(rawPh.length === 10 && isNaN(numPh) !== true){
		alert("Your Phone Number is valid! Thank you.");
		return;
		}

		else{
			alert("Dude, that's not a phone number");
			phFunc();
		}
}

var bdFunc = function(){

	var birthDate = prompt("Please enter your birth date (in the XX/XX/XX format)\n And no worries, we won't sell your information, we promise");

	var rawBd = birthDate.slice(0,2) + birthDate.slice(3,5) + birthDate.slice(6,8);

	var numBd = Number(rawBd);

	var slashes = birthDate.charAt(2) + birthDate.charAt(5);

		if(slashes !== "//"){
			alert("Please enter your birth date in the XX/XX/XX format");
			bdFunc();
		}

		else if(rawBd.length === 6 && isNaN(numBd) !== true){
		alert("Your Birth Date is valid! Thank you.");
		return;
		}

		else{
			alert("Dude, that's not a birth date");
			bdFunc();
		}
}

var pcFunc = function(){

	var postalCode = prompt("Please enter your postal code (in either the XXXXX or XXXXX-XXXX format)\n And no worries, we won't sell your information, we promise");

	var rawPc = postalCode.slice(0,5) + postalCode.slice(6,10);

	var numPost = Number(postalCode);

	var numRawPc = Number(rawPc);

		if((isNaN(numPost) !== true || isNaN(numRawPc) !== true) && (postalCode.length === 5 || rawPc.length === 9)){
				alert("Your postal code is valid! Thank you.");
				return;
		}
		else{
			alert("Dude, that's not a postal code");
			pcFunc();
		}
}

var stFunc = function(){

	var state = prompt("Please enter your state (in caps (e.g. OH))\n And no worries, we won't sell your information, we promise");

		if(state !== state.toUpperCase()){
			alert("Please re-enter state with all caps")
			stFunc();
		}

		else if(state.length === 2 && isNaN(state) === true){
			alert("You're living in a valid state! Thank you.");
			return;
		}

		else{
			alert("Dude, that's not a state");
			stFunc();
		}
}

var marFunc = function(){

	var married = prompt("Please enter whether you are married or not ('Yes' or 'No')\n And no worries, we won't sell your information, we promise");

	var marUp = married.toUpperCase();

		if(marUp === "YES" || marUp === "NO"){
			alert("Your status is valid! Thank you.");
			return;
		}

		else{
			alert("Dude, that's not marriage status");
			marFunc();
		}
}


phFunc();
bdFunc();
pcFunc();
stFunc();
marFunc();