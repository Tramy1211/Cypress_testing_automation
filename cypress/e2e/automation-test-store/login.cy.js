/// <reference types="cypress" />
import { testCases } from './Data_login.js'; 

describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("https://moji.vn/");
    cy.get('body').then(($body) => {
      if ($body.find('#popupHome').length) {
        cy.get('#popupHome .close > span').click();
      }
    });
    cy.get('.header-user > :nth-child(1) > a').click();
  });

  // Happy Case
  context('Valid Credentials', () => {
    it('TC01: Should login with valid credentials', () => {
      cy.get('body').then(($body) => {
        if ($body.find('#popupHome').length) {
          cy.get('#popupHome .close > span').click();
        }
      });
      const { email, password } = testCases[0];
      cy.get('#username').type(email);
      cy.get('#password').type(password);
      cy.get('#btnsignin').click();
      cy.url().should('eq', 'https://moji.vn/'); // default 4s
      //cy.url({ timeout: 10000 }).should('eq', 'https://moji.vn/'); 
      cy.log('Login successfully');
    });
  });

  // Negative cases
  context('Invalid Credentials', () => {
    it('TC02: Should fail with incorrect email and valid password', () => {
      cy.get('body').then(($body) => {
        if ($body.find('#popupHome').length) {
          cy.get('#popupHome .close > span').click();
        }
      });
      const { email, password } = testCases[1];
      cy.get('#username').type(email);
      cy.get('#password').type(password);
      cy.get('#btnsignin').click();
      //JavaScript Alerts: Pop-up, chặn tương tác, không thể tùy chỉnh, kiểm tra bằng cy.on('window:alert').
      cy.on('window:alert', (text) => {
        expect(text).to.equal('Tên đăng nhập hoặc mật khẩu không chính xác');
      });
      cy.log('Login failed');
    });

    it('TC03: Should fail with valid email and incorrect password', () => {
      cy.get('body').then(($body) => {
        if ($body.find('#popupHome').length) {
          cy.get('#popupHome .close > span').click();
        }
      });
      cy.get('body').then(($body) => {
        if ($body.find('#popupHome').length) {
          cy.get('#popupHome .close > span').click();
        }
      });
      const { email, password } = testCases[2];
      cy.get('#username').type(email);
      cy.get('#password').type(password);
      cy.get('#btnsignin').click();
      cy.on('window:alert', (text) => {
        expect(text).to.equal('Tên đăng nhập hoặc mật khẩu không chính xác');
      });
      cy.log('Login failed');
    });

    it('TC10: Should not login with invalid email and password', () => {
      cy.get('body').then(($body) => {
        if ($body.find('#popupHome').length) {
          cy.get('#popupHome .close > span').click();
        }
      });
      const { email, password } = testCases[6];
      cy.get('#username').type(email);
      cy.get('#password').type(password);
      cy.get('#btnsignin').click();
      cy.on('window:alert', (text) => {
        expect(text).to.equal('Tên đăng nhập hoặc mật khẩu không chính xác');
      });
      cy.log('Login failed');
    });
  });

  context('Empty Fields', () => {
    it('TC04: Should not login with empty email and valid password', () => {
      cy.get('body').then(($body) => {
        if ($body.find('#popupHome').length) {
          cy.get('#popupHome .close > span').click();
        }
      });
      cy.get('body').then(($body) => {
        if ($body.find('#popupHome').length) {
          cy.get('#popupHome .close > span').click();
        }
      });
      const { email, password } = testCases[3];
      cy.get('#password').type(password);
      cy.get('#btnsignin').click();
      cy.get('.formErrorContent').should('contain', 'Trường này bắt buộc');;
      cy.log('Login failed');
    });

    it('TC05: Should not login with valid email and empty password', () => {
      cy.get('body').then(($body) => {
        if ($body.find('#popupHome').length) {
          cy.get('#popupHome .close > span').click();
        }
      });
      cy.get('body').then(($body) => {
        if ($body.find('#popupHome').length) {
          cy.get('#popupHome .close > span').click();
        }
      });
      const { email, password } = testCases[4];
      cy.get('#username').type(email);
      cy.get('#btnsignin').click();
      cy.get('.formErrorContent').should('contain', 'Trường này bắt buộc');
      cy.log('Login failed');
    });

    it('TC06: Should not login with empty email and password', () => {
      cy.get('body').then(($body) => {
        if ($body.find('#popupHome').length) {
          cy.get('#popupHome .close > span').click();
        }
      });
      cy.get('body').then(($body) => {
        if ($body.find('#popupHome').length) {
          cy.get('#popupHome .close > span').click();
        }
      });
      const { email, password } = testCases[5];
      cy.get('#btnsignin').click();
      cy.get('.formErrorContent').eq(0).should('contain', 'Trường này bắt buộc');
      cy.get('.formErrorContent').eq(1).should('contain', 'Trường này bắt buộc');
      cy.log('Login failed');
    });
  });
});
