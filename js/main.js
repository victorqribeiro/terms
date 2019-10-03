const go = async function(){
	
	const term = document.querySelector('#term').value;

	const terms = await getRelatedTerms(term);

	document.querySelector('#result').innerHTML = terms.join(', ');

}

const init = function(){

	const btn = document.querySelector('#btn');
	
	btn.addEventListener('click', go);
	
	document.addEventListener('keydown', e => {
	
		if( e.keyCode == 13 )
		
			go();
			
	});
	
}

window.onload = () => init();
