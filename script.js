if ('scrollRestoration' in history) {
     history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
        // Lógica Menu Mobile
const btnMenu = document.getElementById('btn-menu-mobile');
const menuLinks = document.getElementById('menu-links');
const overlay = document.getElementById('overlay-menu');

function toggleMenu() {
    menuLinks.classList.toggle('abrir-menu');
    overlay.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar no fundo ou em qualquer link
overlay.addEventListener('click', toggleMenu);
menuLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});

    // Reset de Hash
  document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
});



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
        let typingSpeed = isDeleting ? 100 : 150;
        if (!isDeleting && index === textToType.length) {
            isDeleting = true;
            typingSpeed = 2000;
        }
        else if (isDeleting && index === 0) {
            isDeleting = false;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }
    setTimeout(typeEffect, 1000);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");
    const closeModal = document.querySelector(".close-modal");

    const projectData = {
        infra: {
            title: "InfraCB",
            tech: "HTML, CSS, JavaScript",
            desc: "O InfraCB foi um projeto acadêmico que me proporcionou a primeira experiência prática com tecnologia aplicada a um problema real da sociedade, além de reforçar a importância do trabalho em equipe. O sistema desenvolvido permite que cidadãos registrem, de forma simples e acessível, problemas de saneamento em seus bairros. Essas informações são organizadas e transformadas em um mapeamento que auxilia na identificação de áreas prioritárias para manutenção, contribuindo para a melhoria dos serviços públicos e da qualidade de vida da população.",
            link: "https://luiscontreiras.github.io/infraCB/"
        },
        media: {
            title: "Cálculo de Média",
            tech: "JavaScript, Logística Aritmética",
            desc: "O Sistema de Cálculo de Média surgiu a partir de uma demanda real de um familiar, que precisava calcular manualmente suas notas após a realização de simulados e provas de uma banca avaliadora. Ao identificar essa dificuldade recorrente, desenvolvi uma solução simples e eficiente para automatizar os cálculos, reduzindo erros e otimizando o tempo do usuário. O projeto reforçou minha capacidade de compreender necessidades reais, transformar problemas cotidianos em soluções tecnológicas e utilizar a programação como ferramenta de apoio ao usuário final.",
            link: "https://luiscontreiras.github.io/SistemadeCalculo/"
        }
    };

    // Abrir Modal
document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const projKey = btn.getAttribute('data-project');
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
        
        modal.style.display = "flex";
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

//Mensagem de suceso de envio
const form = document.getElementById("contactForm");
const alertModal = document.getElementById("alertModal");
const alertMessage = document.getElementById("alertMessage");
const alertIcon = document.getElementById("alertIcon");
const alertOk = document.getElementById("alertOk");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            showAlert(
                "Mensagem enviada com sucesso!",
                "img/bonecos/Feliz.png"
            );
            form.reset();
        } else {
            showAlert(
                "Erro ao enviar. Tente novamente.",
                "img/bonecos/Triste.png"
            );
        }
    } catch {
        showAlert(
            "Erro de conexão. Tente mais tarde.",
            "img/bonecos/SemWifi.png"
        );
    }
});

function showAlert(message, icon) {
    alertMessage.textContent = message;
    alertIcon.src = icon;
    alertModal.classList.add("active");
}

alertOk.addEventListener("click", () => {
    alertModal.classList.remove("active");
});

});

