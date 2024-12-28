function openCity_interactive(evt, cityName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent_interactive");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

    tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";    

    
}

function openCity_stickerInteractive(evt, cityName) {

    var i, tabcontentOne, tablinksOne;

    tabcontentOne = document.getElementsByClassName("tabcontent_stickerInteractive");
        for (i = 0; i < tabcontentOne.length; i++) {
            tabcontentOne[i].style.display = "none";
        }

    tablinksOne = document.getElementsByClassName("stickerLink");
        for (i = 0; i < tablinksOne.length; i++) {
            tablinksOne[i].className = tablinksOne[i].className.replace(" active", "");
        }
    
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";    

    
}

var imageBeingRotated = false; // The DOM image currently being rotated (if any)
var mouseStartAngle = false; // The angle of the mouse relative to the image centre at the start of the rotation
var imageStartAngle = false; // The rotation angle of the image at the start of the rotation

function bindElement(element) {
  $(element).bind("click", function() {
      console.log("delete")
      element.parent().remove();
  });
}

function dragStart(e, ui) {
  if (imageBeingRotated) return false;
}

function openLightbox(image) {
}

function startRotate(e) {

// Exit if the shift key wasn't held down when the mouse button was pressed
if (!e.shiftKey) return;

// Track the image that we're going to rotate
imageBeingRotated = this;

// Store the angle of the mouse at the start of the rotation, relative to the image centre
var imageCentre = getImageCentre(imageBeingRotated);
var mouseStartXFromCentre = e.pageX - imageCentre[0];
var mouseStartYFromCentre = e.pageY - imageCentre[1];
mouseStartAngle = Math.atan2(mouseStartYFromCentre, mouseStartXFromCentre);

// Store the current rotation angle of the image at the start of the rotation
imageStartAngle = $(imageBeingRotated).data('currentRotation');

// Set up an event handler to rotate the image as the mouse is moved
$(document).mousemove(rotateImage);

console.log("got here");
return false;

}

function stopRotate(e) {

// Exit if we're not rotating an image
if (!imageBeingRotated) return;

// Remove the event handler that tracked mouse movements during the rotation
$(document).unbind('mousemove');

// Cancel the image rotation by setting imageBeingRotated back to false.
// Do this in a short while - after the click event has fired -
// to prevent the lightbox appearing once the Shift key is released.
setTimeout(function() {

imageBeingRotated = false;
}, 10);
return false;

}

function rotateImage(e) {
// Exit if we're not rotating an image
if (!e.shiftKey) return;
if (!imageBeingRotated) return;

// Calculate the new mouse angle relative to the image centre
var imageCentre = getImageCentre(imageBeingRotated);
var mouseXFromCentre = e.pageX - imageCentre[0];
var mouseYFromCentre = e.pageY - imageCentre[1];
var mouseAngle = Math.atan2(mouseYFromCentre, mouseXFromCentre);

// Calculate the new rotation angle for the image
var rotateAngle = mouseAngle - mouseStartAngle + imageStartAngle;

// Rotate the image to the new angle, and store the new angle
$(imageBeingRotated).css('transform', 'rotate(' + rotateAngle + 'rad)');
$(imageBeingRotated).css('-moz-transform', 'rotate(' + rotateAngle + 'rad)');
$(imageBeingRotated).css('-webkit-transform', 'rotate(' + rotateAngle + 'rad)');
$(imageBeingRotated).css('-o-transform', 'rotate(' + rotateAngle + 'rad)');
$(imageBeingRotated).data('currentRotation', rotateAngle);

return false;

}

function getImageCentre(image) {
// Rotate the image to 0 radians
$(image).css('transform', 'rotate(0rad)');
$(image).css('-moz-transform', 'rotate(0rad)');
$(image).css('-webkit-transform', 'rotate(0rad)');
$(image).css('-o-transform', 'rotate(0rad)');

// Measure the image centre
var imageOffset = $(image).offset();
var imageCentreX = imageOffset.left + $(image).width() / 2;
var imageCentreY = imageOffset.top + $(image).height() / 2;

// Rotate the image back to its previous angle
var currentRotation = $(image).data('currentRotation');

$(imageBeingRotated).css('transform', 'rotate(' + currentRotation + 'rad)');
$(imageBeingRotated).css('-moz-transform', 'rotate(' + currentRotation + 'rad)');
$(imageBeingRotated).css('-webkit-transform', 'rotate(' + currentRotation + 'rad)');
$(imageBeingRotated).css('-o-transform', 'rotate(' + currentRotation + 'rad)');

// Return the calculated centre coordinates
  return Array(imageCentreX, imageCentreY);
}

