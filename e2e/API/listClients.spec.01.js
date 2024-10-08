describe('API Test for List Clients Endpoint', () => {
  it('Resposta com status status 200', () => {
    // Realiza a requisição GET para o endpoint
    cy.request('GET', 'https://api-challenge.primecontrol.com.br/listClients')
      .then((response) => {
        // Verifica o status da resposta
        expect(response.status).to.eq(200);

        // Verifica o tipo de conteúdo da resposta
        expect(response.headers['content-type']).to.include('application/json');

        // Verifica a estrutura da resposta
        expect(response.body).to.have.property('clients'); // Verifique se a propriedade 'clients' está presente

        // Adicione verificações adicionais conforme necessário, por exemplo:
        expect(response.body.clients).to.be.an('array'); // Verifique se 'clients' é um array
        if (response.body.clients.length > 0) {
          // Verifique se o primeiro cliente tem as propriedades esperadas
          expect(response.body.clients[0]).to.have.all.keys('id', 'name', 'email', 'phone'); // Exemplo de propriedades esperadas
        }
      });
  });

  it('Validar os campos', () => {
    // Realiza a requisição GET para o endpoint
    cy.request('GET', 'https://api-challenge.primecontrol.com.br/listClients')
      .then((response) => {
        // Verifica o status da resposta
        expect(response.status).to.eq(200);

        // Verifica o tipo de conteúdo da resposta
        expect(response.headers['content-type']).to.include('application/json');

        // Verifica a estrutura da resposta
        expect(response.body).to.have.property('clients'); // Verifique se a propriedade 'clients' está presente

        // Adicione verificações adicionais conforme necessário, por exemplo:
        expect(response.body.clients).to.be.an('array'); // Verifique se 'clients' é um array
        if (response.body.clients.length > 0) {
          // Verifique se o primeiro cliente tem as propriedades esperadas
          expect(response.body.clients[0]).to.have.all.keys('id', 'name', 'email', 'phone'); // Exemplo de propriedades esperadas
        }
      });
  });

  it('Endpoint inexistente', () => {
    // Realiza a requisição GET para o endpoint
    cy.request('GET', 'https://api-challenge.primecontrol.com.br/listClients')
      .then((response) => {
        // Verifica o status da resposta
        expect(response.status).to.eq(200);

        // Verifica o tipo de conteúdo da resposta
        expect(response.headers['content-type']).to.include('application/json');

        // Verifica a estrutura da resposta
        expect(response.body).to.have.property('clients'); // Verifique se a propriedade 'clients' está presente

        // Adicione verificações adicionais conforme necessário, por exemplo:
        expect(response.body.clients).to.be.an('array'); // Verifique se 'clients' é um array
        if (response.body.clients.length > 0) {
          // Verifique se o primeiro cliente tem as propriedades esperadas
          expect(response.body.clients[0]).to.have.all.keys('id', 'name', 'email', 'phone'); // Exemplo de propriedades esperadas
        }
      });
  });



});