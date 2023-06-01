import { LoginPage } from "./pages/login"
const loginPage = new LoginPage()

describe("Page obj example", () => {
it ("Login page", () =>{
//     // Visit our website
//     cy.visit("https://www.edu.goit.global/account/login");
// //Check our title
//     cy.get(".css-10stgr7 > .css-c1vj7d").should('be.visible');
//     cy.get(".css-10stgr7 > .css-c1vj7d").should("have.text", "Login");
// //Check our inputs
// cy.get("#user_email").should('be.visible');
// cy.get("#user_password").should('be.visible');
// // Check our button
// cy.contains("Log in").should('be.visible');

// // Check our pass
// cy.get("[href='/account/password/restore']").should('be.visible');
// cy.get("[href='/account/password/restore']").should('have.text',"I can't remember the password");

loginPage.navigateToPage();
loginPage.validateInputs();
loginPage.validateLoginTitle();
loginPage.validateLoginButton();
loginPage.validatePasswordLink();
})
})