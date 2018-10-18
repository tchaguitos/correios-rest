/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import test from 'ava';
import request from 'supertest';
import app from '../../src/config/express';

test('CalcPreco', async (t) => {

    const requestMock = {
        nCdEmpresa: '',
        sDsSenha: '',
        nCdServico: '40010',
        sCepOrigem: '37410220',
        sCepDestino: '05311900',
        nVlPeso: '1',
        nCdFormato: '1',
        nVlComprimento: '20',
        nVlAltura: '5',
        nVlLargura: '15',
        nVlDiametro: '0',
        sCdMaoPropria: 'n',
        nVlValorDeclarado: '100',
        sCdAvisoRecebimento: 'n',
    };
    
    const responseMock = {
        Codigo: '40010',
        Valor: '53,93',
        ValorMaoPropria: '0,00',
        ValorAvisoRecebimento: '0,00',
        ValorValorDeclarado: '1,63',
        Erro: '',
        MsgErro: '',
        ValorSemAdicionais: '52,30',
    };
    
    const res = await request(app())
    .post('/v1/calc-preco')
    .send(requestMock)
    .expect('Content-Type', /json/)
    .expect(200);
    
    t.is(res.status, 200);
    t.deepEqual(res.body, responseMock);

});
