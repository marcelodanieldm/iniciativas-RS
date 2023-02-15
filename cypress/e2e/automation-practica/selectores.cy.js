describe("diferentes selectores ",() =>{

    //Open Cypress - set "only"
    it("selector por ID", ()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("Carlos") //cuando el selector es por ID se le pone el #
        cy.get("#userEmail").should("be.visible").type("ejemplo@email.com")

    })

    it("selector por atributo", ()=>{
        cy.visit("https://demoqa.com/text-box")
    })

    it("selector por contain", ()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get(".custom-control-label").contains("Female").click()
        wait(1000)
        cy.get(".custom-control-label").contains("Other").click()

        it("selector por copy selector", ()=>{
            cy.visit("https://demoqa.com/automation-practice-form")
            cy.title().should('eq', 'ToolsQA')
            cy.wait(1000)
    
            cy.get("#userNumber").should("be.visible").type("5491140404040")
            wait(1000)
             
    })
}) //cierre de describe