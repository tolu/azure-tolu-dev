// Public NRK TV api
import cache from './cache';

let base = 'http://psapi.nrk.no/';
let url = {
	media: `${base}mediaelement/` 
}

let recommendedIds = ["KMTE20000114", "KMTE40004714", "KOID26008615", "MUHH44000115", "DMPV73001915", "KOID26001515", "KOIF26006715", "KMTE60006715", "KOIF22003314", "MSPO30170215", "KOID26000214", "DMPV73030315", "KOIF25004315", "MDDP11001615", "KOID24005315", "MUHU62000115", "KOID24003115", "MYNR51000115", "KOID25005115", "KOID26001415"];

let getJson = function(url){
	return fetch(url).then(function(response){
		return response.json();
	}).then(function(json){
		return json;
	})
}

class Api {
	recommended(){
		
		let cachedHit = cache.get('nrkRec');
		if(cachedHit) {
			return Promise.resolve(cachedHit);
		}
		return new Promise(function(resolve) {
			let list = [];
			let mediaFun = this.media;
			recommendedIds.forEach(function(id){
				mediaFun(id).then(function(data){
					list.push(data);
					if(list.length === recommendedIds.length){
						cache.set('nrkRec', list);
						resolve(list);
					}
				});
			});
		});
	}
	media(id){
		return getJson(url.media + id);
	}
}

export default new Api();