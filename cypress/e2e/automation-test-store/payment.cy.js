Cypress.on('uncaught:exception', () => false);

/// <reference types="cypress" />
import { testCases } from './Data_payment.js';

describe("Payment Test", () => {

    beforeEach(() => {
        cy.visit("/");

        cy.closePopupIfExists();

        cy.get('body', { timeout: 10000 }).should('be.visible');

        cy.get('.product-item img', { timeout: 15000 }).eq(0).click();

        cy.get('#addPayNow', { timeout: 15000 })
            .should('be.visible')
            .click();
    });

    context('Valid Credentials', () => {

        it('TC01: Should payment with valid credentials', () => {
            const { name, mobile, email, address, city, district, note } = testCases[0];

            cy.get('#customerName', { timeout: 10000 }).type(name);
            cy.get('#customerMobile', { timeout: 10000 }).type(mobile);
            cy.get('#customerEmail', { timeout: 10000 }).type(email);
            cy.get('#customerAddress', { timeout: 10000 }).type(address);
            cy.get('#customerCityId', { timeout: 10000 }).select(city);
            cy.get('#customerDistrictId', { timeout: 10000 }).select(district);
            cy.get('#description', { timeout: 10000 }).type(note);

            cy.get('.col-right > .form-check > .form-check-label > .form-check-input').check();

            cy.get('#js-btn-submit').click();

            cy.get('.pur-title')
                .should('contain.text', 'THANK YOU');

            cy.log('Payment successfully');
        });

    });

    context('Invalid Credentials', () => {

        it('TC04: Should not payment with invalid mobile (less than 3 numbers )', () => {
            const { name, mobile, email, address, city, district, note } = testCases[3];

            cy.get('#customerName', { timeout: 10000 }).type(name);
            cy.get('#customerMobile', { timeout: 10000 }).type(mobile);
            cy.get('#customerEmail', { timeout: 10000 }).type(email);
            cy.get('#customerAddress', { timeout: 10000 }).type(address);
            cy.get('#customerCityId', { timeout: 10000 }).select(city);
            cy.get('#customerDistrictId', { timeout: 10000 }).select(district);
            cy.get('#description', { timeout: 10000 }).type(note);

            cy.get('.col-right > .form-check > .form-check-label > .form-check-input').check();

            cy.get('#js-btn-submit').click();

            cy.get('.formErrorContent')
                .should('contain', 'Số điện thoại sai');

            cy.log('Payment failed');
        });

        it('TC05: Should not payment with invalid mobile (special characters)', () => {
            const { name, mobile, email, address, city, district, note } = testCases[4];

            cy.get('#customerName', { timeout: 10000 }).type(name);
            cy.get('#customerMobile', { timeout: 10000 }).type(mobile);
            cy.get('#customerEmail', { timeout: 10000 }).type(email);
            cy.get('#customerAddress', { timeout: 10000 }).type(address);
            cy.get('#customerCityId', { timeout: 10000 }).select(city);
            cy.get('#customerDistrictId', { timeout: 10000 }).select(district);
            cy.get('#description', { timeout: 10000 }).type(note);

            cy.get('.col-right > .form-check > .form-check-label > .form-check-input').check();

            cy.get('#js-btn-submit').click();

            cy.get('.formErrorContent')
                .should('contain', 'Số điện thoại sai');

            cy.log('Payment failed');
        });

        it('TC17: Should not payment with no consent policy', () => {
            const { name, mobile, email, address, city, district, note } = testCases[6];

            cy.get('#customerName', { timeout: 10000 }).type(name);
            cy.get('#customerMobile', { timeout: 10000 }).type(mobile);
            cy.get('#customerEmail', { timeout: 10000 }).type(email);
            cy.get('#customerAddress', { timeout: 10000 }).type(address);
            cy.get('#customerCityId', { timeout: 10000 }).select(city);
            cy.get('#customerDistrictId', { timeout: 10000 }).select(district);
            cy.get('#description', { timeout: 10000 }).type(note);

            cy.get('#js-btn-submit').click();

            cy.get('#mss-confirm > .alert')
                .should('contain', 'Bạn chưa đồng ý điều khoản của chúng tôi');

            cy.log('Payment failed');
        });

    });

    context('Empty Fields', () => {

        it('TC02: Should not payment with empty name', () => {
            const { name, mobile, email, address, city, district, note } = testCases[1];

            cy.get('#customerMobile', { timeout: 10000 }).type(mobile);
            cy.get('#customerEmail', { timeout: 10000 }).type(email);
            cy.get('#customerAddress', { timeout: 10000 }).type(address);
            cy.get('#customerCityId', { timeout: 10000 }).select(city);
            cy.get('#customerDistrictId', { timeout: 10000 }).select(district);
            cy.get('#description', { timeout: 10000 }).type(note);

            cy.get('.col-right > .form-check > .form-check-label > .form-check-input').check();

            cy.get('#js-btn-submit').click();

            cy.get('.formErrorContent')
                .should('contain', 'Trường này bắt buộc');

            cy.log('Payment failed');
        });

        it('TC03: Should not payment with empty mobile', () => {
            const { name, mobile, email, address, city, district, note } = testCases[2];

            cy.get('#customerName', { timeout: 10000 }).type(name);
            cy.get('#customerEmail', { timeout: 10000 }).type(email);
            cy.get('#customerAddress', { timeout: 10000 }).type(address);
            cy.get('#customerCityId', { timeout: 10000 }).select(city);
            cy.get('#customerDistrictId', { timeout: 10000 }).select(district);
            cy.get('#description', { timeout: 10000 }).type(note);

            cy.get('.col-right > .form-check > .form-check-label > .form-check-input').check();

            cy.get('#js-btn-submit').click();

            cy.get('.formErrorContent')
                .should('contain', 'Trường này bắt buộc');

            cy.log('Payment failed');
        });

        it('TC012: Should not payment with empty district', () => {
            const { name, mobile, email, address, city, district, note } = testCases[5];

            cy.get('#customerName', { timeout: 10000 }).type(name);
            cy.get('#customerMobile', { timeout: 10000 }).type(mobile);
            cy.get('#customerEmail', { timeout: 10000 }).type(email);
            cy.get('#customerAddress', { timeout: 10000 }).type(address);
            cy.get('#customerCityId', { timeout: 10000 }).select(city);
            cy.get('#description', { timeout: 10000 }).type(note);

            cy.get('.col-right > .form-check > .form-check-label > .form-check-input').check();

            cy.get('#js-btn-submit').click();

            cy.get('.formErrorContent')
                .should('contain', 'Trường này bắt buộc');

            cy.log('Payment failed');
        });

    });

});