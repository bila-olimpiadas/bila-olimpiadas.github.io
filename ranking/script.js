// Dados dos jogadores
var players = [
{ "#": "1º" ,Nome: "Squnha"     , Pts: 34   , Pr: 5 , Mpp : 6.8  , Tg: 2 },
{ "#": "2º" ,Nome: "Mestre Gui" , Pts: 33   , Pr: 4 , Mpp : 8.3  , Tg: 1 },
{ "#": "3º" ,Nome: "Wisdow"     , Pts: 32   , Pr: 5 , Mpp : 6.4  , Tg: 2 },
{ "#": "4º" ,Nome: "Xadas"      , Pts: 32   , Pr: 5 , Mpp : 6.4  , Tg: 1 },
{ "#": "5º" ,Nome: "Braz"       , Pts: 27   , Pr: 4 , Mpp : 6.8  , Tg: 1 },
{ "#": "6º" ,Nome: "Bárbara"    , Pts: 25   , Pr: 4 , Mpp : 6.3  , Tg: 0 },
{ "#": "7º" ,Nome: "Geremias"   , Pts: 25   , Pr: 5 , Mpp : 5.0  , Tg: 1 },
{ "#": "8º" ,Nome: "Cludos"     , Pts: 25   , Pr: 5 , Mpp : 5.0  , Tg: 0 },
{ "#": "9º" ,Nome: "Rodry"      , Pts: 17   , Pr: 3 , Mpp : 5.7  , Tg: 1 },
{ "#": "9º" ,Nome: "Lemos"      , Pts: 17   , Pr: 3 , Mpp : 5.7  , Tg: 1 },
{ "#": "11º" ,Nome: "Hydra"     , Pts: 17   , Pr: 4 , Mpp : 4.3  , Tg: 0 },
{ "#": "12º" ,Nome: "Droga"     , Pts: 13   , Pr: 1 , Mpp : 13.0 , Tg: 1 },
{ "#": "13º" ,Nome: "Esquilo"   , Pts: 13   , Pr: 2 , Mpp : 6.5  , Tg: 1 },
{ "#": "14º" ,Nome: "Lekky"     , Pts: 13   , Pr: 3 , Mpp : 4.3  , Tg: 1 },
{ "#": "15º" ,Nome: "João Nuno" , Pts: 11   , Pr: 3 , Mpp : 3.7  , Tg: 0 },
{ "#": "16º" ,Nome: "Filipe"    , Pts: 8    , Pr: 1 , Mpp : 8.0  , Tg: 1 },
{ "#": "16º" ,Nome: "Sardoal"   , Pts: 8    , Pr: 1 , Mpp : 8.0  , Tg: 1 },
{ "#": "16º" ,Nome: "Omniomm"   , Pts: 8    , Pr: 1 , Mpp : 8.0  , Tg: 1 },
{ "#": "16º" ,Nome: "Madmess"   , Pts: 8    , Pr: 1 , Mpp : 8.0  , Tg: 1 },
{ "#": "16º" ,Nome: "Frost"     , Pts: 8    , Pr: 1 , Mpp : 8.0  , Tg: 1 },
{ "#": "21º" ,Nome: "Simão"     , Pts: 8    , Pr: 1 , Mpp : 8.0  , Tg: 0 },
{ "#": "21º" ,Nome: "Camilo"    , Pts: 8    , Pr: 1 , Mpp : 8.0  , Tg: 0 },
{ "#": "23º" ,Nome: "Frazão"    , Pts: 8    , Pr: 2 , Mpp : 4.0  , Tg: 0 },
{ "#": "24º" ,Nome: "Gama"      , Pts: 6    , Pr: 1 , Mpp : 6.0  , Tg: 0 },
{ "#": "24º" ,Nome: "Russo"     , Pts: 6    , Pr: 1 , Mpp : 6.0  , Tg: 0 },
{ "#": "26º" ,Nome: "Zé Afonso" , Pts: 6    , Pr: 2 , Mpp : 3.0  , Tg: 1 },
{ "#": "27º" ,Nome: "Areias"    , Pts: 6    , Pr: 2 , Mpp : 3.0  , Tg: 0 },
{ "#": "28º" ,Nome: "Serino"    , Pts: 4    , Pr: 1 , Mpp : 4.0  , Tg: 0 },
{ "#": "28º" ,Nome: "Tone"      , Pts: 4    , Pr: 1 , Mpp : 4.0  , Tg: 0 },
{ "#": "28º" ,Nome: "Rui"       , Pts: 4    , Pr: 1 , Mpp : 4.0  , Tg: 0 },
{ "#": "28º" ,Nome: "Costa"     , Pts: 4    , Pr: 1 , Mpp : 4.0  , Tg: 0 },
{ "#": "28º" ,Nome: "Gelly"     , Pts: 4    , Pr: 1 , Mpp : 4.0  , Tg: 0 },





]

