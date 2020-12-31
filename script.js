//Some localStorage stuff
if(localStorage.getItem("MyFavoriteComix") === null){
	localStorage.setItem("MyFavoriteComix", "[]");
}
var favorited = JSON.parse(localStorage.getItem("MyFavoriteComix"));



//Render magazines
for(var i = 0; i < magazineData.length; i++){

	var filePath = magazineData[i].fileName;

	var name = magazineData[i].name;
	var issue = magazineData[i].issue;
	var author = magazineData[i].author;

	var newFile = $("<a></a>");
	newFile.attr("href", filePath);
	newFile.html("<tr class='newFile'><td><image src='ComixIcon2.png' class='comixIconImg'></td><td><strong>"+name+"</strong></td><td><strong><em>Issue "+issue+"</em></strong></td><td>By "+author+"</td></tr>");
	newFile.attr("target", "_blank");
	newFile.attr("rel", "noopener noreferrer");

	var containerDiv = $("<div></div>");
	containerDiv.addClass("fileContainer");
	containerDiv.append(newFile);
	$("#magazineContainer").append(containerDiv);
}



//Search page functionality
var magazineTypes = [];
for(var i = 0; i < magazineData.length; i++){
	var currentType = magazineData[i].series;
	if(magazineTypes.indexOf(currentType) === -1){
		magazineTypes.push(magazineData[i].series);
	}
}
for(var i = 0; i < magazineTypes.length; i++){
	var newChoice = $("<option></option>");
	newChoice.html(magazineTypes[i]);

	$(".magazinesChoice").append(newChoice);
}
$("#searchBtn").click(function(){
	$("#magazineContainer").html("");
	for(var i = 0; i < magazineData.length; i++){
		console.log(document.querySelector(".magazinesChoice").value);
		if(magazineData[i].series === document.querySelector(".magazinesChoice").value){
			var filePath = magazineData[i].fileName;

			var name = magazineData[i].name;
			var issue = magazineData[i].issue;
			var author = magazineData[i].author;

			var newFile = $("<a></a>");
			newFile.attr("href", filePath);
			newFile.html("<tr class='newFile'><td><image src='ComixIcon2.png' class='comixIconImg'></td><td><strong>"+name+"</strong></td><td><strong><em>Issue "+issue+"</em></strong></td><td>By "+author+"</td></tr>");
			newFile.attr("target", "_blank");
			newFile.attr("rel", "noopener noreferrer");

			var containerDiv = $("<div></div>");
			containerDiv.addClass("fileContainer");
			containerDiv.append(newFile);
			$("#magazineContainer").append(containerDiv);
		}
	}
});