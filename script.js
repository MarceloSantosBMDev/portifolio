document.addEventListener('DOMContentLoaded', function() {
    // 1. Controle do Tema
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Aplicar o tema salvo
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-sun', theme === 'light');
        icon.classList.toggle('fa-moon', theme === 'dark');
    }

    // 2. Navegação Suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Atualizar classe ativa na navegação
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            showNotification('Enviando sua mensagem...', 'info');
            
            try {
                const formData = new FormData(this);
                await fetch('https://formsubmit.co/ajax/marcelosantosbm06@hotmail.com', {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
                
                showNotification('Mensagem enviada com sucesso!', 'success');
                this.reset();
                
            } catch (error) {
                showNotification('Erro ao enviar. Tente novamente.', 'error');
            }
        });
    }
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // 4. Animações de Scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementPosition < windowHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };
    
    // Configuração inicial das animações
    document.querySelectorAll('.section, .project-card, .timeline-item').forEach(element => {
        element.classList.add('fade-in');
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    setTimeout(animateOnScroll, 100);

    // 5. Sistema de Pop-ups para Habilidades
    const modal = document.getElementById('skill-modal');
    const modalTitle = document.getElementById('modal-title-text');
    const modalBody = document.getElementById('modal-body');
    
    // Dados completos das habilidades
    const skillsData = {
        python: {
            title: "Python",
            icon: "fab fa-python",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 85%"></div>
                    </div>
                    <div class="skill-experience">
                        <i class="fas fa-calendar-alt"></i> 5 anos de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>Unicamp</strong> - Disciplinas de algoritmos e estruturas de dados</li>
                            <li><strong>Livros</strong> - Livros de ensino de python</li>
                            <li><strong>Coursera</strong> - Curso de python da University of Michigan</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Sistema de Análise de Dados de tarefas</h5>
                            <p>Desenvolvi um back-end em java que ultilizava analíse dados em Python, esse programa em Java iniciava o código em python que gerava dados com os arquivos json fornecidos e imprimia esses gráficos na tela</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Simulador de campeonato de futebol</h5>
                            <p>O simulador de campeonato de futebol foi inteiramente contruído em python, tanto seu backend quanto seu frontend, usando bibliotecas para administração de banco de dados e de interface gráfica</p>
                        </div>
                    </div>
                    
                    <div class="certificates">
                        <h4><i class="fas fa-award"></i> Certificados:</h4>
                        <div class="certificate-badge">
                            <i class="fas fa-certificate"></i> Python para Iniciantes - University of Michigan
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h4><i class="fas fa-road"></i> Próximos Passos:</h4>
                        <p>Estou fortalecendo meu aprendizado nas bibliotecas de analise de dados como pandas</p>
                    </div>
                </div>
            `
        },
        javascript: {
            title: "JavaScript",
            icon: "fab fa-js",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 75%"></div>
                    </div>
                    <div class="skill-experience">
                        <i class="fas fa-calendar-alt"></i> 2 anos de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>ETEC</strong> - Fundamentos de programação web (2021)</li>
                            <li><strong>Projetos Pessoais</strong> - Desenvolvimento de jogos em um site HTML, CSS e JS</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Jogos bases em JS</h5>
                            <p>O site desenvolvido tem diversos jogos básicos como jogo da mémoria, jogo da velha, jogo da forca e jogo de NIM, junto de um sistema de campeonato de dois jogadores, onde os dois jogam um contra o outro até algum completar 5 pontos.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Site da Liga de StartUps</h5>
                            <p>Foi usado no site da Liga de StartUps, diversas</p>
                        </div>
                    </div>
                    

                    </div>
                    
                    <div class="next-steps">
                        <h4><i class="fas fa-road"></i> Próximos Passos:</h4>
                        <p>Estou me aprofundando em React e Node.js para me tornar Full Stack Developer, com foco em construir aplicações escaláveis.</p>
                    </div>
                </div>
            `
        },
        bootstrap: { title: "Bootstrap",
            icon: "fab fa-bootstrap",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 70%"></div>
                    </div>
                    <div class="skill-experience">
                        <i class="fas fa-calendar-alt"></i> 1 ano de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>ETEC</strong> - Disciplina ensinada em Node na ETEC</li>
                            <li><strong>TCC técnico</strong> - Uso do framework em meus projetos</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>TCC do técnico</h5>
                            <p>Durante a disciplina de programação web do técnico, foi ensinado a usar o framework bootstrap, esse mesmo aprendizado foi colocado em prática em meu TCC que se referia a uma loja virtual.</p>
                        </div>
                        
                </div>
            `},
        node: {
            title: "Node.js",
            icon: "fab fa-node-js",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 70%"></div>
                    </div>
                    <div class="skill-experience">
                        <i class="fas fa-calendar-alt"></i> 1 ano de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>ETEC</strong> - Disciplina ensinada em Node na ETEC</li>
                            <li><strong>TCC técnico</strong> - Prótotipo do TCC feito em Node</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Backend do site de vendas para o TCC da ETEC</h5>
                            <p>O primeiro prótopipo do TCC foi feito em Node.js, ligando o backend com um banco de dados SQL, do terceiro protótipo pra cima, deixou de ser usado o node.</p>
                        </div>
                        
                </div>
            `
        },

        mysql: {
            title: "MySQL",
            icon: "fas fa-database",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 70%"></div>
                    </div>
                    <div class="skill-experience">
                        <i class="fas fa-calendar-alt"></i> 1 ano de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>Projetos</strong> - Projetos com banco de dados</li>
                            <li><strong>TCC técnico</strong> - Prótotipo do TCC com banco de dados MySQL integrado</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Backend do site de vendas para o TCC da ETEC</h5>
                            <p>O primeiro prótopipo do TCC foi feito em Node.js, ligando o backend com um banco de dados SQL, do terceiro protótipo pra cima, deixou de ser usado o node.</p>
                        </div>
                        
                </div>
            `
        },

        html: {
            title: "HTML5",
            icon: "fab fa-html5",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 90%"></div>
                    </div>
                    <div class="skill-experience">
                        <i class="fas fa-calendar-alt"></i> 2 anos de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>ETEC</strong> - Curso técnico com disciplina em desenvolvimento WEB I e II</li>
                            <li><strong>Projetos Pessoais</strong> - Desenvolvimento de mais de 20 websites</li>
                            <li><strong>TCC</strong> - TCC da ETEC usando HTML5</li>

                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Simulador de campeonato de futebol</h5>
                            <p>O simulador de campeonato de futebol em python tem um site para download criado em HTML5, o site é apenas para o download do código da aplicação Python.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Este Portífolio</h5>
                            <p>Este portífolio foi criado em HTML5, CSS3 e JavaScript sendo um projeto relevante, ele apresenta responsividade também.</p>
                        </div>
                    </div>
                 
              
                </div>
            `
        },
        css: {
            title: "CSS3",
            icon: "fab fa-css3-alt",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 85%"></div>
                    </div>
                    <div class="skill-experience">
                        <i class="fas fa-calendar-alt"></i> 3 anos de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>TCC</strong> - Uso de CSS3 no TCC do técnico</li>
                            <li><strong>Portífolio</strong> - Este Portífolio foi desenvolvido com CSS3</li>
                            <li><strong>Projetos Pessoais</strong> - Projetos pessoais usando CSS3</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Esse Portífolio</h5>
                            <p>Esse Portífolio foi desenvolvido com sua parte visual em CSS3, como colorações do site.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Site do projeto de simulação de campeonato de futebol em python</h5>
                            <p>Desenvolvimento de sistema de design com variáveis CSS e componentes estilizados.</p>
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h4><i class="fas fa-road"></i> Próximos Passos:</h4>
                        <p>Dominar CSS-in-JS e aprofundar em técnicas de performance para animações complexas.</p>
                    </div>
                </div>
            `
        },
        java: {
            title: "Java",
            icon: "fab fa-java",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 75%"></div>
                    </div>
                    <div class="skill-experience">
                        <i class="fas fa-calendar-alt"></i> 3 anos de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>ETEC</strong> - Curso de Java</li>
                            <li><strong>Unicamp</strong> - Disciplinas de programação orientada a objetos na ETEC</li>
                            <li><strong>Udemy</strong> - Sistema de administração de salas de aula</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Sistema de administração de salas de aula</h5>
                            <p>Sistema de administração escolar que gera gráficos em python em relação aos alunos que fizeram e que não fizeram a prova, mostrando a porcentagem que foi e que não foi bem, o código além de usar Java em seu front-end e em algumas outras funções do back-end, usa a linguagem python para analise de dados e impressão de gráficos.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Jogo 2D</h5>
                            <p>Jogo simples desenvolvido com JavaFX para disciplina na Unicamp.</p>
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h4><i class="fas fa-road"></i> Próximos Passos:</h4>
                        <p>Aprender Spring Boot para desenvolvimento de aplicações empresariais.</p>
                    </div>
                </div>
            `
        },
        c: {
            title: "Linguagem C",
            icon: "fas fa-code",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 70%"></div>
                    </div>
                    <div class="skill-experience">
                        <i class="fas fa-calendar-alt"></i> 1.5 anos de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>ETEC</strong> - Disciplina de programação usando C como linguagem</li>
                            <li><strong>Unicamp</strong> - Disciplinas de programação I e II e programação orientada a objetos usando a linguagem C e C++</li>
                            <li><strong>Projetos</strong> - Projetos feitos usando C e C++</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Analise de sentimentos</h5>
                            <p>Na disciplina de programação e algoritimos foi usado a línguagem C, durante a disciplina toda foi usada a línguagem C, para todos os trabalhos, dando destaque para o trabalho "Analise de sentimentos" onde um código em C precisava analisar um digitado pelo usuário e identificar a polaridade do texto, quantas palavras negativas e positivas existiam. Caso interesse de revisão, fique a vontade a pegar o código em meu github.</p>
                        </div>
                        <div class="project-item">
                            <h5>Sistema de moedas virtuais (FT Coin - Discíplina de programação orientada a objetos I)</h5>
                            <p>Na disciplina de Programação Orientada a Objetos I, foi dado um trabalho final onde precisavamos fazer um sistemas de moeda virtual vinculado a um banco de dados, "Maria DB", esse banco de dados armazenava o valor da moeda, onde o código analisava a data passada pelo usuário de compra e venda e também era possível visualizar o valor de ganho e perda do cliente em valor de R$ </p>
                        </div>
                    </div>
                </div>
            `
        },
        git: {
            title: "Git",
            icon: "fab fa-git-alt",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 80%"></div>
                    </div>
                    <div class="skill-experience">
                        <i class="fas fa-calendar-alt"></i> 3 anos de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>ETEC</strong> - Uso em disciplinas na ETEC</li>
                            <li><strong>Pesquisas</strong> - Pesquisas de como usar comandos espécificos no git</li>
                            <li><strong>Experiência Acadêmica</strong> - Uso diário em projetos</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Fluxos de Trabalho:</h4>
                        <div class="project-item">
                            <h5>Git Flow</h5>
                            <p>Implementação de fluxo de trabalho com branches principais e de features.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Hooks Customizados</h5>
                            <p>Criação de hooks para validação de código e mensagens de commit.</p>
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h4><i class="fas fa-road"></i> Próximos Passos:</h4>
                        <p>Implementar CI/CD integrado com Git em projetos pessoais.</p>
                    </div>
                </div>
            `
        },
        github: {
            title: "GitHub",
            icon: "fab fa-github",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 85%"></div>
                    </div>
                    <div class="skill-experience">
                        <i class="fas fa-calendar-alt"></i> 2 anos de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>Projetos Pessoais</strong> - Hospedagem de repositórios</li>
                            <li><strong>Contribuições Open Source</strong> - Participação em projetos colaborativos</li>
                            <li><strong>GitHub Docs</strong> - Hospedagem de host para sites HTML</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Portfólio</h5>
                            <p>Este portfólio está versionado de forma privada no GitHub com histórico de commits organizado, se tiver interesse em ver o código desse portifolio, não hesite em entrar em contato comigo.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Projetos Colaborativos</h5>
                            <p>Participação em projetos da faculdade com hospedagem no github de forma colaborativa, como um trabalho em C que fiz onde tivemos que fazer um sistema que gerencia uma PUB(public house).</p>
                        </div>
                        <div class="project-item">
                            <h5>Hospedagem de um projeto</h5>
                            <p>Hospedei um projeto em python que tenho, que simula um campeonato de futebol brasileiro desde o inicio do desenvolvimento no github, hoje esse repositorio conta com mais de 50 commits e 3 branches, sendo uma pra versão oficial, uma pra versão teste e outra para o site de download da aplicação.</p>
                        </div>
                    </div>
                    
                    <div class="certificates">
                        <h4><i class="fas fa-award"></i> Certificados:</h4>
                        <div class="certificate-badge">
                            <i class="fas fa-certificate"></i> GitHub Actions - GitHub (2023)
                        </div>
                    </div>
                </div>
            `
        },
        vscode: {
            title: "VScode",
            icon: "fas fa-code",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 85%"></div>
                    </div>
                    <div class="skill-experience">
                        <i class="fas fa-calendar-alt"></i> 4 anos de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>Projetos Pessoais</strong> - Edição e criação de projetos</li>
                            <li><strong>Desenvolvimento do TCC do técnico</strong> - TCC</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Portfólio</h5>
                            <p>Este portfólio foi totalmente desenvolvido pelo VScode, tanto seus scripts, quanto seu HTML e seu CSS.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>TCC</h5>
                            <p>O TCC do técnico foi desenvolvido pelo VScode, junto da maioria dos projetos do técnico que envvolviam desenvolvimento..</p>
                        </div>
                    </div>
                    

                    </div>
                </div>
            `
        },
        comunicacao: {
            title: "Comunicação",
            icon: "fas fa-comments",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 90%"></div>
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Desenvolvi:</h4>
                        <ul>
                            <li><strong>Apresentações Acadêmicas</strong> - Mais de 20 apresentações de trabalhos e projetos</li>
                            <li><strong>Liderança em Projetos</strong> - Coordenação de equipes na faculdade e técnico</li>
                            <li><strong>Marketing</strong> - Gravação de videos para as redes sociais da CDI</li>
                            <li><strong>Venda</strong> - Venda de tênis</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Experiências Relevantes:</h4>
                        <div class="project-item">
                            <h5>Apresentação do TCC do técnico</h5>
                            <p>Apresentei meu TCC referente a uma e-shop de tênis de luxo, desenvolvido por mim e pelo meu grupo, com um front-end e back-end, foi apresentado em 2022.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Venda de produtos</h5>
                            <p>Durante os anos de 2021 a 2022 eu vendia tênis, eu vendia tênis de uma loja criada por mim mesmo, chamada SneakerHouse, e durante essa época, eu era quem precisava fazer o marketing dos meus produtos, por conta disso, eu aprendi a me comunicar melhor com as pessoas, no objetivo de faza-las terem interesse nos meus produtos.</p>
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h4><i class="fas fa-road"></i> Próximos Passos:</h4>
                        <p>Melhorar habilidades de comunicação técnica para reuniões com stakeholders.</p>
                    </div>
                </div>
            `
        },
        lideranca: {
            title: "Liderança",
            icon: "fas fa-users",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 80%"></div>
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Desenvolvi:</h4>
                        <ul>
                            <li><strong>Representante de Turma</strong> - Ensino médio, ETEC e Unicamp</li>
                            <li><strong>Coordenação de Projetos</strong> - Liderança em 2 projetos acadêmicos</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Experiências Relevantes:</h4>
                        <div class="project-item">
                            <h5>Liderança da área de Marketing da CDI(Comissão discente de informatíca)</h5>
                            <p>Assumi a liderança suplente na área de marketing da CDI no ano de 2025, onde estou até o momento e tanto no meu tempo como membro quanto no meu tempo como lider, aprendi como um membro de uma equipe deve ser tratado para que não se sinta desconfortável no ambiente, e como um lider de uma equipe deve trabalhar, tentando de toda forma fazer com que todos os membros não se sintam confusos com suas tarefas.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Representante de Sala no ensino médio</h5>
                            <p>Fui representante de sala no ensino médio durante o ano de 2022, onde estava no meu terceiro ano onde precisei administrar a venda de camisas da sala, administrar a sala referente a assuntos escolares.</p>
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h4><i class="fas fa-road"></i> Próximos Passos:</h4>
                        <p>Participar de treinamentos em gestão ágil de equipes.</p>
                    </div>
                </div>
            `
        },

        resolucao: {
            title: "Resolução de problemas",
            icon: "fas fa-lightbulb",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 80%"></div>
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Desenvolvi:</h4>
                        <ul>
                            <li><strong>Representante de Turma</strong> - Fieb Dagmar Ribas Trindade</li>
                            <li><strong>Disciplina da UNICAMP</strong> - Aulas de resolução de problema pela UNICAMP em 2024</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Experiências Relevantes:</h4>
                        <div class="project-item">
                            <h5>Participação na CDI (Comissão discente de informatíca)</h5>
                            <p>Participação na CDI durante o ano 2024 inteiro e lider suplente na área de marketing em 2025, foi desenvolvido bastante habilidade em resolver problemas de maneira rapída.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Aula de Resolução de problemas</h5>
                            <p>Durante o segundo semestre na faculdade, tive a disciplina 'Resolução de problemas', que ajudava seus alunos a desenvolverem essa habilidade, lá os alunos em um grupo geral da sala deviam administrar uma palestra de um convidado externo, os alunos foram divididos em sub-grupos e cada um desses precisavam cuidar de algum problema na palestra, meu grupo precisou tratar com as parcerias, onde conseguimos parceria com uma influenciadora de maquiagem.</p>
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h4><i class="fas fa-road"></i> Próximos Passos:</h4>
                        <p>Participar de equipes de gestão que precisam resolver problemas empresáriais.</p>
                    </div>
                </div>
            `
        },
    
        agil: {
            title: "Metódologias ágeis",
            icon: "fas fa-tasks",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 80%"></div>
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Desenvolvi:</h4>
                        <ul>
                            <li><strong>Desenvolvimento de trabalhos</strong> - Ensino Médio, UNICAMP e ETEC</li>
                            <li><strong>Entrega de projetos seguindo um padrão com datas previstas</strong> - CDI(Comissão Discente de informatíca)</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Experiências Relevantes:</h4>
                        <div class="project-item">
                            <h5>Entrega de projetos seguindo padrão</h5>
                            <p>Durante minha participação como membro na CDI, desenvolvi um projeto onde eu precisava fazer postagens em colaboração com a Alura, eu fiquei responsavél por todos os posts e desenvolvi todos eles de acordo com um padrão que foi me dado.</p>
                        </div>
                        
                    </div>
                    
                    <div class="next-steps">
                        <h4><i class="fas fa-road"></i> Próximos Passos:</h4>
                        <p>Desenvolver projetos acadêmicos ou empresariais mais elaborados.</p>
                    </div>
                </div>
            `
        }
    };

    // Funções para controle do modal
    function openSkillModal(skillId) {
        const skillData = skillsData[skillId];
        const iconElement = document.getElementById('modal-icon');
        
        // Atualiza o ícone
        iconElement.className = 'skill-icon';
        iconElement.classList.add(...skillData.icon.split(' '));
        
        // Atualiza conteúdo
        modalTitle.textContent = skillData.title;
        modalBody.innerHTML = skillData.content;
        
        // Exibe o modal
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Adiciona animação
        setTimeout(() => {
            document.querySelector('.modal-content').classList.add('animated');
        }, 10);
    }

    function closeSkillModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event listeners para os botões de habilidades
    document.querySelectorAll('.skill-btn').forEach(button => {
        button.addEventListener('click', function() {
            const skillId = this.getAttribute('data-skill');
            openSkillModal(skillId);
        });
    });

    // Múltiplas formas de fechar o modal
    document.querySelectorAll('.close-modal, .close-btn').forEach(btn => {
        btn.addEventListener('click', closeSkillModal);
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeSkillModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeSkillModal();
        }
    });

    // 6. Ativar link ativo na navegação
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 7. Efeitos de Hover Interativos
    document.querySelectorAll('.skill-btn, .project-card, .btn, .social-link').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--box-shadow)';
        });
    });

    // 8. Ativar animações quando elementos entram na viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});