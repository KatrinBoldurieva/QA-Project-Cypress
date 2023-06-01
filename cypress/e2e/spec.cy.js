describe('Наш перший блок тестів', () => {
    // it('Тест для відкривання сторінки як покупець', () => {
       //cy.visit('https://www.edu.goit.global/account/login')
   
       // cy.get('#user_email').type("user888@gmail.com")
   
       // cy.get("#user_password").type("1234567890");
   
       // cy.get("[type='submit']").click();
   
       //cy.signIn("user888@gmail.com","1234567890")
   
       //cy.get("[id='go-to-the-course-homepage-widget']").scrollIntoView().should("be.visible")
     })
     //it('Тест для відкривання сторінки як менеджер', () => {
       //cy.visit('https://www.edu.goit.global/account/login')
   
       // cy.get('#user_email').type("nadia.tsomko.98gmail.com")
   
       // cy.get("#user_password").type("Nadia_Tsomko78");
   
       // cy.get("[type='submit']").click();
   
       //cy.signIn("nadia.tsomko.98gmail.com","Nadia_Tsomko78")
       //cy.get("[id='go-to-the-course-homepage-widget']").scrollIntoView().should("be.visible")
    // })
    // it('Тест для відкривання сторінки як адміністратор', () => {
      // cy.visit('https://www.edu.goit.global/account/login')
   
       // cy.get('#user_email').type("user888@gmail.com")
   
       // cy.get("#user_password").type("1234567890");
   
       // cy.get("[type='submit']").click();
   
       //cy.signIn("user888@gmail.com","1234567890")
   
       //cy.get("[id='go-to-the-course-homepage-widget']").scrollIntoView().should("be.visible")
    // })
   //   it('Тест для відкривання сторінки', () => {
   //     cy.visit('https://www.edu.goit.global/account/login')
   
   //     cy.get('#user_email').type("user888@gmail.com")
   
   //     cy.get("#user_password").type("1234567890");
   
   //     cy.get("[type='submit']").click();
   
   //     //cy.get("[id='go-to-the-course-homepage-widget']").scrollIntoView().should("be.visible")
   //   })
   // it('Перевірка властивостей кнопки', () => {
   //   cy.visit('https://www.edu.goit.global/account/login')
   
   //  cy.get('[type="submit"]').should("have.text", "Log in");
   
   //  cy.get('[type="submit"]').should("have.css","background-color", "rgb(255, 107, 10)");
   
   // })
   it('Тест для відкривання сторінки', () => {
     cy.visit('https://www.edu.goit.global/account/login')
   
      cy.get('#user_email').type("user888@gmail.com")
   
      cy.get("#user_password").type("1234567890");
      cy.get("[type='submit']").click();
   
      cy.get("[id='open-navigation-menu-mobile']").click();
   
      cy.contains("Log out").click();
   
     //cy.signIn("user888@gmail.com","1234567890")
   
     //cy.get("[id='go-to-the-course-homepage-widget']").scrollIntoView().should("be.visible")
   })
   //})
   it('Тест для відкривання сторінки', () => {
     cy.visit('https://www.edu.goit.global/account/login');
   
      cy.get('#user_email').type(" testowyqa@qa.team");
   
      cy.get("#user_password").type("QA!automation-1");
      cy.get("[type='submit']").click();
   
      cy.get("[id='open-navigation-menu-mobile']").click();
   
      cy.contains('Log out').click();
   
   
     //cy.signIn("user888@gmail.com","1234567890")
   
     //cy.get("[id='go-to-the-course-homepage-widget']").scrollIntoView().should("be.visible")
   //})
   })
   
   