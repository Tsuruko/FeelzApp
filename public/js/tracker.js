$(".version_a").click(function(){
	woopra.track("MenuView_A");
})

$(".version_b").click(function(){
	woopra.track("MenuView_B");
})

$(".version_a_element").click(function(){
	woopra.track("MenuA_Event");
})

$(".version_b_element").click(function(){
	woopra.track("MenuB_Event");
})

