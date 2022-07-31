export default class  SparksPage {
    // generally not a good idea to automate 3rd party pages because anything can change
	constructor() {
        this._logo = '.region-header-logo'
	}

    getLogo(){
        return this._logo
    }
}