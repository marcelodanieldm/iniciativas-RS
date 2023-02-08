//< reference types="Cypress" />

describe("Funciones para type",() =>{

    //Open Cypress - set "only"
    it(" Type y enter", ()=>{
        cy.visit("hhttps://www.mercadolibre.com.ar/")
        cy.title().should('eq', 'Mercado Libre Argentina - Envíos Gratis en el día')
        cy.wait(1500)

        cy.get("body > header > div > form").type('notebook {enter}')


    })
}) //cierre de describe

