// Reminder

// All of the cy.scrollTo is just to make the view at the top

describe('Initial Home page', () => {

    it('It will render the homepage', () => {
      cy.visit('http://localhost:3000/')
    })

    describe('Click through a country', () => {
        it('Click the Philippines country and redirect to details page then go back', () => {
            cy.scrollTo(0, 0)
            cy.findByTestId('countryPhilippines').click()
            cy.findByTestId('bckbtn').click()
            cy.scrollTo(0, 0)
        })
    })

    describe('Click through a country again', () => {
        it('Click the United Kingdom country and redirect to details page then go back', () => {
            cy.scrollTo(0, 0)
            cy.findByTestId('countryUnited Kingdom').click()
            cy.findByTestId('bckbtn').click()
            cy.scrollTo(0, 0)
        })
    })

    describe('Type into searchbox', () => {
        it('Search for a country then click and go back', () => {
            cy.scrollTo(0, 0)
            cy.findByRole('textbox').type('Singapore')
            cy.findByTestId('countrySingapore').click()
            cy.findByTestId('bckbtn').click()
            cy.scrollTo(0, 0)
        })
    })

    describe('Toggle Theme mode', () => {
        it('Will click the dark mode text to toggle theme 3X', () => {
            cy.scrollTo(0, 0)
            cy.findByTestId('toggleTheme').click().click().click()
            cy.scrollTo(0, 0)
        })
    })
    
    describe('Search for not existing country', () => {
        it('Search again for not valid country and render "No countries found" and clear searchbox', () => {
            cy.scrollTo(0, 0)
            cy.findByRole('textbox').type('asdfasfasdsadf')
            cy.findByRole('heading', { name: /no countries found/i }).contains('No Countries found')
            cy.findByRole('textbox').clear()
            cy.scrollTo(0, 0)
        })
    })

    describe('Click through a country again and clicking border countries', () => {
        it('Click the Sweden country and click the 1st border, then 2nd border of the country then triple back', () => {
            cy.scrollTo(0, 0)
            cy.findByTestId('countrySweden').click()
            cy.findByTestId('borderNorway').click()
            cy.findByTestId('borderRussia').click()
            cy.findByTestId('bckbtn').click().click().click()
            cy.scrollTo(0, 0)
        })
    })

    describe('Filter', () => {
        it('Click through all the filter options', () => {
            cy.scrollTo(0, 0)
            cy.findByRole('combobox').select('Africa').select('Americas').
            select('Oceania').select('Europe').select('Asia')
            cy.scrollTo(0, 0)
        })
    })

    describe('Refresh Page', () => {
        it('Click refresh', () => {
            cy.reload()
        })
    })

})