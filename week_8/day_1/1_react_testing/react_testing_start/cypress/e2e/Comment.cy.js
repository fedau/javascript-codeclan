
describe('Comment', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')

    })

    it('Should have pre-poulated comments', () => {
        const commentListItems = cy.get('#comment-list > li ')
        commentListItems.should('have.length', 2)
    })

    it('Should be able to add a comment', () => {
        cy.get('#name-input').type("milla")
        cy.get('#comment-input').type("rector ")
        cy.get('#comment-form').submit()
        const commentListItems = cy.get('#comment-list > li ')
        commentListItems.should('have.length', 3)
    })
})