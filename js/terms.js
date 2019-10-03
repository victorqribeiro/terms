const getRelatedTerms = async function(term){
	
	if( !term ) return null;
		
	const conf = {method: "GET"};
	
	let request, data;
	
	request = await fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch="+term+"&srlimit=1&format=json", conf);
	
	data = await request.json();
	
	const pageid = data.query.search[0].pageid;
	
	request = await fetch("https://en.wikipedia.org/w/api.php?origin=*&action=parse&prop=sections&format=json&pageid="+pageid, conf);
	
	data = await request.json();
	
	sections = data.parse.sections;

	let index = -1;
	
	for(let i = 0; i < sections.length; i++){
	
		if( sections[i].anchor.match(/See\_also/) ){
		
			index = sections[i].index;
			
			break;
			
		}
		
	}

	if( index < 0 ) return null;
	
	request = await fetch("https://en.wikipedia.org/w/api.php?origin=*&action=parse&prop=links&format=json&pageid="+pageid+"&section="+index, conf);
	
	data = await request.json();
	
	terms = data.parse.links.map( i => i["*"].replace(/.*\:/, "") );

	return terms;
}
