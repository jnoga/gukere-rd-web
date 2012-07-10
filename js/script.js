/* Author: Gukere

*/
$(document).ready(function() {
   // do stuff when DOM is ready
   $(".section-link").click(function(e) {
   		goToByScroll($(this).prop('id') + '-section');
	});
});

function goToByScroll(id){
	$('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
};







