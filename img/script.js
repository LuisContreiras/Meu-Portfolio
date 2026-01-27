window.onbeforeunload = function () { window.scrollTo(0, 0); };

document.addEventListener('DOMContentLoaded', () => {
    // Reset de Hash
    if (window.location.hash) {
        window.history.replaceState("", document.title, window.location.pathname);
        window.scrollTo(0, 0);
    }

    // Efeito de Digitação
    const textElement = document.getElementById("typing-text");
    const textToType = "Hello, World!";
    let index = 0;
    let isDeleting = false;
    function typeEffect() {
        const currentText = textElement.textContent;

        if (isDeleting) {
            // Remove a última letra
            textElement.textContent = textToType.substring(0, index - 1);
            index--;
        } else {
            // Adiciona a próxima letra
            textElement.textContent = textToType.substring(0, index + 1);
            index++;
        }

        // Velocidade: apagar é mais rápido que escrever
        let typingSpeed = isDeleting ? 100 : 150;

        // Se terminou de escrever
        if (!isDeleting && index === textToType.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pausa antes de começar a apagar
        }
        // Se terminou de apagar
        else if (isDeleting && index === 0) {
            isDeleting = false;
            typingSpeed = 500; // Pausa antes de escrever de novo
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Inicie a função dentro do seu DOMContentLoaded
    setTimeout(typeEffect, 1000);

    // Revelação de Seções (Fade-in)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Lógica do Modal
const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close-modal");

// Dados dos projetos
const projectData = {
    infra : {
        title: "InfraCB",
        tech: "HTML, CSS, JavaScript",
        desc: "O InfraCB foi um projeto acadêmico que me proporcionou a primeira experiência prática com tecnologia aplicada a um problema real da sociedade, além de reforçar a importância do trabalho em equipe. O sistema desenvolvido permite que cidadãos registrem, de forma simples e acessível, problemas de saneamento em seus bairros. Essas informações são organizadas e transformadas em um mapeamento que auxilia na identificação de áreas prioritárias para manutenção, contribuindo para a melhoria dos serviços públicos e da qualidade de vida da população.",
        link:"https://luiscontreiras.github.io/infraCB/"
    },
    media : {
        title: "Cálculo de Média",
        tech: "JavaScript, Logística Aritmética",
        desc: "O Sistema de Cálculo de Média surgiu a partir de uma demanda real de um familiar, que precisava calcular manualmente suas notas após a realização de simulados e provas de uma banca avaliadora. Ao identificar essa dificuldade recorrente, desenvolvi uma solução simples e eficiente para automatizar os cálculos, reduzindo erros e otimizando o tempo do usuário. O projeto reforçou minha capacidade de compreender necessidades reais, transformar problemas cotidianos em soluções tecnológicas e utilizar a programação como ferramenta de apoio ao usuário final.",
        link: "https://luiscontreiras.github.io/SistemadeCalculo/"
    },
};

// Abrir Modal
// Abrir Modal (Versão Única e Inteligente)
document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
    const button = e.currentTarget;
    const projKey = button.dataset.project;
    const data = projectData[projKey];

        modalBody.innerHTML = `
            <div class="modal-header">
                <h3>${data.title}</h3>
                <p class="tech-stack"><strong>Tecnologias:</strong> ${data.tech}</p>
                <p>${data.desc}</p>
                <br>
                <a href="${data.link}" target="_blank" class="btn" style="padding: 8px 15px; font-size: 14px;">Acessar Projeto</a>
            </div>
        `;
        
        modal.style.display = "block";
        setTimeout(() => modal.classList.add('active'), 10);
    });
});

// Fechar Modal
closeModal.onclick = () => {
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = "none", 300);
};

// Fechar se clicar fora da caixa
window.onclick = (event) => {
    if (event.target == modal) closeModal.onclick();
};
});