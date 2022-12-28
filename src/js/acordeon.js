window.addEventListener('load', function(){

	let faq = document.querySelector('.faq1');

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('ask1')){
			toogleItem(e.target);
		}
        toogleItem
	});


	function toogleItem(ask1){
		let answer = ask1.parentNode.querySelector('.answer1');

		toogleItemAnim(
			answer, 
			550,
			[
				{ opacity: 0, height: 0 },
				{ opacity: 1, height: function(el){return el.clientHeight + 'px'} }
			], 
			[
				{ opacity: 1, height: function(el){return el.clientHeight + 'px'} },
				{ opacity: 0, height: 0 }
			]
		);

	
	}
});


// (function () {
// 	$(document).click(function(event) {
// 	    if ($(event.target).closest(".item1").length) return;
// 	    $(".item1.active").removeClass("active");
// 	});

// 	$(".item1").click(function() {

// 	    $(this).siblings().removeClass("active");
// 	    $(this).toggleClass("active");
// 	});
// })();


function toogleItemAnim(el, rate, keyframesToShow, keyframesToHide = null){
	if(el.jsAnim){
		return;
	}

	el.jsAnim = true;

	if(keyframesToHide === null){
		keyframesToHide = [...keyframesToShow].reverse();
	}

	if(el.classList.contains('open')){
		let animation = el.animate(
			compileKeyframes(el, keyframesToHide),
			{ duration: rate }
		);
		
		animation.addEventListener('finish', function(){
			el.classList.remove('open');
			el.jsAnim = false;
		});
	}
	else{
		el.classList.add('open');

		let animation = el.animate(
			compileKeyframes(el, keyframesToShow),
			{ duration: rate }
		);

		animation.addEventListener('finish', function(){
			el.jsAnim = false;
		});
	}
}

function compileKeyframes(el , keyframes){
	let res = [];

	for(let i = 0; i < keyframes.length; i++){
		let frame = keyframes[i];
		let realFrame = {};

		for(let name in frame){
			realFrame[name] = typeof frame[name] === 'function' ? 
									frame[name](el) : 
									frame[name];
		}

		res.push(realFrame);
	}
	
	return res;
}