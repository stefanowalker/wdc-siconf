/*
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


  document.querySelector("#getData").addEventListener("click", getData);

  function getData() {
    tableau.connectionName = "SICONF conexão teste";
    tableau.submit();
  }

  tableau.registerConnector(myConnector);

})();

*/


console.log("This is working...");

(function () {
  var myConnector = tableau.makeConnector();

  myConnector.getSchema = function (schemaCallback) {
    const myCols = [
      {
        id: "cod_ibge",
        dataType: tableau.dataTypeEnum.int,
      },
      {
        id: "ente",
        dataType: tableau.dataTypeEnum.text,
      },
      {
        id: "capital",
        dataType: tableau.dataTypeEnum.text,
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

    let myTableSchema = {
      id: "ENTES",
      alias: "ENTES-SICONF",
      columns: myCols,
    };

    schemaCallback([myTableSchema]);
  };

  myConnector.getData = function (table, doneCallback) {
    let tableData = [];
    var i = 0;

    $.getJSON(
      "https://apidatalake.tesouro.gov.br/ords/siconfi/tt/entes",
      function (resp) {
        // Iterate over the JSON object
        for (i = 0, len = resp.items.length; i < len; i++) {
          tableData.push({
            cod_ibge: resp.items[i].cod_ibge,
            capital: resp.items[i].capital,
            regiao: resp.items[i].regiao,
            uf: resp.items[i].uf,
            esfera: resp.items[i].esfera,
            exercicio: resp.items[i].exercicio,
            populacao: resp.items[i].populacao,
            cnpj: resp.items[i].cnpj,
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
  tableau.connectionName = "SICONF conexão ENTE";
  tableau.submit();
}

