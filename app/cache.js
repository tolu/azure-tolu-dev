class LocalCache {
	get(key){
		let value = localStorage.getItem(key);
		if(value){
			return JSON.parse(value);
		} 
		return null;
	}
	set(key, value){
		localStorage.setItem(key, JSON.stringify(value));
	}
}

export default new LocalCache();