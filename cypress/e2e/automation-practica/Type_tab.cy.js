//const cypress = require("cypress")
//const { it } = require("mocha")

//1. Se necesita instalar cypress plugin tab desde npm
//npm install -D cypress-plugin-tab

//2do. Francia.

//3ro. Le mando el require del plugin:
//ya no es necesario. Porque ahora es por comando. 

//para que funcionen los comandos.
//< reference types="Cypress" />

describe("practicando con funcion tab ",() =>{

    //Open Cypress - set "only"
    it("type con tab ", ()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)

        cy.get('/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[1]/div[2]/input').type('Juan Cito', {tab})


    })
}) //cierre de describe