$(document).ready(function() {

 var count = 1;

$('div.changeable_code').click(function(e) {

  document.getElementById("" + this.id).focus();

  count = count + 1;
  var div = document.createElement('div');
  div.style.position = "absolute";
  div.className = "isResizable";
  div.style.top = "1200px";
  div.style.left = "500px"
  div.style.height = "30px";
  div.style.width = "30px";
  div.id = "original" + count;

$(div).appendTo("#handwrapper");

$(div).draggable({
    start: dragStart
});

  var clone = $("#" + this.id).clone();
  clone.attr("id", "clone" + count);

  console.log(clone);

  clone.appendTo(div);
  var red_x_div = null;
  var slider_div = null;
  var oddClick = true;
  var temp = null;
  var firstClick = true;
  var dragging = false;

$(document).mouseup(stopRotate);

  var left = Math.floor(Math.random() * 450 + 100);
  var top = Math.floor(Math.random() * 100 + 100);
  var angle = Math.floor(Math.random() * 60 - 30);

$(clone).css('left', left + 'px');
$(clone).css('top', top + 'px');
$(clone).css('transform', 'rotate(' + angle + 'deg)');
$(clone).css('-moz-transform', 'rotate(' + angle + 'deg)');
$(clone).css('-webkit-transform', 'rotate(' + angle + 'deg)');
$(clone).css('-o-transform', 'rotate(' + angle + 'deg)');
$(clone).data('currentRotation', angle * Math.PI / 180);

clone.click(function() {

  if (oddClick) {

  openLightbox(this);
  oddClick = false;
  firstClick = false;
  console.log("odd");
  red_x_div = document.createElement('div');
  red_x_div.style.position = "absolute";
  red_x_div.style.top = "-0.9cm";
  red_x_div.style.left = "110px";
  red_x_div.style.height = "20px";
  red_x_div.style.width = "20px";
  red_x_div.id = "red" + count;

    $(red_x_div).appendTo(clone.parent());
    
        bindElement($("#red" + count));
        var x = document.createElement("IMG");
        x.setAttribute("src", "All-Images/red_x.png");
        x.setAttribute("width", "20");
        x.setAttribute("height", "20");

      $(red_x_div).append(x);

  slider_div = document.createElement('div');
  slider_div.style.position = "absolute";
  slider_div.style.top = "-0.75cm";
  slider_div.style.left = "0px";
  slider_div.style.height = "30px";
  slider_div.style.width = "5px";
  slider_div.id = "slider" + count;
  var slider = document.createElement("input");
  slider.setAttribute("id", "slide" + count);
  slider.setAttribute("type", "range");
  slider.setAttribute("min", "10");
  slider.setAttribute("max", "90");
  slider.setAttribute("step", "0.25");
  slider.setAttribute("value", "48");

$(slider_div).append(slider);
$(clone.parent()).append(slider_div);

$("#slide" + count).on('change', function() {

  var value = $(this).val();

$(clone).width(value);
$(clone).height(value);


});

} 

  else {

  oddClick = true;
  console.log("even");
  console.log($(red_x_div).parent().attr("id"));
  console.log($(clone.parent()).attr("id"));
  console.log($(red_x_div).parent().attr("id") == $(clone.parent()).attr("id"));

  if ($(red_x_div).parent().attr("id") == $(clone.parent()).attr("id")) {
    
    $(red_x_div).remove();

  }

  if ($(slider_div).parent().attr("id") == $(clone.parent()).attr("id")) {

      $(slider_div).remove();

  }

}

});

  $(clone).mousedown(startRotate);
  
});

});

