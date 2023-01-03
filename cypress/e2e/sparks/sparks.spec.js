
import GooglePage from '../../support/page-objects/googlePage'
import SparksPage from '../../support/page-objects/sparksPage'
const googlePage = new GooglePage()
const sparksPage = new SparksPage()
const fixture = 'sparks/sparks'
describe(
	'User should be able to find and visit Spark networks first on google',
	{ tags: ['admin-tool'] },
	function () {
		beforeEach(() => {
			// not really neccesary here because the texts are only used in one place, but
			// generally I refrain from using texts in test so that they can be updated easily if they change
			cy.fixture(fixture).then(function (data){
				this.data = data
			})
		})

		it('Spark Networks homepage comes first', function () {
			googlePage.search(this.data.searchWord)
			cy.get(googlePage.getSearchItem()).first().contains(this.data.searchHeader).should('exist')
			cy.get(googlePage.getSearchItem()).first().find(googlePage.getLink()).invoke('attr','href').should('eq',sparksPage.getRoute())
		});

		it('The search item should lead to the correct page', function () {
			cy.visit(sparksPage.getRoute())
			cy.get(sparksPage.getLogo()).find('a').invoke('attr','title').should('eq',this.data.logoAlt)
		});
	}
);
