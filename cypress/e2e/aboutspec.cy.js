describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5500/HTML/index.html')
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false )
  })
})

describe('Goblin rotation', () => {
  it('should rotate goblin img after clicking on the btn Compare', () => {
    cy.visit('http://localhost:5500/HTML/index.html')
    cy.get('#rotate-button').click() 
    cy.get('#hero-img') 
      .should('satisfy', ($el) => {
      const classList = Array.from($el[0].classList); 
      return classList.includes('rotated') 
    })
  })
})
