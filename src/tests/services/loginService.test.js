const { describe, before, after, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const loginService = require('../../services/loginService');
const loginModel = require('../../models/loginModel');

const dbResponse = [{
  id: 4,
  user_name: 'josneu',
  email: 'josneu@gmail.com',
  password: 'josneu1010',
  balance: 3800.13
}]

describe('Verifica o funcionamento do login no service', () => {
  
  describe('quando o login for válido', () => {
    const email = 'josneu@gmail.com';
    const password = 'josneu1010';
    before(() => {
      const executeReturn = dbResponse;
      sinon.stub(loginModel, 'checkLogin').resolves(executeReturn);
    });

    after(() => {
      loginModel.checkLogin.restore();
    });

    it('deve um token', async () => {
      const token = await loginService.checkLogin(email, password);
      expect(token).to.be.a('string');
      // expect(token[0]).to.be.an('object');
      // expect(token).to.be.equal(dbResponse.data)
      // expect(token).not.to.be.empty;

    });
  });
});