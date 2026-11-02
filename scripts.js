// Toggle menu em telas menores
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});

function buildResumoArtigo(artigo) {
    if (artigo?.descricao) {
        return String(artigo.descricao).trim();
    }

    if (artigo?.conteudo) {
        const texto = String(artigo.conteudo).replace(/\s+/g, ' ').trim();
        return texto.length > 150 ? `${texto.substring(0, 150)}...` : texto;
    }

    return 'Leia o artigo completo';
}

function sanitizeText(value, maxLength = 0) {
    const clean = String(value ?? '')
        .replace(/<[^>]*>/g, '')
        .replace(/\u0000/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    return maxLength > 0 ? clean.slice(0, maxLength) : clean;
}

const backendUrls = [
    'https://site-backend-yan-renat-advocacia.vercel.app',
];

async function carregarArtigos() {
    const artigosGrid = document.getElementById('artigos-grid');
    if (!artigosGrid) return;

    const mensagemCarregando = document.createElement('p');
    mensagemCarregando.textContent = 'Carregando artigos...';
    artigosGrid.replaceChildren(mensagemCarregando);

    let sucesso = false;

    for (const url of backendUrls) {
        if (sucesso) break;

        try {
            console.log(`Tentando carregar artigos de: ${url}`);
            const response = await fetch(`${url}/api/artigos?t=${new Date().getTime()}`);

            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            const data = await response.json();
            const artigos = Array.isArray(data) ? data : data.artigos;

            if (!Array.isArray(artigos)) {
                throw new Error('Formato inválido na resposta da API de artigos.');
            }

            if (artigos.length === 0) {
                const mensagem = document.createElement('p');
                mensagem.textContent = 'Nenhum artigo publicado ainda.';
                artigosGrid.replaceChildren(mensagem);
                sucesso = true;
                return;
            }

            artigosGrid.replaceChildren();

            artigos.forEach((artigo) => {
                const card = document.createElement('article');
                card.className = 'artigo-card';

                const conteudoCard = document.createElement('div');
                conteudoCard.className = 'artigo-content';

                const h3 = document.createElement('h3');
                h3.textContent = sanitizeText(artigo.titulo || 'Artigo', 120) || 'Artigo';

                const descricao = document.createElement('p');
                descricao.textContent = sanitizeText(buildResumoArtigo(artigo), 300) || 'Leia o artigo completo';

                const link = document.createElement('a');
                link.href = `artigos.html?slug=${encodeURIComponent(String(artigo.slug || ''))}`;
                link.className = 'btn-leia-mais';
                link.textContent = 'Leia mais';

                conteudoCard.appendChild(h3);
                conteudoCard.appendChild(descricao);
                conteudoCard.appendChild(link);
                card.appendChild(conteudoCard);
                artigosGrid.appendChild(card);
            });

            sucesso = true;
            console.log(`Artigos carregados com sucesso de: ${url}`);
        } catch (error) {
            console.warn(`Falha ao carregar de ${url}:`, error);
        }
    }

    if (!sucesso) {
        const mensagem = document.createElement('p');
        mensagem.textContent = 'Não foi possível carregar os artigos no momento. Por favor, tente novamente mais tarde.';
        artigosGrid.replaceChildren(mensagem);
    }
}

document.addEventListener('DOMContentLoaded', carregarArtigos);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('contactSubmit');
    const messageBox = document.getElementById('form-message');

    if (!form || !submitBtn || !messageBox) return;

    let lastContactSubmit = 0;
    const contactMinDelay = 5000;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        messageBox.style.display = 'none';

        const now = Date.now();
        if (now - lastContactSubmit < contactMinDelay) {
            messageBox.textContent = 'Aguarde alguns segundos antes de enviar outra mensagem.';
            messageBox.style.display = 'block';
            messageBox.style.color = 'red';
            return;
        }

        const formData = new FormData(form);
        if (String(formData.get('website') || '').trim()) {
            form.reset();
            messageBox.textContent = 'Envio bloqueado.';
            messageBox.style.display = 'block';
            messageBox.style.color = 'red';
            return;
        }

        const nome = sanitizeText(formData.get('nome'), 80);
        const email = sanitizeText(formData.get('email'), 254);
        const mensagem = sanitizeText(formData.get('mensagem'), 1000);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nome || !email || !mensagem || !emailRegex.test(email)) {
            messageBox.textContent = !nome || !email || !mensagem
                ? 'Preencha todos os campos antes de enviar.'
                : 'Informe um e-mail válido.';
            messageBox.style.display = 'block';
            messageBox.style.color = 'red';
            return;
        }

        lastContactSubmit = now;
        submitBtn.disabled = true;
        submitBtn.textContent = 'ENVIANDO...';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' },
            });

            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

            form.reset();
            messageBox.textContent = 'Mensagem enviada com sucesso!';
            messageBox.style.display = 'block';
            messageBox.style.color = '#ff8800';
        } catch (error) {
            console.error('Erro ao enviar formulário de contato:', error);
            messageBox.textContent = 'Erro ao enviar. Tente novamente.';
            messageBox.style.display = 'block';
            messageBox.style.color = 'red';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'ENVIAR';
        }
    });
});
