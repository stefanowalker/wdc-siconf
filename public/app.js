console.log("This is working!");

// TESTE
(function () {
  var myConnector = tableau.makeConnector();

  myConnector.getData = function (table, doneCallback) {
    let tableData = [];
    var i = 0;

    $.getJSON(
      "https://apidatalake.tesouro.gov.br/ords/siconfi/tt/entes",
      function (resp) {
        // Iterate over the JSON object
        for (i = 0, len = resp.length; i < len; i++) {
          console.log ('resp[i] = ', resp[i]);
          tableData.push({
            cod_ibge: resp[i].cod_ibge,
            capital: resp[i].capital,
            regiao: resp[i].regiao,
            uf: resp[i].uf,
            esfera: resp[i].esfera,
            exercicio: resp[i].exercicio,
            populacao: resp[i].populacao,
            cnpj: resp[i].cnpj,
          });
        }
        table.appendRows(tableData);
        doneCallback();
        console.log("iterou sobre o objeto TESTE");
      }
    );
  };

  ///// tableau.registerConnector(myConnector);
})();


/*
(function () {
  var myConnector = tableau.makeConnector();

  myConnector.getSchema = function (schemaCallback) {
    const covidCols = [
      {
        id: "cod_ibge",
        dataType: tableau.dataTypeEnum.int,
      },
      {
        id: "ente",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "capital",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "regiao",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "uf",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "esfera",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "exercicio",
        dataType: tableau.dataTypeEnum.int,
      },
      {
        id: "populacao",
        dataType: tableau.dataTypeEnum.int,
      },
      {
        id: "cnpj",
        dataType: tableau.dataTypeEnum.string,
      },
    ];

    let covidTableSchema = {
      id: "RIVM",
      alias: "Dutch Corona Cases since start",
      columns: covidCols,
    };

    schemaCallback([covidTableSchema]);
  };

  myConnector.getData = function (table, doneCallback) {
    let tableData = [];
    var i = 0;

    $.getJSON(
      "https://apidatalake.tesouro.gov.br/ords/siconfi/tt/entes",
      function (resp) {
        // Iterate over the JSON object
        for (i = 0, len = resp.length; i < len; i++) {
          tableData.push({
            cod_ibge: resp[i].cod_ibge,
            capital: resp[i].capital,
            regiao: resp[i].regiao,
            uf: resp[i].uf,
            esfera: resp[i].esfera,
            exercicio: resp[i].exercicio,
            populacao: resp[i].populacao,
            cnpj: resp[i].cnpj,
          });
        }
        table.appendRows(tableData);
        doneCallback();
        console.log("iterou sobre o objeto");
      }
    );
  };

  tableau.registerConnector(myConnector);
})();

document.querySelector("#getData").addEventListener("click", getData);

function getData() {
  tableau.connectionName = "SICONF conexão teste";
  tableau.submit();
}

*/