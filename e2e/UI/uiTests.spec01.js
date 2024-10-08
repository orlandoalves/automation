context.only('Actions', () => {
    beforeEach(() => {
      cy.visit('/');
      //cy.login()
      //cy.request('/dashboard').as('dashboard')
    })
    
  // GIVEN
  //      I on home page screen
  // WHEN
  //       I click on create an accounte
  // THEN
  //       Page to fill email and password should be displayed.
  
    it.skip('Criar uma nova conta e efetua o login com sucesso', () => {

      let usuarioTeste;

      //CT001 - Cria nova conta com sucesso.
      cy.contains('Criar uma conta').click({force: true})
      usuarioTeste = `${Date.now()}@primetest.com`;
      cy.get('#floatingInput').type(usuarioTeste);
      cy.get('#floatingPassword').click().type('password')
      cy.get('.w-100').click()

      //CT002 - valida criar conta com email ja cadastrado.
      cy.get('#floatingInput').clear()
      cy.get('#floatingInput').type(usuarioTeste);
      cy.get('#floatingPassword').click().type('password')
      cy.get('.w-100').click()
      
      //CT004 - valida senha invalida.
      cy.wait(3000)
      cy.get('#floatingPassword').click().type('pass')
      cy.get('.w-100').click()
      cy.wait(2000)

      //CT003 - efetua o login com sucesso.
      cy.wait(3000)
      cy.get('#floatingPassword').clear()
      cy.get('#floatingPassword').click().type('password')
      cy.get('.w-100').click()
      cy.wait(2000)
      
    })
  
    it.skip('CT005 Realiza cadastro de clientes com sucesso na aba perfil 2', () => {

      cy.get('.btn-outline-light').click({force: true})
      cy.get('#floatingInput').type('1726149213666@primetest.com');
      cy.get('#floatingPassword').click().type('password')
      cy.get('.w-100').click()
      cy.get(':nth-child(2) > .nav-link').click()
      cy.get('.col-md-9 > .form-control').click({force: true}).type('testador executando testes')
      cy.get('.image-upload-label').selectFile('cypress/fixtures/imgTeste.jpg');
      cy.get(':nth-child(2) > .row > :nth-child(1) > .form-control').click({force: true}).type(4132323232)
      cy.get(':nth-child(2) > .row > :nth-child(2) > .form-control').click().type('4132323232@teste.com')
      cy.get(':nth-child(3) > .row > :nth-child(1) > .form-control').click().type('81700-300')
      cy.get(':nth-child(3) > .row > :nth-child(2) > .form-control').click().type(1000)
      cy.get(':nth-child(4) > .row > :nth-child(1) > .form-control').click().type('R 1500')
      cy.get(':nth-child(4) > .row > :nth-child(2) > .form-control').click().type('fundos')
      cy.get('select').select('Brasil')
      cy.get(':nth-child(5) > div > :nth-child(1)').click()
      cy.get(':nth-child(6) > div > :nth-child(1)').click()
      cy.get(':nth-child(7) > .btn').click()
      cy.get('input[type="text"]').click({ multiple: true }).type('teste')
      cy.wait(5000)
      
    })
  
    it.skip('CT006 - Validar pesquisa de cliente cadastrado', () => {

      cy.get('.btn-outline-light').click({force: true})
      cy.get('#floatingInput').type('1726149213666@primetest.com');
      cy.get('#floatingPassword').click().type('password')
      cy.get('.w-100').click()
      cy.wait(9000)
      cy.get('.form-control').click({ multiple: true }).type('testador executando testes')
      cy.get('#button-addon2').click()
      cy.wait(9000)
      
    })
  
    it.skip('CT007 - Editar cliente recem cadastrado', () => {

      cy.get('.btn-outline-light').click({force: true})
      cy.get('#floatingInput').type('1726149213666@primetest.com');
      cy.get('#floatingPassword').click().type('password')
      cy.get('.w-100').click()
      cy.wait(9000)
      cy.get('.form-control').click({ multiple: true }).type('testador executando testes')
      cy.get('[href="/app/editarcliente/J0xgh3Yu2rDqdHcrv8lt"] > .fas').click()
      cy.get(':nth-child(4) > #exampleInputEmail1').clear()
      cy.get(':nth-child(4) > #exampleInputEmail1').type(4132323232)
      cy.get('.btn-primary').click()
      cy.wait(9000)
      
    })
  
    it.skip('CT008 - Excluir cliente recem cadastrado', () => {

      cy.get('.btn-outline-light').click({force: true})
      cy.get('#floatingInput').type('1726149213666@primetest.com');
      cy.get('#floatingPassword').click().type('password')
      cy.get('.w-100').click()
      cy.wait(5000)
      cy.get('.form-control').click({ multiple: true }).type('testador executando testes')
      cy.get(':nth-child(1) > :nth-child(5) > [href="/app/home"] > .far').click()
      cy.wait(3000)
      cy.get('.btn-danger').click()
      cy.wait(3000)
     
    })
  
    it.skip('Validar cadastro de cliente com email invalido na aba perfil', () => {

      cy.get('.btn-outline-light').click({force: true})
      cy.get('#floatingInput').type('1726149213666@primetest.com');
      cy.get('#floatingPassword').click().type('password')
      cy.get('.w-100').click()
      cy.wait(5000)
      cy.get(':nth-child(2) > .nav-link').click()
      cy.get('.col-md-9 > .form-control').click({force: true}).type('testador executando testes')
      cy.get('.image-upload-label').selectFile('cypress/fixtures/imgTeste.jpg');
      cy.get(':nth-child(2) > .row > :nth-child(1) > .form-control').click({force: true}).type(4132323232)
      cy.get(':nth-child(2) > .row > :nth-child(2) > .form-control').click().type('4132323232')
      cy.get(':nth-child(3) > .row > :nth-child(1) > .form-control').click().type('81700-300')
      cy.get(':nth-child(3) > .row > :nth-child(2) > .form-control').click().type(1000)
      cy.get(':nth-child(4) > .row > :nth-child(1) > .form-control').click().type('R 1500')
      cy.get(':nth-child(4) > .row > :nth-child(2) > .form-control').click().type('fundos')
      cy.get('select').select('Brasil')
      cy.get(':nth-child(5) > div > :nth-child(1)').click()
      cy.get(':nth-child(6) > div > :nth-child(1)').click()
      cy.get(':nth-child(7) > .btn').click()
      
      cy.wait(5000)

    })

    it.skip('CT011 - validar dowload do xml na aba fiscal', () => {

      cy.get('.btn-outline-light').click({force: true})
      cy.get('#floatingInput').type('1726149213666@primetest.com');
      cy.get('#floatingPassword').click().type('password')
      cy.get('.w-100').click()
      cy.wait(3000)
      cy.get(':nth-child(3) > .nav-link').click()
      cy.get('form > :nth-child(1) > .btn').click()
           
    })

    it.skip('CT0011-2 - validar download do xml e preenchimento do formulário', () => {
  
      const jsYaml = require('js-yaml');
    
        cy.fixture('cliente.yaml').then((cliente) => {
        const yamlData = jsYaml.load(cliente);
    
        // Verifique a estrutura do yamlData
        console.log(yamlData); // Verifique o conteúdo do yamlData
    
        // Acesso baseado na estrutura real do YAML
        const cnpjDeclarante = yamlData.eFinanceira?.evtMovOpFin?.ideDeclarante?.cnpjDeclarante || '';
        const tipoDeclarado = yamlData.eFinanceira?.evtMovOpFin?.ideDeclarado?.tpDeclarado || '';
        const niDeclarado = yamlData.eFinanceira?.evtMovOpFin?.ideDeclarado?.NIDeclarado || '';
        const paisEmissaoNIF = yamlData.eFinanceira?.evtMovOpFin?.ideDeclarado?.NIF?.PaisEmissaoNIF || '';
        const nomeDeclarado = yamlData.eFinanceira?.evtMovOpFin?.ideDeclarado?.NomeDeclarado || '';
        const nomePJ = yamlData.eFinanceira?.evtMovOpFin?.ideDeclarado?.NomeOutros?.NomePJ?.Nome || '';
        const endereco = yamlData.eFinanceira?.evtMovOpFin?.ideDeclarado?.EnderecoLivre || '';
        const pais = yamlData.eFinanceira?.evtMovOpFin?.ideDeclarado?.PaisEndereco?.Pais || '';

         // Verifica é um array e trata
        const tituloArray = yamlData.eFinanceira?.evtMovOpFin?.ideDeclarado?.Proprietarios?.NomeOutros?.NomePF?.Titulo || [];
        const titulo = Array.isArray(tituloArray) ? tituloArray.join(', ') : '';

        const primeiroNome = yamlData.eFinanceira?.evtMovOpFin?.ideDeclarado?.Proprietarios?.NomeOutros?.NomePF?.PrimeiroNome?.Nome || '';
        const nomeMeioArray = yamlData.eFinanceira?.evtMovOpFin?.ideDeclarado?.Proprietarios?.NomeOutros?.NomePF?.MeioNome || [];
        const nomeMeio = Array.isArray(nomeMeioArray) ? nomeMeioArray.map(nm => nm.Nome).join(', ') : '';
        const prefixo = yamlData.eFinanceira?.evtMovOpFin?.ideDeclarado?.Proprietarios?.NomeOutros?.NomePF?.PrefixoNome?.Nome || '';
        const ultimoNome = yamlData.eFinanceira?.evtMovOpFin?.ideDeclarado?.Proprietarios?.NomeOutros?.NomePF?.UltimoNome?.Nome || '';
        
        // Verifique se as propriedades existem antes de tentar usar
        expect(yamlData).to.have.nested.property('eFinanceira.evtMovOpFin.ideDeclarante.cnpjDeclarante');

      //acessa formulario e insere dados 
        cy.get('.btn-outline-light').click({force: true})
        cy.get('#floatingInput').type('1726149213666@primetest.com');
        cy.get('#floatingPassword').click().type('password')
        cy.get('.w-100').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .nav-link').click()
        
        // Preenche o formulário com base nos dados do YAML
        cy.get('#cnpjDeclarante').type(cnpjDeclarante);
        cy.get('#tipoDeclarado').type(tipoDeclarado);
        cy.get('#niDeclarado').type(niDeclarado);
        cy.get('#paisEmissaoNIF').type(paisEmissaoNIF);
        cy.get('#nomeDeclarado').type(nomeDeclarado);
        cy.get('#nomePJ').type(nomePJ);
        cy.get('#endereco').type(endereco);
        cy.get('#pais').type(pais);
        cy.get('#titulo').type(titulo);
        cy.get('#primeiroNome').type(primeiroNome);
        cy.get('#nomeMeio').type(nomeMeio);
        cy.get('#prefixo').type(prefixo);
        cy.get('#ultimoNome').type(ultimoNome);
      
    
        // Envia o formulário
        cy.get(':nth-child(2) > .btn').click()
        cy.get('.close').click()
  
      });
    });

    it.skip('CT012 - validar importar o arquivo xls', () => {

      cy.get('.btn-outline-light').click({force: true})
      cy.get('#floatingInput').type('1726149213666@primetest.com');
      cy.get('#floatingPassword').click().type('password')
      cy.get('.w-100').click()
      cy.wait(5000)
      cy.get(':nth-child(4) > .nav-link').click()
      cy.get('.form-group > .form-control').selectFile('cypress/fixtures/excelTeste.xls')
     
    })

    it.skip('CT013 - validar importar o arquivo xls', () => {

      cy.get('.btn-outline-light').click({force: true})
      cy.get('#floatingInput').type('1726149213666@primetest.com');
      cy.get('#floatingPassword').click().type('password')
      cy.get('.w-100').click()
      cy.wait(5000)
      cy.get('.navbar-finalizar > .nav-link').click({force: true})
      cy.get('.btn-primary-modal').click()
      cy.get('#nome').click().type('Testador testando os testes')
      cy.get('#telefone').click().type(4132323232)
      cy.get('#githubLink').click().type('https://github.com/orlandoalves/hello-world-')
      cy.get('#nomeRecrutador').click().type('Kely')
      cy.get('.modal-buttons > .btn').click()

      
    })

    it.skip('CT014 - recuperar senha de acesso', () => {

      cy.get('.btn-outline-light').click()
      cy.get('[href="/app/resetsenha"]').click()
      cy.get('#floatingInput').click().type('1726149213666@primetest.com')
      cy.get('.w-100').click()
      cy.get('.alert').should('have.text', 'Email enviado com sucesso')

    })

    it('CT015 - recuperar senha de acesso', () => {

      cy.get('.btn-outline-light').click()
      cy.get('#floatingInput').type('1726149213666@primetest.com');
      cy.get('#floatingPassword').click().type('password')
      cy.get('.w-100').click()
      cy.wait(5000)
      cy.get('.navbar-finalizar > .nav-link').click({force: true})
      cy.get('.btn-danger-modal').click()
    

    })
      


    });
  
    
  