describe("diferentes selectores ",() =>{

    //Open Cypress - set "only"
    it("selector por ID", ()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("Carlos") //cuando el selector es por ID se le pone el #
        cy.get("#userEmail").should("be.visible").type("ejemplo@email.com")

    })

    it("selector por atributo ", ()=>{
        cy.visit("https://demoqa.com/text-box")
    })
}) //cierre de describe