var participacoes = 
    {
        "Xadas" : {
            "Bilatrecos" : {
                "Lugar" : "2º",
                "Pontos" : 10
            },
            "TFT" : {
                "Lugar" : "3º",
                "Pontos" : 8
            },
            "Futbiladas" : {
                "Lugar" : "1º",
                "Pontos" : 8
            },
            "LOL 5x5" : {
                "Lugar" : "4º",
                "Pontos" : 2
            },
            "Scribbl.io" : {
                "Lugar" : "8º",
                "Pontos" : 4
            }
        },
        "Wisdow" : {
            "Bilatrecos" : {
                "Lugar" : "1º",
                "Pontos" : 13
            },
            "TFT" : {
                "Lugar" : "9º",
                "Pontos" : 3
            },
            "Futbiladas" : {
                "Lugar" : "1º",
                "Pontos" : 8
            },
            "LOL 5x5" : {
                "Lugar" : "2º",
                "Pontos" : 6
            },
            "Scribbl.io" : {
                "Lugar" : "11º",
                "Pontos" : 2
            }
        },
        "Mestre Gui" : {
            "Bilatrecos" : {
                "Lugar" : "1º",
                "Pontos" : 13
            },
            "TFT" : {
                "Lugar" : "2º",
                "Pontos" : 10
            },
            "LOL 5x5" : {
                "Lugar" : "4º",
                "Pontos" : 2
            },
            "Scribbl.io" : {
                "Lugar" : "3º",
                "Pontos" : 8
            }
        },
        "Bárbara" : {
            "Bilatrecos" : {
                "Lugar" : "2º",
                "Pontos" : 10
            },
            "TFT" : {
                "Lugar" : "3º",
                "Pontos" : 8
            },
            "Futbiladas" : {
                "Lugar" : "2º",
                "Pontos" : 4
            },
            "Scribbl.io" : {
                "Lugar" : "9º",
                "Pontos" : 3
            }
        },
        "Geremias" : {
            "Bilatrecos" : {
                "Lugar" : "5º",
                "Pontos" : 5
            },
            "TFT" : {
                "Lugar" : "6º",
                "Pontos" : 5
            },
            "Futbiladas" : {
                "Lugar" : "1º",
                "Pontos" : 8
            },
            "LOL 5x5" : {
                "Lugar" : "4º",
                "Pontos" : 2
            },
            "Scribbl.io" : {
                "Lugar" : "5º",
                "Pontos" : 5
            }
        },
        "Braz" : {
            "Bilatrecos" : {
                "Lugar" : "4º",
                "Pontos" : 6
            },
            "TFT" : {
                "Lugar" : "10º",
                "Pontos" : 3
            },
            "Futbiladas" : {
                "Lugar" : "1º",
                "Pontos" : 8
            },
            "Scribbl.io" : {
                "Lugar" : "2º",
                "Pontos" : 10
            }
        },
        "Squnha" : {
            "Bilatrecos" : {
                "Lugar" : "6º",
                "Pontos" : 5
            },
            "TFT" : {
                "Lugar" : "7º",
                "Pontos" : 4
            },
            "Futbiladas" : {
                "Lugar" : "1º",
                "Pontos" : 8
            },
            "LOL 5x5" : {
                "Lugar" : "3º",
                "Pontos" : 4
            },
            "Scribbl.io" : {
                "Lugar" : "1º",
                "Pontos" : 13
            }
        },
        "Cludos" : {
            "Bilatrecos" : {
                "Lugar" : "4º",
                "Pontos" : 6
            },
            "TFT" : {
                "Lugar" : "5º",
                "Pontos" : 5
            },
            "Futbiladas" : {
                "Lugar" : "2º",
                "Pontos" : 4
            },
            "LOL 5x5" : {
                "Lugar" : "2º",
                "Pontos" : 6
            },
            "Scribbl.io" : {
                "Lugar" : "7º",
                "Pontos" : 4
            }
        },
        "Droga" : {
            "TFT" : {
                "Lugar" : "1º",
                "Pontos" : 13
            }
        },
        "Esquilo" : {
            "Bilatrecos" : {
                "Lugar" : "5º",
                "Pontos" : 5
            },
            "Futbiladas" : {
                "Lugar" : "1º",
                "Pontos" : 8
            },
        },
        "Rodry" : {
            "Bilatrecos" : {
                "Lugar" : "6º",
                "Pontos" : 5
            },
            "Futbiladas" : {
                "Lugar" : "1º",
                "Pontos" : 8
            },
            "LOL 5x5" : {
                "Lugar" : "3º",
                "Pontos" : 4
            }
        },
        "Filipe" : {
            "Futbiladas" : {
                "Lugar" : "1º",
                "Pontos" : 8
            },
        },
        "Lemos" : {
            "Futbiladas" : {
                "Lugar" : "1º",
                "Pontos" : 8
            },
            "LOL 5x5" : {
                "Lugar" : "3º",
                "Pontos" : 4
            },
            "Scribbl.io" : {
                "Lugar" : "6º",
                "Pontos" : 5
            }
        },
        "Sardoal" : {
            "Futbiladas" : {
                "Lugar" : "1º",
                "Pontos" : 8
            },
        },
        "Simão" : {
            "Bilatrecos" : {
                "Lugar" : "3º",
                "Pontos" : 8
            },
        },
        "Camilo" : {
            "Bilatrecos" : {
                "Lugar" : "3º",
                "Pontos" : 8
            },
        },
        "Hydra" : {
            "TFT" : {
                "Lugar" : "8º",
                "Pontos" : 4
            },
            "Futbiladas" : {
                "Lugar" : "2º",
                "Pontos" : 4
            },
            "LOL 5x5" : {
                "Lugar" : "2º",
                "Pontos" : 6
            },
            "Scribbl.io" : {
                "Lugar" : "10º",
                "Pontos" : 3
            }
        },
        "João Nuno" : {
            "TFT" : {
                "Lugar" : "9º",
                "Pontos" : 3
            },
            "Futbiladas" : {
                "Lugar" : "2º",
                "Pontos" : 4
            },
            "LOL 5x5" : {
                "Lugar" : "3º",
                "Pontos" : 4
            }
        },
        "Serino" : {
            "Futbiladas" : {
                "Lugar" : "2º",
                "Pontos" : 4
            },
        },
        "Areias" : {
            "Futbiladas" : {
                "Lugar" : "2º",
                "Pontos" : 4
            },
            "LOL 5x5" : {
                "Lugar" : "4º",
                "Pontos" : 2
            }
        },
        "Tone" : {
            "Futbiladas" : {
                "Lugar" : "2º",
                "Pontos" : 4
            },
        },
        "Rui" : {
            "Futbiladas" : {
                "Lugar" : "2º",
                "Pontos" : 4
            },
        },
        "Costa" : {
            "Futbiladas" : {
                "Lugar" : "2º",
                "Pontos" : 4
            },
        },
        "Zé Afonso" : {
            "Futbiladas" : {
                "Lugar" : "2º",
                "Pontos" : 4
            },
            "LOL 5x5" : {
                "Lugar" : "1º",
                "Pontos" : "8 (-6 de penalidade por faltar)"
            }
        },
        "Lekky" : {
            "TFT" : {
                "Lugar" : "10º",
                "Pontos" : 3
            },
            "LOL 5x5" : {
                "Lugar" : "1º",
                "Pontos" : 8
            },
            "Scribbl.io" : {
                "Lugar" : "12º",
                "Pontos" : 2
            }
        },
        "Frazão" : {
            "LOL 5x5" : {
                "Lugar" : "4º",
                "Pontos" : 2
            },
            "Scribbl.io" : {
                "Lugar" : "4º",
                "Pontos" : 6
            }
        },
        "Gelly" : {
            "LOL 5x5" : {
                "Lugar" : "3º",
                "Pontos" : 4
            }
        },
        "Gama" : {
            "LOL 5x5" : {
                "Lugar" : "2º",
                "Pontos" : 6
            }
        },
        "Russo" : {
            "LOL 5x5" : {
                "Lugar" : "2º",
                "Pontos" : 6
            }
        },
        "Madmess" : {
            "LOL 5x5" : {
                "Lugar" : "1º",
                "Pontos" : 8
            }
        },
        "Omniomm" : {
            "LOL 5x5" : {
                "Lugar" : "1º",
                "Pontos" : 8
            }
        },
        "Frost" : {
            "LOL 5x5" : {
                "Lugar" : "1º",
                "Pontos" : 8
            }
        }
    }

