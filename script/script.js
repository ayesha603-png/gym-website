var menu = document.getElementById("bar");
var item = document.getElementById("item");

item.style.right = '-300px';
menu.onclick = function(){
if (item.style.right == '-300px'){
	item.style.right = '0';
}
else{
	item.style.right = '-300px';
}	
}
// Close dropdowns when clicking outside
$(document).on("click", function(event) {
    if (!$(event.target).closest(".dropdown").length) {
        $(".dropdown-content").hide();
    }
});
