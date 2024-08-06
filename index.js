const { criar, atualizar, remover, listar } = require("./endereco");

const prompt = require("prompt-sync")();

while (true) {
    console.log(`
    >>>Residencias Ponta Grossa<<<
    1. Criar uma nova residencia
    2. Atualizar uma residencia
    3. Remover uma residencia
    4. Listar residencias
    0. Sair
    `);
    let escolha =+ prompt("Escolha: ");
    switch (escolha) {
        case 1:
            console.log(criar());
            break;
            case 2:
                console.log(atualizar());
                break;
                case 3:
                    console.log(remover());
                    break;
                    case 4:
                        console.log(listar());
                        break;
                        case 0:
                            process.exit()
                            break;
        default:
            console.log("Opção inválida");
            break;
    }
}





//   function listarResidencias() {
//     residencias.forEach((residencia) => {
//       console.log(
//         `ID: ${residencia.id}, Bairro: ${residencia.bairro}, Rua: ${residencia.rua}, Número: ${residencia.numero}`
//       );
//       residencia.moradores.forEach((morador, indice) => {
//         console.log(`Morador ${indice + 1}: ${morador}`);
//       });
//     });
//   }

//   listarResidencias();
