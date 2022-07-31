import GooglePage from '../../support/page-objects/googlePage'
const googlePage = new GooglePage()
const fixture = 'funny-cat-memes/funny_cat_memes'
describe(
	'User should be able to take a screen shot of funny cat memes ',
	{ tags: ['admin-tool'] },
	function () {
		this.beforeEach(() => {
			// not really neccesary here because the texts are only used in one place, but
			// generally I refrain from using texts in test so that they can be updated easily if they change
			cy.fixture(fixture).then(function (data){
				this.data = data
			})
		})

		it('Screenshot funny cat memes', function () {
            googlePage.search(this.data.searchWord)
            cy.screenshot()
		});
	}
);