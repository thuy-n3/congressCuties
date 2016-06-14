console.log("hello")
console.log($)

//key=422453b7410942de8ff24bd9d3bb9f1e/
// https://congress.api.sunlightfoundation.com/legislators?apikey=[your key]

var congressPromise = $.getJSON("https://congress.api.sunlightfoundation.com/legislators?apikey=422453b7410942de8ff24bd9d3bb9f1e")


//=====================================================
//writing to html from congress Obj 

	var objToHTML = function(congressObj){
		
		console.log(congressObj)
		var htmlString = '<div class="memberContainer">'
		htmlString += '<p class="firstName">' + congressObj.first_name + " " + congressObj.last_name + "<p>"
		htmlString += '<p class="party">' + " " + "Rep:" + " " + congressObj.party + " " + congressObj.state_name + "<p>"
		htmlString += '<p class="phone">' + congressObj.phone + "<p>"
		// htmlString += '<p class="email">' + congressObj.oc_email + "<p>"
 		htmlString += '<p class="office">' + congressObj.office + "<p>"
		htmlString += '<p class="website">' + congressObj.website + "<p></div>"
		return htmlString
	}

//=====================================================
//promise for data from api

var handleJsonData = function(promiseResponse){

	var congressArr = promiseResponse.results

	var htmlString = ""

	for(var i=0; i<congressArr.length; i++){
		var congressObj = congressArr[i]
		// console.log(congressObj)
		htmlString += objToHTML(congressObj)
		
	}

	var congressContainer = document.querySelector("#container")
	// console.log(htmlString)
	congressContainer.innerHTML = htmlString

}


congressPromise.then(handleJsonData)




