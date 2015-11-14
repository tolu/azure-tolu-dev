import singleton from './singleton'; 
import api from './api';

//console.log('regular normal log');

function renderRecommended(list){
	console.log('i should render this list', list);
}

export function render() {
	api.recommended().then(function(list){
		renderRecommended(list);
	});
}

export default function(){
	//console.log('default export fun log');
	//singleton.log();
	
	// get some data
	return api.recommended();
};