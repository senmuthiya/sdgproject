var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;

var Source = "#boxcard1";

var ImgSource = [
  "img/1.jpg",
  //"img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  //"img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  //"img/8.jpg",
  "img/9.jpg",
  //"img/11.jpg",
  "img/12.jpg",
  //"img/13.jpg",
  "img/14.jpg",
  //"img/15.jpg",
  "img/16.jpg",
  "img/17.jpg",
];

function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}
	
function ShuffleImages() {
	var ImgAll = $(Source).children();
	var ImgThis = $(Source + " div:first-child");
	var ImgArr = new Array();

	for (var i = 0; i < ImgAll.length; i++) {
		ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
		ImgThis = ImgThis.next();
	}
	
		ImgThis = $(Source + " div:first-child");
	
	for (var z = 0; z < ImgAll.length; z++) {
	var RandomNumber = RandomFunction(0, ImgArr.length - 1);

		$("#" + ImgThis.attr("id") + " img").attr("src", ImgArr[RandomNumber]);
		ImgArr.splice(RandomNumber, 1);
		ImgThis = ImgThis.next();
	}
}

function ResetGame() {
	ShuffleImages();
	$(Source + " div img").hide();
	$(Source + " div").css("visibility", "visible");
	Counter = 0;
	$("#success").remove();
	$("#counter").html("" + Counter);
	BoxOpened = "";
	ImgOpened = "";
	ImgFound = 0;
	return false;
}

function OpenCard() {
	var id = $(this).attr("id");

	if ($("#" + id + " img").is(":hidden")) {
		$(Source + " div").unbind("click", OpenCard);
	
		$("#" + id + " img").slideDown('fast');

		if (ImgOpened == "") {
			BoxOpened = id;
			ImgOpened = $("#" + id + " img").attr("src");
			setTimeout(function() {
				$(Source + " div").bind("click", OpenCard)
			}, 300);
		} else {
			CurrentOpened = $("#" + id + " img").attr("src");
			if (ImgOpened != CurrentOpened) {
				setTimeout(function() {
					$("#" + id + " img").slideUp('fast');
					$("#" + BoxOpened + " img").slideUp('fast');
					BoxOpened = "";
					ImgOpened = "";
				}, 400);
			} else {
				// $("#" + id + " img").parent().css("visibility", "hidden");
				// $("#" + BoxOpened + " img").parent().css("visibility", "hidden");
				// ImgFound++;
				// BoxOpened = "";
				// ImgOpened = "";

        	$("#" + id + " img").parent().css("visibility", "visible");
				$("#" + BoxOpened + " img").parent().css("visibility", "visible");
				ImgFound++;
				BoxOpened = "";
				ImgOpened = "";

			}
			setTimeout(function() {
				$(Source + " div").bind("click", OpenCard)
			}, 400);
		}
		Counter++;
		$("#counter").html("" + Counter);

		if (ImgFound == ImgSource.length) {
			$("#counter").prepend('<span id="success">Congratulations. You Matched With </span>');
      
		}
	}
}

$(function() {

for (var y = 1; y < 3 ; y++) {
	$.each(ImgSource, function(i, val) {
		$(Source).append("<div id=card" + y + i + "><img src=" + val + " />");
	});
}
	$(Source + " div").click(OpenCard);
	ShuffleImages();
});
