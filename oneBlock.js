
	

console.log("hello")
console.log($)

//apikey=422453b7410942de8ff24bd9d3bb9f1e/
// https://congress.api.sunlightfoundation.com/legislators?apikey=[your key]

var congressPromise = $.getJSON("https://congress.api.sunlightfoundation.com/legislators?apikey=422453b7410942de8ff24bd9d3bb9f1e")

var congressContainer = document.querySelector("#container")

var handleJsonData = function(promiseResponse){

	// console.log("handleJsonData is working")
	// console.log(promiseResponse) //checking if youre getting the data from the promise 

	var congressArr = promiseResponse.results
	// console.log(congressArr) //putting the promise data into arrays 

	// var htmlString = "<p>" + promiseResponse.results.state + "<p>"

	var htmlString = " "

	for(var i=0; i<congressArr.length; i++){
		var congressObj = congressArr[i]
		console.log(congressObj)

		htmlString += '<div class="memberContainer">'
		htmlString += '<p class="firstName">' + congressObj.first_name + congressObj.last_name + "<p>"
		htmlString += '<p class="party">' + congressObj.party + " " +congressObj.state_name + "<p>"
		htmlString += '<p class="phone">' + congressObj.phone + "<p>"
		htmlString += '<p class="office">' + congressObj.office + "<p>"
		htmlString += '<p class="website">' + congressObj.website + "<p></div>"
	}

	congressContainer.innerHTML = htmlString


}




congressPromise.then(handleJsonData)