window.addEventListener('load', function(){
	let accordion = document.querySelector('.help__acardion');
	accordion.addEventListener('click', function(event) {
		let questions = document.querySelectorAll('.acordeon__item');
		let targetQuestion = event.target;
		if(targetQuestion.classList.contains('acordeon__item')) {
			targetQuestion.classList.toggle('acordeon__item_active');
			if(targetQuestion.classList.contains('acordeon__item_active')) {
				targetQuestion.nextSibling.style.height = targetQuestion.nextSibling.firstChild.offsetHeight + 'px';
				questions.forEach(function(question){
					console.log(question);
					console.log(targetQuestion);
					if (question.classList.contains('acordeon__item_active') && question != targetQuestion) {
						question.nextSibling.style.height = '0px';
						question.classList.toggle('acordeon__item_active');
					}
				})
			} else {
				targetQuestion.nextSibling.style.height = '0px';
			}
			
		}
	});
});