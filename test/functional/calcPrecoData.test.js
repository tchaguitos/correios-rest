/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import test from 'ava';
import request from 'supertest';
import app from '../../src/config/express';

test('CalcPrecoData', async (t) => {
  const requestMock = {
    nCdEmpresa: '',
    sDsSenha: '',
    nCdServico: '40010',
    sCepOrigem: '05311900',
    sCepDestino: '37410220',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '8.5',
    nVlLargura: '12',
    nVlDiametro: '0',
    sCdMaoPropria: 'n',
    nVlValorDeclarado: '150',
    sCdAvisoRecebimento: 'n',
    sDtCalculo: `${new Date().getDate()}/0${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
  };

  const responseMock = {
    Codigo: '40010',
    Valor: '54,93',
    ValorMaoPropria: '0,00',
    ValorAvisoRecebimento: '0,00',
    ValorValorDeclarado: '2,63',
    Erro: '',
    MsgErro: '',
    ValorSemAdicionais: '52,30',
  };

  const res = await request(app())
    .post('/v1/calc-preco-data')
    .send(requestMock)
    .expect('Content-Type', /json/)
    .expect(200);

  t.is(res.status, 200);
  t.deepEqual(res.body, responseMock);
});
