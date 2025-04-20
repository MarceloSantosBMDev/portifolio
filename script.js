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
                await fetch('https://formsubmit.co/ajax/nagatofx7@gmail.com', {
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
                        <i class="fas fa-calendar-alt"></i> 3 anos de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>ETEC</strong> - Curso técnico com ênfase em Python para automação (2020-2022)</li>
                            <li><strong>Unicamp</strong> - Disciplinas de algoritmos e estruturas de dados (2023-atual)</li>
                            <li><strong>Alura</strong> - Cursos de Django e Flask (72 horas, 2022)</li>
                            <li><strong>Udemy</strong> - Python para Data Science (40 horas, 2023)</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Sistema de Análise de Dados para TCC</h5>
                            <p>Desenvolvi um sistema completo para processar dados de pesquisas escolares usando Pandas e Matplotlib, reduzindo o tempo de análise de 2 semanas para 2 dias.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Bot para Discord</h5>
                            <p>Criei um bot com mais de 50 comandos para moderar servidores, incluindo sistemas de quizzes e ranking de membros, utilizando discord.py.</p>
                        </div>
                    </div>
                    
                    <div class="certificates">
                        <h4><i class="fas fa-award"></i> Certificados:</h4>
                        <div class="certificate-badge">
                            <i class="fas fa-certificate"></i> Python para Data Science - Udemy (2023)
                        </div>
                        <div class="certificate-badge">
                            <i class="fas fa-certificate"></i> Django Professional - Alura (2022)
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h4><i class="fas fa-road"></i> Próximos Passos:</h4>
                        <p>Estou me aprofundando em Flask para desenvolvimento de APIs RESTful e em Pandas para análise de dados mais avançada.</p>
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
                            <li><strong>Rocketseat</strong> - Bootcamp JavaScript (40 horas, 2022)</li>
                            <li><strong>FreeCodeCamp</strong> - Certificação JavaScript Algorithms (300 horas, 2023)</li>
                            <li><strong>Projetos Pessoais</strong> - Desenvolvimento de 10+ aplicações práticas</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Gerenciador de Tarefas</h5>
                            <p>Aplicação completa com Vue.js que sincroniza tarefas entre dispositivos usando Firebase, com autenticação e banco de dados em tempo real.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Jogo da Memória</h5>
                            <p>Jogo educativo para crianças com sistema de pontuação e níveis progressivos, desenvolvido com JavaScript puro.</p>
                        </div>
                    </div>
                    
                    <div class="certificates">
                        <h4><i class="fas fa-award"></i> Certificados:</h4>
                        <div class="certificate-badge">
                            <i class="fas fa-certificate"></i> JavaScript Algorithms - FreeCodeCamp (2023)
                        </div>
                        <div class="certificate-badge">
                            <i class="fas fa-certificate"></i> Modern JavaScript - Rocketseat (2022)
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h4><i class="fas fa-road"></i> Próximos Passos:</h4>
                        <p>Estou me aprofundando em React e Node.js para me tornar Full Stack Developer, com foco em construir aplicações escaláveis.</p>
                    </div>
                </div>
            `
        },
        react: {
            title: "React",
            icon: "fab fa-react",
            content: `
                <div class="skill-header">
                    <div class="skill-level">
                        <div class="level-bar" style="width: 65%"></div>
                    </div>
                    <div class="skill-experience">
                        <i class="fas fa-calendar-alt"></i> 1 ano de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>Rocketseat</strong> - Bootcamp Ignite (120 horas, 2023)</li>
                            <li><strong>Alura</strong> - React com TypeScript (40 horas, 2023)</li>
                            <li><strong>Documentação Oficial</strong> - Estudo constante da documentação e projetos práticos</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Portfólio Interativo</h5>
                            <p>Este portfólio que você está vendo foi construído com React, utilizando hooks e context API para gerenciamento de estado.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>App de Clima</h5>
                            <p>Aplicativo que consome API de previsão do tempo, com busca por cidade e histórico de consultas, usando React hooks e axios.</p>
                        </div>
                    </div>
                    
                    <div class="certificates">
                        <h4><i class="fas fa-award"></i> Certificados:</h4>
                        <div class="certificate-badge">
                            <i class="fas fa-certificate"></i> React Fundamentals - Rocketseat (2023)
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h4><i class="fas fa-road"></i> Próximos Passos:</h4>
                        <p>Dominar Next.js para SSR e aprofundar em testes com Jest/React Testing Library para garantir qualidade de código.</p>
                    </div>
                </div>
            `
        },
        node: {
            title: "Node.js",
            icon: "fab fa-node-js",
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
                            <li><strong>Rocketseat</strong> - Bootcamp Node.js (80 horas, 2022)</li>
                            <li><strong>Udemy</strong> - Node.js com Express e MongoDB (35 horas, 2023)</li>
                            <li><strong>Projeto Profissional</strong> - Desenvolvimento de APIs na TechSolutions</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>API de Gerenciamento</h5>
                            <p>API RESTful desenvolvida para sistema interno da TechSolutions, com autenticação JWT e integração com MongoDB.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Chat em Tempo Real</h5>
                            <p>Aplicação de chat utilizando Socket.io para comunicação em tempo real entre clientes.</p>
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h4><i class="fas fa-road"></i> Próximos Passos:</h4>
                        <p>Aprofundar conhecimentos em arquitetura de microsserviços e implementação de GraphQL.</p>
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
                        <i class="fas fa-calendar-alt"></i> 4 anos de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>ETEC</strong> - Curso técnico com ênfase em desenvolvimento web (2020-2022)</li>
                            <li><strong>FreeCodeCamp</strong> - Certificação Responsive Web Design (300 horas, 2021)</li>
                            <li><strong>Projetos Pessoais</strong> - Desenvolvimento de mais de 20 websites</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Landing Pages Responsivas</h5>
                            <p>Desenvolvimento de diversas landing pages com HTML semântico e acessibilidade.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Sistema de Componentes</h5>
                            <p>Criação de biblioteca de componentes HTML/CSS reutilizáveis para projetos internos.</p>
                        </div>
                    </div>
                    
                    <div class="certificates">
                        <h4><i class="fas fa-award"></i> Certificados:</h4>
                        <div class="certificate-badge">
                            <i class="fas fa-certificate"></i> Responsive Web Design - FreeCodeCamp (2021)
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
                        <i class="fas fa-calendar-alt"></i> 4 anos de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>ETEC</strong> - Curso técnico com projetos práticos (2020-2022)</li>
                            <li><strong>CSS Tricks</strong> - Estudo de artigos e tutoriais avançados</li>
                            <li><strong>Alura</strong> - CSS Grid e Flexbox (20 horas, 2022)</li>
                            <li><strong>Projetos Pessoais</strong> - Experimentação constante com novas técnicas</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Animações CSS</h5>
                            <p>Criação de diversas animações e transições para melhorar UX em projetos web.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Design System</h5>
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
                        <i class="fas fa-calendar-alt"></i> 2 anos de experiência
                    </div>
                </div>
                
                <div class="skill-content">
                    <div class="learning-path">
                        <h4><i class="fas fa-graduation-cap"></i> Como Aprendi:</h4>
                        <ul>
                            <li><strong>ETEC</strong> - Curso técnico com Java OO (2020-2022)</li>
                            <li><strong>Unicamp</strong> - Disciplinas de programação orientada a objetos</li>
                            <li><strong>Udemy</strong> - Java Completo (60 horas, 2022)</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Sistema Bancário</h5>
                            <p>Aplicação console para simulação de operações bancárias, com classes para conta, cliente e transações.</p>
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
                            <li><strong>ETEC</strong> - Fundamentos de programação (2020)</li>
                            <li><strong>Unicamp</strong> - Disciplinas de estrutura de dados e algoritmos</li>
                            <li><strong>LeetCode</strong> - Resolução de problemas com C</li>
                        </ul>
                    </div>
                    
                    <div class="projects">
                        <h4><i class="fas fa-code-branch"></i> Projetos Relevantes:</h4>
                        <div class="project-item">
                            <h5>Gerenciador de Memória</h5>
                            <p>Implementação de alocador dinâmico de memória para disciplina de sistemas operacionais.</p>
                        </div>
                        
                        <div class="project-item">
                            <h5>Jogo da Velha</h5>
                            <p>Implementação em C com interface de console para disciplina de algoritmos.</p>
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
                            <li><strong>ETEC</strong> - Introdução ao controle de versão (2020)</li>
                            <li><strong>Udemy</strong> - Git Completo (20 horas, 2021)</li>
                            <li><strong>Experiência Profissional</strong> - Uso diário em projetos</li>
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