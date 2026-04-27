const livrosEncontrados = [
 
    {
        id: 1,
        titulo: "Naruto Gold Vol. 25",
        autor: "Masashi Kishimoto",
        imagem: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_22stg2jdbh7id95hcdh46m2i0j/-S897-FWEBP",
        disponivel: true
    },
 
    {
        id: 2,
        titulo: "Beyond The Story",
        autor: "Myeongseok Kang",
        imagem: "https://m.media-amazon.com/images/I/81fozPElIyL._UF1000,1000_QL80_.jpg",
        disponivel: false
    },
 
    {
        id: 3,
        titulo: "O Horizonte Mora Em Um Dia Cinza",
        autor: "Tatielle Katluryn",
        imagem: "https://imgv2-1-f.scribdassets.com/img/word_document/720044759/original/8019ac30d4/1?v=1",
        disponivel: true
    },
 
    {
        id: 4,
        titulo: " Diário de Um Banana",
        autor: "Jeff Kinney",
        imagem: "https://m.media-amazon.com/images/I/71fWaI5myqL.jpg",
        disponivel: true
    }
 
];
 
const resultadosBusca = document.getElementById("resultadosBusca");
 
function exibirLivros(livros) {
 
    livros.forEach(function(livro) {
 
        const card = document.createElement("div");
        card.classList.add("card-livro");
 
        const img = document.createElement("img");
        img.setAttribute("src", livro.imagem);
 
        const titulo = document.createElement("h3");
        titulo.textContent = livro.titulo;
 
        const autor = document.createElement("p");
        autor.textContent = "Autor: " + livro.autor;
 
        const status = document.createElement("p");
 
        if (livro.disponivel) {
 
            status.textContent = "Disponível";
            status.classList.add("disponivel");
 
        } else {
 
            status.textContent = "Indisponível";
            status.classList.add("indisponivel");
 
        }
 
        const botao = document.createElement("button");
        botao.textContent = "Reservar";
 
        botao.setAttribute("data-id", livro.id);
 
        if (!livro.disponivel) {
 
            botao.disabled = true;
 
        }
 
        botao.addEventListener("click", function() {
 
            botao.textContent = "Reservado!";
            botao.disabled = true;
 
            console.log("Livro reservado: " + livro.titulo);
 
        });
 
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(status);
        card.appendChild(botao);
 
        resultadosBusca.appendChild(card);
 
    });
 
}
 
exibirLivros(livrosEncontrados);