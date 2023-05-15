import { contains } from "cypress/types/jquery"

describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  
    context("Hero section", () => {
        it("allows users to subscribe to the email list", () => {
            cy.getByData("email-input").type("tom@aol.com")
            cy.getByData("submit-button").click()
            cy.getByData("success-message").should("exist").contains("tom@aol.com")
    
        })
    
        it("does NOT allow users to subscribe to the email list", () => {
            cy.getByData("email-input").type("tom")
            cy.getByData("submit-button").click()
            cy.getByData("success-message").should("not.exist")
        })
    
        it("does NOT allow users to subscribe with already subscribed emails", () => {
            cy.getByData("email-input").type("john@example.com")
            cy.getByData("submit-button").click()
            cy.getByData("server-error-message").should("exist").contains('Please use a different email address.')
        })
    })

    context("Courses section", () => {
        it.only("Course: Testing your first Next.js Application", () => {
            cy.getByData("course-0").find("a").eq(3).contains("Get started").click()
            cy.location("pathname").should("equal", "/testing-your-first-application")
        })
   
        it.only("Course: Testing Foundations", () => {
            cy.getByData("course-1").find("a").eq(3).contains("Get started").click()
            cy.location("pathname").should("equal", "/testing-foundations")
        })

        it.only("Course: Cypress Fundamentals", () => {
            cy.getByData("course-2").find("a").eq(3).contains("Get started").click()
            cy.location("pathname").should("equal", "/cypress-fundamentals")
        })
    })
  })
  