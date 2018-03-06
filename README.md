# Correios Services

[![Build Status](https://travis-ci.org/tchaguitos/correios-services.svg?branch=master)](https://travis-ci.org/tchaguitos/correios-services)

Uma alternativa simples e fácil para calcular preços e prazos de encomendas dos Correios.  

### Motivação

Imagine um mundo onde a comunidade define o melhor caminho, projeta e implementa a aplicação dos Correios, melhorando os fluxos de trabalho e tornando as coisas mais fáceis de se trabalhar no front-end. Dos devs para os devs!  
(Não é bem implementar a aplicação dos Correios, mas é um "meio de campo". Leia abaixo).

### Como funciona

A API recebe o JSON, parseia os dados, faz a requisição no webservice dos Correios e retorna um JSON. Você só precisa fazer um fetch e tratar a resposta.  

A ideia é simplificar a vida do desenvolvedor, deixando a responsabilidade de tratar a resposta para a aplicação.

---

### Começando

`git clone git@github.com:tchaguitos/correios-services.git`

`cd correios-services`

`npm install`

`nodemon`

---

### Contribuindo

Antes de tudo, tome conhecimento do [styleguide](https://github.com/airbnb/javascript) do Airbnb. Ele vai nos ajudar na padronização do código.

Depois disso, leia o [manual de contribuição](https://github.com/tchaguitos/correios-services/blob/master/CONTRIBUTING.md).

---

#### Informações importantes

Até então, o único método implementado é o "CalcPreco". 

  - A lista de métodos disponibilizados pelos Correios pode ser encontrada [aqui](http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx).
  - [Esse](http://www.correios.com.br/para-voce/correios-de-a-a-z/pdf/calculador-remoto-de-precos-e-prazos/manual-de-implementacao-do-calculo-remoto-de-precos-e-prazos) arquivo pode também ser útil.
  

---

### Exemplo prático

Para calcular o valor do frete de uma encomenda, basta enviar, através do verbo POST, um JSON contendo as informações abaixo para o endpoint ['/v1/price']().  
(Sim, essa URL precisa de um nome melhor).
```
{
  "nCdEmpresa": "",
  "sDsSenha": "",
  "nCdServico": "40010",
  "sCepOrigem": "37410000",
  "sCepDestino": "05311900",
  "nVlPeso": "1",
  "nCdFormato": "1",
  "nVlComprimento": "20",
  "nVlAltura": "5",
  "nVlLargura": "15",
  "nVlDiametro": "0",
  "sCdMaoPropria": "n",
  "nVlValorDeclarado": "100",
  "sCdAvisoRecebimento": "n"
}

```

Você receberá um JSON contendo a resposta do serviço dos Correios.

```
{
  "Codigo": "40010",
  "Valor": "49,15",
  "ValorMaoPropria": "0,00",
  "ValorAvisoRecebimento": "0,00",
  "ValorValorDeclarado": "0,75",
  "Erro": "",
  "MsgErro": "",
  "ValorSemAdicionais": "48,40"
}
```
