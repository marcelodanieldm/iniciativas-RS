//para que funcionen los comandos.
//< reference types="Cypress" />

describe("opciones de click 1",() =>{

    //Open Cypress - set "only"
    it("click simple ", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(1000)

       // cy.get(".oxd-button").should("be.visible").click()
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
       cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
       cy.get('.oxd-button').should("be.visible").click()
       cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').should("be.visible").click()
       

           
    })
}) //cierre de describe