export default class  GooglePage {
    // generally not a good idea to automate 3rd party pages because anything can change
	constructor() {
		this._route = 'https://www.google.com';
        this._acceptButton = 'button#W0wltc'
        this._searchBar = 'input.gLFyf.gsfi'
        this.searchItem = '.BYM4Nd'
        this.link = '.yuRUbf a'
	}

	getRoute() {
		return this._route
	}

    getAcceptButton(){
        return this._acceptButton
    }

    getSearchBar(){
        return this._searchBar 
    }

    getSearchItem(){
        return this.searchItem 
    }

    getLink(){
        return this.link 
    }

    search(keyword){
        cy.visit(this.getRoute())
		cy.get(this.getAcceptButton()).click() // ussually if it was our page, i would find a way to go to the search route directly and avoid the prompt
		cy.get(this.getSearchBar()).type(`${keyword}{enter}`)
    }
}