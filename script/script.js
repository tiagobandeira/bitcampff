
async function carregarDados(url) {
    await fetch(url)
    .then(response => response.json())
    .then(dados => {
        console.log(dados)
        let tabelaHead = document.querySelector("#tabela thead");
        let tabelaBody = document.querySelector("#tabela tbody");

        tabelaHead.innerHTML = "";
        tabelaBody.innerHTML = ""; 


        dados.forEach((linha, i) => {
            let tr = document.createElement("tr");
            if(animated===false){
                tr.classList.add("in")
                // Adiciona animação de linha somente quando não é a primeira vez
                setTimeout(() => tr.classList.remove("in"), i * 200);
            }
            linha.forEach((celula, j) => {
                
                let elemento = document.createElement(i === 0 ? "th" : "td");
                elemento.textContent = celula;
                tr.appendChild(elemento);
            });
    
            if (i === 0) {
                tabelaHead.appendChild(tr); // Primeira linha vira cabeçalho
            } else {
                tabelaBody.appendChild(tr); // O resto vai para o corpo da tabela
            }
        });

        animated = true;

    })
    .catch(error => console.error('Erro ao acessar os dados:', error));

    
}
var animated = false;
async function carregarPlacar(url) {
    
    await carregarDados(url)
    
}