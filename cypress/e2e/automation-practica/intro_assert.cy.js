//para que funcionen los comandos.
//< reference types="Cypress" />

describe("intro a asserts ",() =>{

    //Open Cypress - set "only"
    it(" probando asserts por primera vez", ()=>{
        cy.visit("https://demoqa.com/automation-practice-form")

        cy.wait(1000)

        cy.get('#firstName').should("be.visible").type("Juan")
        cy.get('#lastName').should("be.visible").type("Cito") //chequeando si el campo es visible.
        cy.get('#userEmail').should("be.visible").should("be.enable").type("juan@cito.com") //chequeando si el campo está visible y habilitado


    })
}) //cierre de describe