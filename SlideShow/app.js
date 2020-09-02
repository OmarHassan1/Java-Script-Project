var i = 0;
let slidesImage = [
  "img/item-1.jpeg",
  "img/item-2.jpeg",
  "img/item-3.jpeg",
  "img/item-4.jpeg",
];

var slideShow = function() {
  document.SlideShow.src = slidesImage[i];
  if (i < slidesImage.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("slideShow()", 2000);
};
slideShow();
