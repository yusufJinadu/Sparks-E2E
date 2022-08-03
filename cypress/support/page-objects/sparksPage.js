export default class  SparksPage {
	constructor() {
        this._route = 'https://www.spark.net/'
        this._logo = '.region-header-logo'
	}

    getLogo(){
        return this._logo
    }

    getRoute(){
        return this._route
    }
}