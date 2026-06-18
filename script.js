// Mensagem de boas-vindas
window.addEventListener("load", () => {
    console.log("Site AGRINHO 2026 carregado com sucesso!");
});

// Efeito de destaque nas seções ao aparecerem na tela
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// Validação do formulário
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const mensagem = document.querySelector("textarea").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!email.includes("@")) {
        alert("Digite um e-mail válido.");
        return;
    }

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    form.reset();
});

// Efeito nos links do menu
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        console.log(`Você acessou: ${link.textContent}`);
    });
});