//This bit of JS here will ensure that when the website opens, it is already on the Instructions tab. Without this, all the information
//from all the tabs (skin tone, nail shape, color, nail art, etc.) will be present and visible on the screen when the site loads and it will
//appear as an overflow. Note for programmers: DO NOT DELETE THIS SNIPPET OF JS.

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("defaultOpenOne").click();
 });

 var nailPolish = document.getElementsByClassName("nail")

 for (var i = 0; i < nailPolish.length; i++) {
     nailPolish[i].addEventListener('click', pickerClicker);
 }

 function pickerClicker(e) {
     var pickerId = (this.id + "Picker");
     document.getElementById(pickerId).focus();
     document.getElementById(pickerId).click();
 }

 document.addEventListener("input", changeColor)

 function changeColor (e) {

 var name = e.target.name
 var color = document.getElementsByName(name)[0].value
 console.log({color})


 var elIdTwo = name.replace('input','').replace('Color','')

 console.log({elIdTwo})

 document.getElementById(elIdTwo).style.setProperty("--fill-color", color)
 }


 $('#nailDefault').on("click", function(){
    $('#default').css({display: "block"});
    $('#short').css({display: "none"});
    $('#long_rounded').css({display: "none"});
    $('#square').css({display: "none"});
    $('#mountain_peak').css({display: "none"});
    $('#almond').css({display: "none"});
    $('#pointed').css({display: "none"});
    $('#arrow').css({display: "none"});
    $('#trapezoid').css({display: "none"});
});
$('#nailNatural').on("click", function(){
    $('#default').css({display: "none"});
    $('#short').css({display: "block"});
    $('#long_rounded').css({display: "none"});
    $('#square').css({display: "none"});
    $('#mountain_peak').css({display: "none"});
    $('#almond').css({display: "none"});
    $('#pointed').css({display: "none"});
    $('#arrow').css({display: "none"});
    $('#trapezoid').css({display: "none"});
});
$('#nailLongRounded').on("click", function(){
    $('#default').css({display: "none"});
    $('#short').css({display: "none"});
    $('#long_rounded').css({display: "block"});
    $('#square').css({display: "none"});
    $('#mountain_peak').css({display: "none"});
    $('#almond').css({display: "none"});
    $('#pointed').css({display: "none"});
    $('#arrow').css({display: "none"});
    $('#trapezoid').css({display: "none"});
});
$('#nailSquare').on("click", function(){
    $('#default').css({display: "none"});
    $('#short').css({display: "none"});
    $('#long_rounded').css({display: "none"});
    $('#square').css({display: "block"});
    $('#mountain_peak').css({display: "none"});
    $('#almond').css({display: "none"});
    $('#pointed').css({display: "none"});
    $('#arrow').css({display: "none"});
    $('#trapezoid').css({display: "none"});
});
$('#nailMountainPeak').on("click", function(){
    $('#default').css({display: "none"});
    $('#short').css({display: "none"});
    $('#long_rounded').css({display: "none"});
    $('#square').css({display: "none"});
    $('#mountain_peak').css({display: "block"});
    $('#almond').css({display: "none"});
    $('#pointed').css({display: "none"});
    $('#arrow').css({display: "none"});
    $('#trapezoid').css({display: "none"});
});
$('#nailAlmond').on("click", function(){
    $('#default').css({display: "none"});
    $('#short').css({display: "none"});
    $('#long_rounded').css({display: "none"});
    $('#square').css({display: "none"});
    $('#mountain_peak').css({display: "none"});
    $('#almond').css({display: "block"});
    $('#pointed').css({display: "none"});
    $('#arrow').css({display: "none"});
    $('#trapezoid').css({display: "none"});
});
$('#nailPointed').on("click", function(){
    $('#default').css({display: "none"});
    $('#short').css({display: "none"});
    $('#long_rounded').css({display: "none"});
    $('#square').css({display: "none"});
    $('#mountain_peak').css({display: "none"});
    $('#almond').css({display: "none"});
    $('#pointed').css({display: "block"});
    $('#arrow').css({display: "none"});
    $('#trapezoid').css({display: "none"});
});
$('#nailArrow').on("click", function(){
    $('#default').css({display: "none"});
    $('#short').css({display: "none"});
    $('#long_rounded').css({display: "none"});
    $('#square').css({display: "none"});
    $('#mountain_peak').css({display: "none"});
    $('#almond').css({display: "none"});
    $('#pointed').css({display: "none"});
    $('#arrow').css({display: "block"});
    $('#trapezoid').css({display: "none"});
});
$('#nailTrapezoid').on("click", function(){
    $('#default').css({display: "none"});
    $('#short').css({display: "none"});
    $('#long_rounded').css({display: "none"});
    $('#square').css({display: "none"});
    $('#mountain_peak').css({display: "none"});
    $('#almond').css({display: "none"});
    $('#pointed').css({display: "none"});
    $('#arrow').css({display: "none"});
    $('#trapezoid').css({display: "block"});
});

// For the color picker to change skin tones

document.addEventListener("input", changeShapeColor)
    function changeShapeColor (e) {

        var inputName = e.target.name
        var newColor = document.getElementsByName(inputName)[0].value
        console.log({newColor})

        var elId = inputName.replace('input','').replace('Color','')
        console.log({elId})
        document.getElementById(elId).style.setProperty("--fill-color", newColor)

    }

    //The following script has been commented out because, due to a bug, it cannot work at the same time as the color picker.
    //If anyone can resolve this issue, it would be great but for now I'm using the color picker to maximize flexibility in choosing a skin tone.-->
        // $('#S1').on("click", function() {
        // $('#Background').css({ fill: "#fff3ea" });
        // });
        // $('#S2').on("click", function() {
        // 	$('#Background').css({ fill: "#ffeadb" });
        // });
        // $('#S3').on("click", function() {
        // 	$('#Background').css({ fill: "#ffd9be" });
        // });
        // $('#S4').on("click", function() {
        // 	$('#Background').css({ fill: "#f5bf98" });
        // });
        // $('#S5').on("click", function() {
        // 	$('#Background').css({ fill: "#e6a06f" });
        // });
        // $('#S6').on("click", function() {
        // 	$('#Background').css({ fill: "#cc8959" });
        // });
        // $('#S7').on("click", function() {
        // 	$('#Background').css({ fill: "#a15b33" });
        // });
        // $('#S8').on("click", function() {
        // 	$('#Background').css({ fill: "#834011" });
        // });
        // $('#S9').on("click", function() {
        // 	$('#Background').css({ fill: "#5C2B0C" });
        // });
        // $('#S10').on("click", function() {
        // 	$('#Background').css({ fill: "#3D1A09" });
        // });	

        //This bit of JS here will ensure that when the website opens, it is already on the Instructions tab. Without this, all the information
		//from all the tabs (skin tone, nail shape, color, nail art, etc.) will be present and visible on the screen when the site loads and it will
		//appear as an overflow. Note for programmers: DO NOT DELETE THIS SNIPPET OF JS.

        document.addEventListener("DOMContentLoaded", function(event) { 
            document.getElementById("defaultOpen").click();
         });