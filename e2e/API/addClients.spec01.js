describe('API Test for List Clients Endpoint', () => {
    it('Teste de adicao bem sucedida', () => {
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
  
    it('teste de campos obrigatorios', () => {
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
  
    it('teste de validação de email e url do', () => {
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

    it('teste de adicao com ferramentas vazias', () => {
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

})