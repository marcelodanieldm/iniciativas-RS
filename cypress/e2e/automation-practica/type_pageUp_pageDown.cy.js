//const cypress = require("cypress")
//const { it } = require("mocha")

//para que funcionen los comandos.
//< reference types="Cypress" />

describe("ejemplos pageUp y pageDown ",() =>{

    //Open Cypress - set "only"
    it("Type pageUp", ()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').type('{pageup}')
        cy.wait(2000)

    })

     //Open Cypress - set "only"
     it("Type pagedown ", ()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').type('{pagedown}')
        cy.wait(2000)

    })
}) //cierre de describe