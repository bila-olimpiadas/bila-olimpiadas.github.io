// Dados dos jogadores
var player1 = { "#" : "1º" ,Nome: "omnimommy"                , "Membros" : "Frost, Omniomm, Lekky, Madmess e Zé Afonso"      , Pt: "+8"    , R: "3-1" };
var player2 = { "#" : "2º" ,Nome: "Chega do Hydra"           , "Membros" : "Russo, Gama, Cludos, Hydra e Wisdow"            , Pt: "+6"    , R: "2-1" };
var player3 = { "#" : "3º" ,Nome: "Queremos Waffles Quentes" , "Membros" : "Lemos, Gelly, Rodry, Squnha e João Nuno"        , Pt: "+4"    , R: "1-2" };
var player4 = { "#" : "4º" ,Nome: "Torres do Frazão"         , "Membros" : "Geremias, Mestre Gui, Xadas, Areias e Frazão"   , Pt: "+2"    , R: "0-2" };

var players = [player1, player2, player3, player4];

// Função para criar a tabela
function criarTabela(players, sortBy) {
    var tabela = document.getElementById("rankingBody");

    // Limpar tabela existente
    tabela.innerHTML = "";

    // Ordenar os jogadores
    players.sort(function(a, b) {
        return b[sortBy] - a[sortBy];
    });

    // Cabeçalho da tabela
    var headerRow = tabela.insertRow();
    Object.keys(players[0]).forEach(function(prop) {
        var th = document.createElement("th");
        th.textContent = prop.replace(/_/g, ' ');
        headerRow.appendChild(th);
    });

    // Preencher a tabela com os jogadores ordenados
    players.forEach(function(player, index) {
        var row = tabela.insertRow();

        var cellPos = row.insertCell();
        cellPos.textContent = player["#"]

        var cellFoto = row.insertCell();
        var foto = document.createElement("img");
        foto.src = "../images/" + player.Nome + ".png"; // Define o src da imagem
        foto.alt = ""; // Define o texto alternativo da imagem
        foto.width = 50; // Define a largura da imagem
        foto.style.borderRadius = "50%"; // Torna a imagem redonda
        cellFoto.appendChild(foto); // Adiciona a imagem à célula
        var nome = document.createElement("div")
        nome.textContent = player.Nome;
        cellFoto.appendChild(nome)
        
        Object.keys(player).forEach(function(prop) {
            if (prop!="Nome" && prop!="#"){
            var cell = row.insertCell();
            cell.textContent = player[prop];
            }
        });
    });
}


// Criar tabela inicialmente
criarTabela(players, '#');
