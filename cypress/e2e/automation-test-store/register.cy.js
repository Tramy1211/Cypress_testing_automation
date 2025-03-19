/// <reference types="cypress" />
import { testCases } from './Data_register.js';  // Adjust the path as necessary

describe("Signup Test", () => {
    beforeEach(() => {
        cy.visit("https://moji.vn/");
        cy.get('body').then(($body) => {
            if ($body.find('#popupHome').length) {
                cy.get('#popupHome .close > span').click();
            }
        });
        cy.get('.header-user > :nth-child(2) > a').click();
    });

    // Happy Case
    context('Valid Credentials', () => {
        it('TC01: Should signup with valid credentials', () => {
            const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[0];
            cy.get('#username').type(username);
            cy.get('#fullName').type(fullname);
            cy.get('#birthday').type(DOB); //trong HTML, trình duyệt web mặc định yêu cầu định dạng ngày tháng phải là YYYY-MM-DD
            cy.get('#mobile').type(phone);
            cy.get('#email').type(email);
            cy.get('#cityId').select(city);
            cy.get('#districtId').select(district);
            cy.get('#address').type(address);
            cy.get('#password').type(password);
            cy.get('#rePassword').type(repassword);
            cy.get('.text-center > .btn').click();
            cy.log('Register successfully');
        });
    });
    // Negative Case
    context('Empty Fields', () => {
        it('TC02: Should not signup with empty username', () => {
            const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[1];
            cy.get('#fullName').type(fullname);
            cy.get('#birthday').type(DOB);
            cy.get('#mobile').type(phone);
            cy.get('#email').type(email);
            cy.get('#cityId').select(city);
            cy.get('#districtId').select(district);
            cy.get('#address').type(address);
            cy.get('#password').type(password);
            cy.get('#rePassword').type(repassword);
            cy.get('.text-center > .btn').click();
            cy.get('.formErrorContent').should('contain', 'Trường này bắt buộc');
            cy.log('Register failed');
        });
        it('TC04: Should not signup with empty fullname', () => {
            const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[3];
            cy.get('#username').type(username);
            cy.get('#birthday').type(DOB);
            cy.get('#mobile').type(phone);
            cy.get('#email').type(email);
            cy.get('#cityId').select(city);
            cy.get('#districtId').select(district);
            cy.get('#address').type(address);
            cy.get('#password').type(password);
            cy.get('#rePassword').type(repassword);
            cy.get('.text-center > .btn').click();
            cy.get('.formErrorContent').should('contain', 'Trường này bắt buộc');
            cy.log('Register failed');
        });
    });
    context('Invalid Credentials', () => {
        it('TC03: Should fail with incorrect username', () => {
            const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[2];
            cy.get('#username').type(username);
            cy.get('#fullName').type(fullname);
            cy.get('#birthday').type(DOB);
            cy.get('#mobile').type(phone);
            cy.get('#email').type(email);
            cy.get('#cityId').select(city);
            cy.get('#districtId').select(district);
            cy.get('#address').type(address);
            cy.get('#password').type(password);
            cy.get('#rePassword').type(repassword);
            cy.get('.text-center > .btn').click();
            cy.get('.formErrorContent').should('contain', 'Tối thiểu 4 số ký tự được cho phép');
            cy.log('Register failed');
        });
        it('TC07: Should fail with incorrect DOB', () => {
            const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[4];
            cy.get('#username').type(username);
            cy.get('#fullName').type(fullname);
            cy.get('#birthday').type(DOB);
            cy.get('#mobile').type(phone);
            cy.get('#email').type(email);
            cy.get('#cityId').select(city);
            cy.get('#districtId').select(district);
            cy.get('#address').type(address);
            cy.get('#password').type(password);
            cy.get('#rePassword').type(repassword);
            cy.get('.text-center > .btn').click();
            cy.get('.formErrorContent').should('contain', 'Ngày sinh không hợp lệ');
            cy.log('Register failed');
        });
        it('TC11: Should fail with incorrect phone', () => {
            const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[5];
            cy.get('#username').type(username);
            cy.get('#fullName').type(fullname);
            cy.get('#birthday').type(DOB);
            cy.get('#mobile').type(phone);
            cy.get('#email').type(email);
            cy.get('#cityId').select(city);
            cy.get('#districtId').select(district);
            cy.get('#address').type(address);
            cy.get('#password').type(password);
            cy.get('#rePassword').type(repassword);
            cy.get('.text-center > .btn').click();
            cy.get('.formErrorContent').should('contain', 'Số điện thoại sai');
            cy.log('Register failed');
        });
        it('TC13: Should fail with incorrect email', () => {
            const { username, fullname, DOB, phone, email, city, district, address, password, repassword } = testCases[6];
            cy.get('#username').type(username);
            cy.get('#fullName').type(fullname);
            cy.get('#birthday').type(DOB);
            cy.get('#mobile').type(phone);
            cy.get('#email').type(email);
            cy.get('#cityId').select(city);
            cy.get('#districtId').select(district);
            cy.get('#address').type(address);
            cy.get('#password').type(password);
            cy.get('#rePassword').type(repassword);
            cy.get('.text-center > .btn').click();
            cy.get('.formErrorContent').should('contain', 'Địa chỉ thư điện tử sai');
            cy.log('Register failed');
        });
    });
});