function showHideRow(row) { 
    $("#" + row).toggle(); 
} 

// Função para criar a tabela
function criarTabela(players,participacoes) {
    var tabela = document.getElementById("rankingBody");

    // Limpar tabela existente
    tabela.innerHTML = "";

    // Cabeçalho da tabela
    var headerRow = tabela.insertRow();
    Object.keys(players[0]).forEach(function(prop) {
        var th = document.createElement("th");
        th.textContent = prop.replace(/_/g, ' ');
        headerRow.appendChild(th);
    });
    var i = 0
    // Preencher a tabela com os jogadores ordenados
    players.forEach(function(player, index) {
        var row = tabela.insertRow();
        i+=1
        id = "hidden_row"+i
        row.setAttribute( "onClick", "showHideRow('"+id+"');" );
        
        // Hidden
        var rowHidden = tabela.insertRow();
        rowHidden.id = "hidden_row"+i
        rowHidden.className = "hidden_row"
        var cellHidden = rowHidden.insertCell();
        cellHidden.setAttribute("colspan",6);
        cellHidden.innerHTML = "<p><b>Participações</b></p>";
        torneios_participados = participacoes[player.Nome]
        for (let torneio in torneios_participados){
            cellHidden.innerHTML += `
            <p>
            <b>Torneio</b> : ${torneio}<br>
            <b>Lugar</b> : ${torneios_participados[torneio]["Lugar"]}<br>
            <b>Pontos Ganhos</b> : +${torneios_participados[torneio]["Pontos"]}</br>
            </p>
            `
        }

        var cellPos = row.insertCell();
        cellPos.textContent = player["#"]

        var cellFoto = row.insertCell();
        var foto = document.createElement("img");
        foto.src = "images/" + player.Nome + ".png"; // Define o src da imagem
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
criarTabela(players,participacoes);
