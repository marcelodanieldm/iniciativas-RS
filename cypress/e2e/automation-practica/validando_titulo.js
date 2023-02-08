< reference types="Cypress" />

describe(" seccion 1 - validando el titulo",() =>{

    //Open Cypress - set "only"
    it(" test validar el titulo", ()=>{
        cy.visit("https://demoqa.com/text-box ")
        cy.title().should('eq', 'ToolsQA')
        cy.log("La funcion title funciona ok")
    })
}) //cierre de describe

