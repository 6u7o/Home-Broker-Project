const { describe, before, after, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const loginController = require('../../controllers/loginController');
const loginService = require('../../services/loginService');

describe('Verifica o funcionamento do login no controller', () => {
  describe('quando o email ou a senha não forem preenchidos', () => {
    const request = {};
    const response = {};

    before(() => {
      request.body = { email: 'teste@test.com', password: ''};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });

    it('deve retornar status 400', async () => {
      await loginController.login(request, response)

      expect(response.status.calledWith(400)).to.be.equal(true);
    });
  });

  describe('quando o login for inválido', () => {
    const request = {};
    const response = {};

    before(() => {
      const executeReturn = false;
      
      request.body = { email: 'teste@test.com', password: 'aaaaaaa'};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(loginService, "checkLogin").resolves(executeReturn);
    });

    after(() => {
      loginService.checkLogin.restore();
    });

    it('deve retornar status 400', async () => {
      await loginController.login(request, response)

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

  });

  describe('quando o login for válido', () => {
    const request = {};
    const response = {};

    before(() => {
      const executeReturn = 'token';
      
      request.body = { email: 'josneu@gmail.com', password: 'josneu1010'};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(loginService, "checkLogin").resolves(executeReturn);
    });

    after(() => {
      loginService.checkLogin.restore();
    });

    it('deve retornar status 200', async () => {
      await loginController.login(request, response)

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
});