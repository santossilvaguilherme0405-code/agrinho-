const baseConhecimento = [
    { p: "Pragas na Lavoura", s: "Drones com sensores identificam focos de pragas, permitindo aplicação localizada de defensivos." },
    { p: "Uso de Água", s: "Sensores IoT monitoram a umidade do solo e irrigam apenas quando necessário." },
    { p: "Erosão do Solo", s: "O Plantio Direto mantém a cobertura vegetal, protegendo a terra e seus nutrientes." }
];

function iniciarSuporte() {
    const container = document.getElementById('lista-problemas');
    if (!container) return;
    baseConhecimento.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.innerText = item.p;
        btn.className = 'btn-problema';
        btn.onclick = () => {
            document.getElementById('texto-resposta').innerHTML = `<strong>Solução:</strong> ${item.s}`;
        };
        container.appendChild(btn);
    });
}

function responderQuiz(correto) {
    const res = document.getElementById('res-quiz');
    res.innerText = correto ? "✅ Correto! A tecnologia economiza recursos." : "❌ Tente novamente!";
    res.style.color = correto ? "#27ae60" : "#e74c3c";
}

document.getElementById('btn-theme').onclick = () => {
    document.body.classList.toggle('dark-mode');
    document.getElementById('btn-theme').innerText = document.body.classList.contains('dark-mode') ? "☀️ Modo Claro" : "🌓 Modo Escuro";
};

document.getElementById('btn-reset').onclick = () => {
    location.reload(); // Forma mais limpa de resetar tudo
};

window.onload = iniciarSuporte;
