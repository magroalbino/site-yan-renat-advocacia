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

// Lógica de carregamento de artigos com redundância
const backendUrls = [
    'https://site-backend-yan-renat-advocacia.vercel.app',
];

async function carregarArtigos() {
    const artigosGrid = document.getElementById('artigos-grid');
    if (!artigosGrid) return;

    artigosGrid.innerHTML = '<p>Carregando artigos...</p>';

    let sucesso = false;

    for (const url of backendUrls) {
        if (sucesso) break;

        try {
            console.log(`Tentando carregar artigos de: ${url}`);
            const response = await fetch(`${url}/api/artigos?t=${new Date().getTime()}`);

            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            const artigos = await response.json();

            if (!artigos || artigos.length === 0) {
                artigosGrid.innerHTML = '<p>Nenhum artigo publicado ainda.</p>';
                sucesso = true;
                return;
            }

            artigosGrid.innerHTML = '';

            artigos.forEach(artigo => {
                const card = document.createElement('div');
                card.className = 'artigo-card';

                card.innerHTML = `
                <h3>${artigo.titulo}</h3>
                <p class="artigo-descricao">
                    ${artigo.descricao}
                </p>
                <a href="artigos.html?slug=${artigo.slug}" class="btn-cta">
                    Leia mais
                </a>
            `;

                artigosGrid.appendChild(card);
            });

            sucesso = true;
            console.log(`Artigos carregados com sucesso de: ${url}`);
        } catch (error) {
            console.warn(`Falha ao carregar de ${url}:`, error);
        }
    }

    if (!sucesso) {
        artigosGrid.innerHTML =
            '<p>Não foi possível carregar os artigos no momento. Por favor, tente novamente mais tarde.</p>';
    }
}

document.addEventListener('DOMContentLoaded', carregarArtigos);
