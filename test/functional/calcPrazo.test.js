/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import test from 'ava';
import request from 'supertest';
import app from '../../src/config/express';

test('CalcPrazo', async (t) => {

    const requestMock = {
        nCdServico: '40010',
        sCepOrigem: '37410220',
        sCepDestino: '05311900',
    };
    
    const responseMock = {
        Codigo: '40010',
        PrazoEntrega: '2',
        EntregaDomiciliar: 'S',
        EntregaSabado: 'S',
        Erro: '',
        MsgErro: '',
        obsFim: '',
        DataMaxEntrega: `${new Date().getDate() + 4}/0${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
    };
    
    const res = await request(app())
    .post('/v1/calc-prazo')
    .send(requestMock)
    .expect('Content-Type', /json/)
    .expect(200);
    
    t.is(res.status, 200);
    t.deepEqual(res.body, responseMock);

});
