if(localStorage.getItem("MyFavoriteComix") === null){
	localStorage.setItem("MyFavoriteComix", "[]");
}
var favorited = JSON.parse(localStorage.getItem("MyFavoriteComix"));
for(var i = 0; magazineData.length; i++){
	var filePath = magazineData[i].fileName;
	var newFile = $("<a></a>");
	newFile.attr("href", filePath);
	var starImgID = "UnavoritedStar.png";
	if(favorited.indexOf(magazineData[i]) > -1){
		starImgID = "FavoritedStar.png";
	}
	newFile.html("<div class='pdfFile'><img src='ComixIcon2.png' class='iconImg'><p>"+magazineData[i].name+"<br>Issue "+magazineData[i].issue+"<br>By "+magazineData[i].author+"</p><div>");
	newFile.attr("target", "_blank");
	newFile.attr("rel", "noopener noreferrer");
	var containerDiv = $("<div></div>");
	containerDiv.addClass("fileContainer");
	var starBtn = $("<img>");
	starBtn.attr("src", starImgID);
	starBtn.addClass("starBtn");
	starBtn.magazine = magazineData[i];
	//containerDiv.append(starBtn);
	containerDiv.append(newFile);
	$("#magazineContainer").append(containerDiv);
}
