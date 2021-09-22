import {getAddTodoButton, getTodos} from '../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todo', ()=>{
    getTodos().should(t=> expect(t.length).equal(2))
    getAddTodoButton().click()
    getTodos().should(t=>expect(t.length).equal(3))
  })
});
