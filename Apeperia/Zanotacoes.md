1.  Ferramentas, unidades e imagens
    /*
    REM é uma unidade relativa à propriedade font-size da tag <html>, portanto se a tag <html> tem 16px de font-size 1 REM é equivalente à 16px. EM é relativa à propriedade font-size da tag mãe, portanto se a tag mãe tiver um font-size de 16px 1 EM é equivalente à 16px.
    REM vem de “Root ephemeral” que em uma tradução técnica fica “variável à raiz”, ou seja, é variável em relação à propriedade font-size da tag raiz (HTML). EM vem de “ephemeral” que significa “variável”, e ela é variável à propriedade font-size da tag mãe.

            Quando vamos trabalhar com imagens, o formato SVG apresenta uma grande vantagem por ser leve e não perder qualidade quando ampliado por ser gerado por uma instrução de computador.
                Quando é recomendado usar imagens do tipo SVG?
                    Em imagens simplificadas, ícones e logotipos. SVG não consegue manter detalhes de uma imagem complexa.

    /*

    Nessa aula, aprendemos:
    Analisar e desmembrar o layout recebido;
    Usar o EMMET para criar blocos de código HTML;
    Usar as unidades relativas REM e EM;
    Tipos de imagens e SVGs;


02. Layout mobile e variáveis CSS
    Na hora de seguir um conceito de desenvolvimento, seja mobile-first ou desktop-first, não existe certo ou errado. Cada um deles tem suas vantagens e desvantagens, e elas devem ser avaliadas de acordo com as necessidades do projeto.
        Algumas motivações para usar mobile-first:
            Grande parte dos acessos e vendas vem de dispositivos mobile
            O design é minimalista e simplificado
            Foco em conteúdo
        Algumas motivações para usar desktop-first:
            A interface pode ter diversas features mais ricas
            Maior capacidade de banda e processamento
            O produto é otimizado para desktop (ex: Google Docs)
        Então na hora de desenvolver é importante analisar todos os pontos que vão influenciar no projeto. Clientes, features, custo e linguagem visual, são alguns dos pontos que vão favorecer uma abordagem sobre a outra.

        Declaramos dentro de algum seletor (que costuma ser o :root {}) escrevendo --nome-da-variavel: valor, e chamamos as variáveis seguindo uma sintaxe, usamos uma função var e passando o nome da variável dentro dessa função.
            Precisamos declarar variáveis CSS dentro de algum seletor. Para usar essas variáveis precisamos seguir a sintaxe: var(--nome-da-variavel)

        Nessa aula, aprendemos:
            O que é e para que serve mobile-first;
            Como funciona o initial-scale dentro do conteúdo do Viewport;
            Como declarar e chamar variáveis CSS;


03. Particularidades de telas
    Unidades de viewport são unidades relativas, como por exemplo, porcentagem.
        vw é especificamente relacionada à largura da tela (em pixel).


    Nessa aula, aprendemos:
        Utilizar as unidades de viewport;
        Identificar a diferença entre unidades absolutas e relativas;
        Analisar as limitações físicas de dispositivos;


04. Trabalhando a semântica html
    Quando falamos de código semântico, estamos falando de escrever um código legível, com conteúdo bem descrito e bem estruturado.
        Quais as principais vantagens em escrevemos um código semântico?
            Para atendermos aos requisitos de acessibilidade.
                Correto! Temos que deixar nossa página mais inclusiva possível e para isso precisamos utilizar todas as tags corretas para demarcar todo o conteúdo da página corretamente.
            Para que outras pessoas desenvolvedoras possam entender.
                Correto! Temos que lembrar que o nosso código talvez precise passar por outras pessoas e elas precisam entender o que está acontecendo quando ler nosso código.
            Para ferramentas de indexação.
                Correto! Existem vários bots (ferramentas automáticas) que verificam todo o código do nosso projeto, e depois validam para mudar o posicionamento da nossa página nos resultados de motores de busca (ex: Google, Bing, Yahoo).

    Nessa aula, aprendemos:
        Como lidar com as imagens do layout que recebemos;
        Tags e atributos que têm mais função de semântica do que estilo;
        A importância de escrever um código semântico;


05. Evoluindo do mobile ao desktop
        As media queries permitem que criemos páginas com estilizações diferentes no mesmo arquivo CSS por várias condições diferentes como, por exemplo, largura da tela de um dispositivo.

        Depois que terminamos de desenvolver todo o layout da página na versão mobile, é hora de ir para o próximo passo que é o layout na versão tablet, que neste caso, começa a partir de 768px de largura. Para colocar toda a estilização, sem mudar a versão mobile, precisamos usar uma media query.
            Qual alternativa apresenta a sintaxe correta da media query necessária?
                @media (min-width: 768px) { “estilização aqui” }
                    Essa resposta está correta porque está com a condição “telas com largura a partir de 768px”.
            Para saber mais sobre breakpoints e valores genéricos para dispositivos (referência em inglês):
                https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
    
    Nessa aula, aprendemos:
        Criar estilizações diferentes para diversos dispositivos com media queries;
        Adaptar estrutura e conteúdo para layouts diferentes;
        Progredir de um layout mobile até um layout para desktop;