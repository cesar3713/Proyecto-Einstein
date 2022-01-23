var fixedElem1 = document.getElementById('fixedColNav');
var fixedElem2 = document.getElementById('fixedPagNav');

var scrollbar = Scrollbar.init(

  document.querySelector('html'),
);

scrollbar.addListener(function(status) {
   var offset = status.offset;
  
  fixedColNav.style.top = offset.y + 'px';
  fixedColNav.style.left = offset.x + 'px';

  fixedPagNav.style.top = offset.y + 'px';
  fixedPagNav.style.left = offset.x + 'px';
});

  