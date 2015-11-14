let idx = 1;
class Singleton {
	log() {
		console.log('Singleton: currentId => ' + (idx++));
	}
}

export default new Singleton();