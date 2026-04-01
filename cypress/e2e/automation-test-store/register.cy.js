Cypress.on('uncaught:exception', () => false);
/// <reference types="cypress" />
import { testCases } from './Data_register.js';  // Adjust the path as necessary

describe("Signup Test", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.wait(2000); // cần cho CI
        cy.closePopupIfExists();
        cy.get('.header-user > :nth-child(2) > a').click();
    });

    // Happy Case
    context('Valid Credentials', () => {
        it('TC01: Should signup with valid credentials', () => {
            const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[0];
            cy.get('#username', { timeout: 10000 }).type(username);
            cy.get('#fullName', { timeout: 10000 }).type(fullname);
            cy.get('#birthday', { timeout: 10000 }).type(DOB); //trong HTML, trình duyệt web mặc định yêu cầu định dạng ngày tháng phải là YYYY-MM-DD
            cy.get('#mobile', { timeout: 10000 }).type(phone);
            cy.get('#email', { timeout: 10000 }).type(email);
            cy.get('#cityId', { timeout: 10000 }).select(city);
            cy.get('#districtId', { timeout: 10000 }).select(district);
            cy.get('#address', { timeout: 10000 }).type(address);
            cy.get('#password', { timeout: 10000 }).type(password);
            cy.get('#rePassword', { timeout: 10000 }).type(repassword);
            cy.get('.text-center > .btn').click();
            cy.log('Register successfully');
        });
    });
    // Negative Case
    context('Empty Fields', () => {
        it('TC02: Should not signup with empty username', () => {
            const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[1];
            cy.get('#fullName', { timeout: 10000 }).type(fullname);
            cy.get('#birthday', { timeout: 10000 }).type(DOB);
            cy.get('#mobile', { timeout: 10000 }).type(phone);
            cy.get('#email', { timeout: 10000 }).type(email);
            cy.get('#cityId', { timeout: 10000 }).select(city);
            cy.get('#districtId', { timeout: 10000 }).select(district);
            cy.get('#address', { timeout: 10000 }).type(address);
            cy.get('#password', { timeout: 10000 }).type(password);
            cy.get('#rePassword', { timeout: 10000 }).type(repassword);
            cy.get('.text-center > .btn').click();
            cy.get('.formErrorContent').should('contain', 'Trường này bắt buộc');
            cy.log('Register failed');
        });
        it('TC04: Should not signup with empty fullname', () => {
            const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[3];
            cy.get('#username', { timeout: 10000 }).type(username);
            cy.get('#birthday', { timeout: 10000 }).type(DOB);
            cy.get('#mobile', { timeout: 10000 }).type(phone);
            cy.get('#email', { timeout: 10000 }).type(email);
            cy.get('#cityId', { timeout: 10000 }).select(city);
            cy.get('#districtId', { timeout: 10000 }).select(district);
            cy.get('#address', { timeout: 10000 }).type(address);
            cy.get('#password', { timeout: 10000 }).type(password);
            cy.get('#rePassword', { timeout: 10000 }).type(repassword);
            cy.get('.text-center > .btn').click();
            cy.get('.formErrorContent').should('contain', 'Trường này bắt buộc');
            cy.log('Register failed');
        });
    });
    context('Invalid Credentials', () => {
        it('TC03: Should fail with incorrect username', () => {
            const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[2];
            cy.get('#username', { timeout: 10000 }).type(username);
            cy.get('#fullName', { timeout: 10000 }).type(fullname);
            cy.get('#birthday', { timeout: 10000 }).type(DOB);
            cy.get('#mobile', { timeout: 10000 }).type(phone);
            cy.get('#email', { timeout: 10000 }).type(email);
            cy.get('#cityId', { timeout: 10000 }).select(city);
            cy.get('#districtId', { timeout: 10000 }).select(district);
            cy.get('#address', { timeout: 10000 }).type(address);
            cy.get('#password', { timeout: 10000 }).type(password);
            cy.get('#rePassword', { timeout: 10000 }).type(repassword);
            cy.get('.text-center > .btn').click();
            cy.get('.formErrorContent').should('contain', 'Tối thiểu 4 số ký tự được cho phép');
            cy.log('Register failed');
        });
        // it('TC07: Should fail with incorrect DOB', () => {
        //     const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[4];
        //     cy.get('#username', { timeout: 10000 }).type(username);
        //     cy.get('#fullName', { timeout: 10000 }).type(fullname);
        //     cy.get('#birthday', { timeout: 10000 }).type(DOB);
        //     cy.get('#mobile', { timeout: 10000 }).type(phone);
        //     cy.get('#email', { timeout: 10000 }).type(email);
        //     cy.get('#cityId', { timeout: 10000 }).select(city);
        //     cy.get('#districtId', { timeout: 10000 }).select(district);
        //     cy.get('#address', { timeout: 10000 }).type(address);
        //     cy.get('#password', { timeout: 10000 }).type(password);
        //     cy.get('#rePassword', { timeout: 10000 }).type(repassword);
        //     cy.get('.text-center > .btn').click();
        //     cy.get('.formErrorContent').should('contain', 'Ngày sinh không hợp lệ', { timeout: 15000 });
        //     cy.log('Register failed');
        // });
        it('TC11: Should fail with incorrect phone', () => {
            const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[5];
            cy.get('#username', { timeout: 10000 }).type(username);
            cy.get('#fullName', { timeout: 10000 }).type(fullname);
            cy.get('#birthday', { timeout: 10000 }).type(DOB);
            cy.get('#mobile', { timeout: 10000 }).type(phone);
            cy.get('#email', { timeout: 10000 }).type(email);
            cy.get('#cityId', { timeout: 10000 }).select(city);
            cy.get('#districtId', { timeout: 10000 }).select(district);
            cy.get('#address', { timeout: 10000 }).type(address);
            cy.get('#password', { timeout: 10000 }).type(password);
            cy.get('#rePassword', { timeout: 10000 }).type(repassword);
            cy.get('.text-center > .btn').click();
            cy.get('.formErrorContent').should('contain', 'Số điện thoại sai');
            cy.log('Register failed');
        });
        it('TC13: Should fail with incorrect email', () => {
            const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[6];
            cy.get('#username', { timeout: 10000 }).type(username);
            cy.get('#fullName', { timeout: 10000 }).type(fullname);
            cy.get('#birthday', { timeout: 10000 }).type(DOB);
            cy.get('#mobile', { timeout: 10000 }).type(phone);
            cy.get('#email', { timeout: 10000 }).type(email);
            cy.get('#cityId', { timeout: 10000 }).select(city);
            cy.get('#districtId', { timeout: 10000 }).select(district);
            cy.get('#address', { timeout: 10000 }).type(address);
            cy.get('#password', { timeout: 10000 }).type(password);
            cy.get('#rePassword', { timeout: 10000 }).type(repassword);
            cy.get('.text-center > .btn').click();
            cy.get('.formErrorContent').should('contain', 'Địa chỉ thư điện tử sai');
            cy.log('Register failed');
        });
    });
});
