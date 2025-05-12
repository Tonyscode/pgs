
describe('Privacy Policy', () => {
    
  it('Prague - Alanya', () => {
          cy.visit('https://www.flypgs.com/en')
          let arr:  number[] = [];
          cy.get('.js-languages-submit').click()
          
          cy.get('#fromWhere').type("Prag")
          cy.get('[data-port-code="PRG"]').click()
          cy.get('#toWhere').type("Alanya")
          cy.get('[data-port-code="GZP"]').eq(1).click()
          cy.get('.DateInput__datepicker-input-container').should('be.visible').wait(5000)
          cy.get('.dayContainer').eq(1).find('.DateInput__day-price').each((el)=>            
          {
              let cost = parseInt(el.text().replace('$', '').trim())
              //console.log("cost to num", cost)
              arr.push(cost)
          }).then(()=>{
              
              console.log("arr", arr)//.slice(1,-3))
              console.log("arr", Math.min(...arr))
          })

          
  })
    
  
  it.only('Alanya -Prague', () => {
      cy.visit('https://www.flypgs.com/en')
      let arr:  number[] = [];
      cy.get('.js-languages-submit').click()
      
      cy.get('#fromWhere').type("Alanya").wait(1400)
      cy.get('[data-port-code="GZP"]').click()
      cy.get('#toWhere').type("Prag").wait(1000)
      cy.get('[data-port-code="PRG"]').eq(1).click()
      cy.get('.flatpickr-next-month').eq(0).click()

      cy.get('.DateInput__datepicker-input-container').should('be.visible').wait(5000)

      cy.get('.dayContainer').eq(1).find('.DateInput__day-price').each((el)=>            
      {
          let cost = parseInt(el.text().replace('$', '').trim())
          //console.log("cost to num", cost)
          arr.push(cost)
      }).then(()=>{
          
          console.log("arr", arr)//.slice(1,-3))
          console.log("arr", Math.min(...arr))
      })

    
  }) 
})