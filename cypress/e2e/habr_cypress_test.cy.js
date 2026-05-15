describe('Cypress Tests', () => {
    // it('Авторизация Негативный тест', () => {
    //     cy.fixture('cypressTests').then(data => {
    //         cy.visit(data.main_url);
    //         cy.get('[href="/login"] > .button').click();
    //         cy.get('.form-input--text').type(data.login);
    //         cy.get('.form-input--password').type('Password');
    //         cy.get(':nth-child(3) > .button', {timeout: 3000}).click();
    //     })
    // });



    // it('Авторизация Позитивный тест', () => {
    //     cy.fixture('cypressTests').then(data => {
    //         cy.visit(data.main_url);
    //         cy.get('[href="/login"] > .button').click();
    //         cy.get('.form-input--text').type(data.login);
    //         cy.get('.form-input--password').type(data.password);
    //         cy.get(':nth-child(3) > .button', {timeout: 3000}).click();
    //     })
    // });

    // it('Создание заявки работодателем Позитивный тест', () => {
    //     cy.fixture('cypressTests').then(data => {
    //         cy.visit(data.main_url);
    //         cy.get('[href="/login"] > .button').click();
    //         cy.get('.form-input--text').type(data.login);
    //         cy.get('.form-input--password').type(data.password);
    //         cy.get(':nth-child(3) > .button', {timeout: 3000}).click();
    //         cy.get(':nth-child(7) > .menu-item__item-name').click();
    //         cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();
    //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--', {timeout: 6000}).type(data.vakansia, {force: true});
    //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > [name="requirements"] > .form-area', {timeout: 6000}).type(data.requirements);
    //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > [name="responsibilities"] > .form-area', {timeout: 6000}).type(data.duties);
    //         cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button', {timeout: 6000}).click({force: true});
    //     })
    // });

    // it('Создание заявки работодателем Негативный тест', () => {
    //     cy.fixture('cypressTests').then(data => {
    //         cy.visit(data.main_url);
    //         cy.get('[href="/login"] > .button').click();
    //         cy.get('.form-input--text').type(data.login);
    //         cy.get('.form-input--password').type(data.password);
    //         cy.get(':nth-child(3) > .button', {timeout: 3000}).click();
    //         cy.get(':nth-child(7) > .menu-item__item-name').click();
    //         cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();
    //         cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons').should('be.disabled');
    //     })
    // });

    // it('просмотр страницы с вакансиями (с поиском и фильтром) Позитивный тест', () => {
    //     cy.fixture('cypressTests').then(data => {
    //         cy.visit(data.main_url);
    //         cy.get('[href="/login"] > .button').click();
    //         cy.get('.form-input--text').type(data.login);
    //         cy.get('.form-input--password').type(data.password);
    //         cy.get(':nth-child(3) > .button', {timeout: 3000}).click();
    //         cy.get(':nth-child(1) > .header__nav > [href="/needs"]',{timeout: 10000}).click();
    //         cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]',{timeout: 10000}).click();
    //         cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]',{timeout: 10000}).click();
    //         cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]',{timeout: 10000}).click();
    //         cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click();
    //         cy.get('.form-select__items > :nth-child(2)').click();
    //         cy.get(':nth-child(4) > :nth-child(2) > .form-select__selected').click();
    //         cy.get('.form-select__items > :nth-child(2)').click();
    //         cy.get('div.search-input__field > .button').click();
    //     })
    // });

    // it('просмотр страницы с вакансиями (с поиском и фильтром) Негативный тест', () => {
    //     cy.fixture('cypressTests').then(data => {
    //         cy.visit(data.main_url);
    //         cy.get('[href="/login"] > .button').click();
    //         cy.get('.form-input--text').type(data.login);
    //         cy.get('.form-input--password').type(data.password);
    //         cy.get(':nth-child(3) > .button', {timeout: 3000}).click();
    //         cy.wait(3000);
    //         cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click();
    //         cy.get('.form-input--text').type(data.testPoisk);
    //         cy.get('div.search-input__field > .button').click();
    //     })
    // });

    // it('Отклик на вакансию студентом Позитивный тест', () => {
    //     cy.fixture('cypressTests').then(data => {
    //         cy.visit(data.main_url);
    //         cy.get('[href="/login"] > .button').click();
    //         cy.get('.form-input--text').type(data.loginStudent);
    //         cy.get('.form-input--password').type(data.password);
    //         cy.get(':nth-child(3) > .button', {timeout: 3000}).click();
    //         cy.wait(3000);
    //         cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click();
    //         cy.get('.form-input--text').type('Пельмени33SSS');
    //         cy.get('div.search-input__field > .button').click();
    //         cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green').click();

    //     })
    // });

    // it('Отклик на вакансию студентом Негативный тест', () => {
    //     cy.fixture('cypressTests').then(data => {
    //         cy.visit(data.main_url);
    //         cy.get('[href="/login"] > .button').click();
    //         cy.get('.form-input--text').type(data.loginStudent);
    //         cy.get('.form-input--password').type(data.password);
    //         cy.get(':nth-child(3) > .button', { timeout: 3000 }).click();
    //         cy.wait(3000);
    //         cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click();
    //         cy.get('.form-input--text').type('Пельмени33SSS');
    //         cy.wait(500);
    //         cy.get('div.search-input__field > .button').click();
    //         cy.get('.vacancy-footer__button-wrapper').click();
    //         cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper').should('be.visible');
    //     })
    // });

    // it('Подтверждение отклика работодателем Позитивный тест', () => {
    //     cy.fixture('cypressTests').then(data => {
    //         cy.visit(data.main_url);
    //         cy.get('[href="/login"] > .button').click();
    //         cy.get('.form-input--text').type(data.login);
    //         cy.get('.form-input--password').type(data.password);
    //         cy.get(':nth-child(3) > .button', { timeout: 3000 }).click();
    //         cy.get(':nth-child(5) > .menu-item__item-name', { timeout: 3000 }).click();
    //         cy.get(':nth-child(1) > .responses-list-item__actions > :nth-child(1)').click();
    //         })
    // });

    // it('Подтверждение отклика работодателем Негативный тест', () => {
    //     cy.fixture('cypressTests').then(data => {
    //         cy.visit(data.main_url);
    //         cy.get('[href="/login"] > .button').click();
    //         cy.get('.form-input--text').type(data.login);
    //         cy.get('.form-input--password').type(data.password);
    //         cy.get(':nth-child(3) > .button', { timeout: 3000 }).click();
    //         cy.get(':nth-child(5) > .menu-item__item-name', { timeout: 3000 }).click();
    //         cy.get('.navigation-workspace > :nth-child(4)').click();
    //         cy.get(':nth-child(1) > .responses-list-item__button').click();
    //         cy.get(':nth-child(1) > .responses-list-item__button').should('be.visible');
    //         })
    // });

    // it('Взаимодействие внутри рабочего пространства Позитивный тест', () => {
    //     cy.fixture('cypressTests').then(data => {
    //         cy.visit(data.main_url);
    //         cy.get('[href="/login"] > .button').click();
    //         cy.get('.form-input--text').type(data.login);
    //         cy.get('.form-input--password').type(data.password);
    //         cy.get(':nth-child(3) > .button', { timeout: 3000 }).click();
    //         cy.get(':nth-child(5) > .menu-item__item-name', { timeout: 3000 }).click();
    //         cy.get('.navigation-workspace > :nth-child(3)').click();
    //         cy.get('.infinite-loader > :nth-child(1) > .button').click();
    //         cy.get('.form-area').type('МУХАХАХАХАХ ПЕЛЬМЕНИИ');
    //         cy.get('.comment-textarea__buttons > :nth-child(2)').click();
    //         })
    // });

    it('Взаимодействие внутри рабочего пространства Негативный тест', () => {
        cy.fixture('cypressTests').then(data => {
            cy.visit(data.main_url);
            cy.get('[href="/login"] > .button').click();
            cy.get('.form-input--text').type(data.login);
            cy.get('.form-input--password').type(data.password);
            cy.get(':nth-child(3) > .button', { timeout: 3000 }).click();
            cy.get(':nth-child(5) > .menu-item__item-name', { timeout: 3000 }).click();
            cy.get('.navigation-workspace > :nth-child(3)').click();
            cy.get('.infinite-loader > :nth-child(2) > .button').click();
            cy.get('.form-area').should('be.disabled');
            
            })
    });



})

