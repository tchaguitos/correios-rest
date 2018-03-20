/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import test from 'ava';
import request from 'supertest';
import app from '../../src/config/express';

test('get price', async (t) => {
  const requestMock = {
    nCdEmpresa: '',
    sDsSenha: '',
    nCdServico: '40010',
    sCepOrigem: '37410000',
    sCepDestino: '37410000',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '8.5',
    nVlLargura: '12',
    nVlDiametro: '0',
    sCdMaoPropria: 'n',
    nVlValorDeclarado: '150',
    sCdAvisoRecebimento: 'n',
    sDtCalculo: '20/03/2018',
  };

  const responseMock = {
    Codigo: '40010',
    Valor: '20,57',
    ValorMaoPropria: '0,00',
    ValorAvisoRecebimento: '0,00',
    ValorValorDeclarado: '1,97',
    Erro: '',
    MsgErro: '',
    ValorSemAdicionais: '18,60',
  };

  const res = await request(app())
    .post('/v1/price-with-date')
    .send(requestMock)
    .expect('Content-Type', /json/)
    .expect(200);

  t.is(res.status, 200);
  t.deepEqual(res.body, responseMock);
});
