const baseConhecimento = [
    { p: "Pragas na Lavoura", s: "Drones com sensores infravermelhos identificam pragas antes do olho humano, reduzindo o uso de químicos." },
    { p: "Uso de Água", s: "Sistemas de gotejamento automatizados levam água direto à raiz, economizando até 90% de água." },
    { p: "Erosão do Solo", s: "O Plantio Direto e a rotação de culturas protegem o solo contra chuvas e ventos fortes." }
];

const detalhesGaleria = {
    drone: { t: "Drones Agrícolas", d: "Mapeiam a fazenda em minutos, encontrando falhas de plantio e focos de doenças." },
    hidro: { t: "Hidroponia Inteligente", d: "Cultivo em água rica em nutrientes. Ideal para cidades e áreas com pouco solo fértil." },
    solar: { t: "Energia Solar", d: "Painéis que geram energia limpa para bombear água e iluminar a fazenda de forma gratuita." }
};

function iniciarSuporte() {
    const container = document.getElementById('lista-problemas');
    if (!container) return;
    
    baseConhecimento.forEach(item => {
        const btn = document.createElement('button');
        btn.innerText = item.p;
        btn.className = 'btn-problema';
        btn.onclick = () => {
            document.getElementById('texto-resposta').innerHTML = `<strong>🌱 Solução:</strong> ${item.s}`;
        };
        container.appendChild(btn);
    });
}

function exibirInfo(id) {
    const box = document.getElementById('detalhe-galeria');
    document.getElementById('detalhe-titulo').innerText = detalhesGaleria[id].t;
    document.getElementById('detalhe-texto').innerText = detalhesGaleria[id].d;
    box.style.display = 'block';
}

function responderQuiz(correto) {
    const res = document.getElementById('res-quiz');
    res.innerText = correto ? "✅ Excelente! A aplicação localizada evita o desperdício de agrotóxicos." : "❌ Quase lá! Lembre-se que drones são precisos.";
    res.style.color = correto ? "#2d6a4f" : "#e74c3c";
}

document.getElementById('btn-theme').onclick = () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('btn-theme').innerText = isDark ? "☀️ Modo Claro" : "🌓 Modo Escuro";
};

document.getElementById('btn-reset').onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => location.reload(), 500);
};

window.onload = iniciarSuporte;
