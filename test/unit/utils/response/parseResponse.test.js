/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import test from 'ava';
import { parseResponse } from '../../../../src/utils';

test('method `parseResponse` exists', (t) => {
    t.truthy(parseResponse);
});

test('method `parseResponse` is a function', (t) => {
    t.is(typeof parseResponse, 'function');
});

test('result is an object', (t) => {
    const result = parseResponse(`
    <?xml version="1.0" encoding="utf-8"?>
    <cResultado
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://tempuri.org/">
    <Servicos>
    <cServico>
    <Codigo>40010</Codigo>
    <Valor>49,62</Valor>
    <ValorMaoPropria>0,00</ValorMaoPropria>
    <ValorAvisoRecebimento>0,00</ValorAvisoRecebimento>
    <ValorValorDeclarado>1,22</ValorValorDeclarado>
    <Erro />
    <MsgErro />
    <ValorSemAdicionais>48,40</ValorSemAdicionais>
    </cServico>
    </Servicos>
    </cResultado>`);
    
    t.is(typeof result, 'object');
});

test('method `parseResponse` return the correct data', async (t) => {
    const xml = `
    <?xml version="1.0" encoding="utf-8"?>
    <cResultado
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://tempuri.org/">
    <Servicos>
    <cServico>
    <Codigo>40010</Codigo>
    <Valor>49,62</Valor>
    <ValorMaoPropria>0,00</ValorMaoPropria>
    <ValorAvisoRecebimento>0,00</ValorAvisoRecebimento>
    <ValorValorDeclarado>1,22</ValorValorDeclarado>
    <Erro />
    <MsgErro />
    <ValorSemAdicionais>48,40</ValorSemAdicionais>
    </cServico>
    </Servicos>
    </cResultado>`;
    
    const result = await parseResponse(xml);
    const responseMock = {
        Codigo: '40010',
        Valor: '49,62',
        ValorMaoPropria: '0,00',
        ValorAvisoRecebimento: '0,00',
        ValorValorDeclarado: '1,22',
        Erro: '',
        MsgErro: '',
        ValorSemAdicionais: '48,40',
    };
    
    t.deepEqual(result, responseMock);
});

