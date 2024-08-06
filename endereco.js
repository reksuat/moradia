const prompt = require("prompt-sync")();
module.exports = {
    criar,
    listar,
    atualizar,
    remover
}
let residencias = [
    {
    bairro: "Centro",
    rua: "Rua Jequitiba",
    numero: 71,
    moradores: ["Pedro", "Matheus"],
    },
    {
    bairro: "Centro",
    rua: "Rua 2",
    numero: 72,
    moradores: ["Maria", "João"],
    },
    {
    bairro: "Uvaranas",
    rua: "Rua Tamandaré",
    numero: 10,
    moradores: ["Ana", "José", "Paulo"],
    },
];
let ultimoId = 0;
function indiceID(id) {
    if (listar()) {
        id = prompt("Digite o ID: ");
        const indice = residencias.findIndex(el => el.id == id);
        if (indice != -1) {
            
        } else {
            console.log("ID inválido.");
        }
    }
}
function modelo(id = ++ultimoId) {
    const bairro = prompt("Bairro: ");
    const rua = prompt("Rua: ");
    const numero =+ prompt("Número: ")
    const moradores = [];
    let morador
    while (true) {
        morador = prompt("Moradores e '0' para terminar: ")
    if (morador == 0) {
        console.log("Moradores registrados");
        break;
    }else{
        moradores.push(morador)
    }
    }
    if (bairro !=undefined && rua !=undefined && numero!= undefined) {
        return {
            id,
            bairro,
            rua,
            numero,
            moradores
        }        
    }
}
function criar() {
    const residencia = modelo()
    if (residencia!= undefined) {
        residencias.push(residencia)
    }else {
        console.log("não foi possivel criar uma nova residencia.");
    }
}
function listar() {
    if(residencias.length>0){
    residencias.forEach((residencia) => {
        console.log(`
        ${residencia.id}.
        Bairro: ${residencia.bairro}
        Rua: ${residencia.rua}
        Numero: ${residencia.numero}
        `);
            residencia.moradores.forEach((morador, indice) => {
                console.log(`
                ${indice+1}.
                Morador: ${morador}`);
            });
    });
}else{
    console.log("Não tem nada dentro do listar");
}
}
function atualizar() {
        listar()
        const indice = residencias.findIndex(el => el.id == id);
        indice =+ prompt("Qual indice deseja atualizar? ")-1;
        if(indice>0 && indice<= residencias.length){
        const residencia = modelo()
        residencias[indice]=residencia
        }else{
            console.log("Não foi possivel atualizar");
        }
    }
function remover() {
    listar()
    const indice =+ prompt("Qual indice deseja remover? ")-1;
    if(indice>0 && indice<= residencias.length){
    residencias.splice(indice, 1)
    }
    else{
        console.log("Não foi possivel remover");
    }
}