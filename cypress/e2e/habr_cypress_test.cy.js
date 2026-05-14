describe('Cypress Tests', ()=>{
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

    it('Создание заявки работодателем Позитивный тест', () => {
        cy.fixture('cypressTests').then(data => {
            cy.visit(data.main_url);
            cy.get('[href="/login"] > .button').click();
            cy.get('.form-input--text').type(data.login);
            cy.get('.form-input--password').type(data.password);
            cy.get(':nth-child(3) > .button', {timeout: 3000}).click();
            cy.get(':nth-child(7) > .menu-item__item-name').click();
            cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--', {timeout: 6000}).type(data.vakansia, {force: true});
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > [name="requirements"] > .form-area', {timeout: 6000}).type(data.requirements);
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > [name="responsibilities"] > .form-area', {timeout: 6000}).type(data.duties);
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button', {timeout: 6000}).click({force: true});
        })
    });

    it('Создание заявки работодателем Негативный тест', () => {
        cy.fixture('cypressTests').then(data => {
            cy.visit(data.main_url);
            cy.get('[href="/login"] > .button').click();
            cy.get('.form-input--text').type(data.login);
            cy.get('.form-input--password').type(data.password);
            cy.get(':nth-child(3) > .button', {timeout: 3000}).click();
            cy.get(':nth-child(7) > .menu-item__item-name').click();
            cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--', {timeout: 6000}).type(data.vakansia, {force: true});
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > [name="requirements"] > .form-area', {timeout: 6000}).type(data.requirements);
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button', {timeout: 6000}).click({force: true});
        })
    });



})

