import { INITIAL_ARRAY } from "../../src/constants/numbers"

describe("HomePage", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  describe("Search number", () => {
    it("should allow inputting numbers", () => {
      cy.get('[data-test-id="search-input"]')
        .type("5")
        .should("have.value", "5")
    })

    it("should find the number and highlight it when searching", () => {
      cy.get('[data-test-id="search-input"]').type("5")
      cy.get('[data-test-id="search-button"]').click()
      cy.get('[data-test-id="result-card"]').should(
        "have.class",
        "bg-green-400"
      )
      cy.get('[data-test-id="item-3"]').should("have.class", "bg-green-400")
    })

    it("should find the number and show your index", () => {
      cy.get('[data-test-id="search-input"]').type("5")
      cy.get('[data-test-id="search-button"]').click()
      cy.get('[data-test-id="result-card"]').should(
        "have.class",
        "bg-green-400"
      )
      cy.get('[data-test-id="result-value"]').should("contain", "3")
    })

    it("should show a different color if the number is not found", () => {
      cy.get('[data-test-id="search-input"]').type("8")
      cy.get('[data-test-id="search-button"]').click()
      cy.get('[data-test-id="result-card"]').should("have.class", "bg-red-400")
    })

    it("should show -1 if the number is not found", () => {
      cy.get('[data-test-id="search-input"]').type("8")
      cy.get('[data-test-id="search-button"]').click()
      cy.get('[data-test-id="result-value"]').should("contain", "-1")
    })

    it("should display error message when no number is entered", () => {
      cy.get('[data-test-id="search-input"]').clear()
      cy.get('[data-test-id="search-button"]').click()
      cy.contains("Number is required!").should("be.visible")
    })
  })

  describe("Add number", () => {
    it("should add a valid number when button is clicked", () => {
      cy.get('[data-test-id="add-input"]').type("10")
      cy.get('[data-test-id="add-button"]').click()
      cy.get('[data-test-id="item-5"]').should("contain", "10")
    })

    it("should add a valid number when Enter key is pressed", () => {
      cy.get('[data-test-id="add-input"]').type("20{enter}")
      cy.get('[data-test-id="item-6"]').should("contain", "20")
    })

    it("should not add an invalid number", () => {
      cy.get('[data-test-id="add-input"]').then(($input) => {
        const inputType = $input.attr("type")
        expect(inputType).to.equal("number")
        cy.wrap($input).type("abc")
        cy.wrap($input).should("have.value", "")
      })
    })

    it("should not add duplicate numbers", () => {
      const duplicateNumbers = [0, 3, 5]

      const addNumber = (number: number) => {
        cy.get('[data-test-id="add-input"]').clear().type(number.toString())
        cy.get('[data-test-id="add-button"]').click()
      }

      duplicateNumbers.forEach((number) => {
        addNumber(number)
      })

      cy.get('[data-test-id^="item-"]').should(
        "have.length",
        INITIAL_ARRAY.length
      )
    })

    it("should clear input field after adding a number", () => {
      cy.get('[data-test-id="add-input"]').type("40")
      cy.get('[data-test-id="add-button"]').click()
      cy.get('[data-test-id="add-input"]').should("have.value", "")
    })
  })
})
