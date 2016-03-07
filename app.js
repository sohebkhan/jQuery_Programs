//This array should come from the server, or any other way to get a list of images
var gallery=["images/img1.png","images/img2.png","images/img3.png","images/img4.png"];
var total_in_gallery=gallery.length - 1;

//Represents the position in the array
var gallery_nbr=0;

// when the DOM is ready
$(function() {
  
  //Load the first image of the gallery
  $("#image").load(function() {
    $(this).hide();
    $(this).fadeIn();
  }).attr('src',gallery[gallery_nbr]);
  
  //Defines what is happening when clicking on the previous button
  $("#previous").click(displayPrevious);
  
  //Defines what is happening when clicking on the next button        
  $("#next").click(displayNext);
  
  //Slides up the controls when the mouse is over the #logo div
  //Slides down the controls when the mouse is outside the #logo div
  $("#logo").hover(function() {
    $("#controls").animate({
        bottom: "0px"
    }, 500 );
  },
  function() {
    $("#controls").animate({
        bottom: "-30px"
    }, 500 );
  });
  
});

//Load the image 
function loadImage(image) {
  $("#image").fadeOut('slow', function(){
    $("#image").load(function() {
      $(this).hide();
      $(this).fadeIn();
    }).attr('src',image);
  });
}

//To calculate the index in the gallery for the previous image
function previousImage() {
  gallery_nbr--;
  if(gallery_nbr < 0)
    gallery_nbr=total_in_gallery;
}

//To calculate the index in the gallery for the next image
function nextImage() {
  gallery_nbr++;
  if(gallery_nbr > total_in_gallery)
    gallery_nbr=0;
};

//Display next image
function displayNext(){
  nextImage();
  loadImage(gallery[gallery_nbr]);
}

//Display previous image
function displayPrevious(){
  previousImage();
  loadImage(gallery[gallery_nbr]);
}
