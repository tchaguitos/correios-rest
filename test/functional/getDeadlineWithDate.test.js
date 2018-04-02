/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import test from 'ava';
import request from 'supertest';
import app from '../../src/config/express';

test('get price with date', async (t) => {
  const requestMock = {
    nCdServico: '40010',
    sCepOrigem: '37410000',
    sCepDestino: '05311900',
    sDtCalculo: '20/08/2018',
  };

  const responseMock = {
    Codigo: '40010',
    PrazoEntrega: '1',
    EntregaDomiciliar: 'S',
    EntregaSabado: 'S',
    Erro: '',
    MsgErro: '',
    obsFim: '',
    DataMaxEntrega: '21/08/2018',
  };

  const res = await request(app())
    .post('/v1/deadline-with-date')
    .send(requestMock)
    .expect('Content-Type', /json/)
    .expect(200);

  t.is(res.status, 200);
  t.deepEqual(res.body, responseMock);
});
