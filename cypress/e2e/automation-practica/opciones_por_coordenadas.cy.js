describe("click en opciones por coordenadas ",() =>{

    //Open Cypress - set "only"
    it("opciones por coordenadas x e y", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.wait(1500)

        //haciendo click sobre coordenada de titulo de dashboard arriba.

        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible").click(50, 50)


        


    })
}) //cierre de describe