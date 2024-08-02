let mapEstoque = null
let datatable = null
$(document).ready(function(){
    datatable = jQuery('.datatable').DataTable( {
        "bJQueryUI": true,
        "paging":   false,
        "ordering": false,
        "info":     false,
        "search": false,
        "searching": false,
        dom: 'Bfrtip',
        buttons: [
            'excel', 'pdf', 'print'
        ],
        'columnDefs': [
           {
               "targets": 2, // your case first column
               "className": "text-center",           
          },
          {
               "targets": 3,
               "className": "text-center",
          }
        ]
    } )

    jQuery('.datatable').css('margin: 0')
    

    $("#gerar").on('click',gerarDados);
});

var gerarDados = function(textAreaId) {
    mapEstoque = gerarMap('#inputEstoque')
    let textarea = $('#inputRomaneio');
    
    let lines = textarea.val().split('\n');

    
    lines.forEach((line, index) => {
      
        let lineDadosRomaneio = line.split('\t');
        if(lineDadosRomaneio.length == 3){

            if(lineDadosRomaneio[0].toLowerCase().indexOf('produto') == -1) {
                let key = lineDadosRomaneio[0].trim();
                let desc = lineDadosRomaneio[1].trim();
                let quant = lineDadosRomaneio[2].trim();
                //na planilha do romaneio vem 0 na frente do codigo, adicionar aqui pra fechar a comparação
                let resultEstoqueLoja = mapEstoque.get('0'+key.trim())
                let qtdEstLoja = ""
                /*
                var el = "<tr class=''>"
                el += "<td>"+key+"</td>"
                el += "<td>"+desc+"</td>"
                el += "<td>"+quant+"</td>"
                if(resultEstoqueLoja) {
                    el += "<td>"+resultEstoqueLoja.quantidade+"</td>"
                }else{
                    el += "<td></td>"
                }

                el += "</tr>"
                jQuery(el).appendTo("#relatorio tbody")
                */

                if(resultEstoqueLoja) {
                    qtdEstLoja = resultEstoqueLoja.quantidade
                }else{
                    qtdEstLoja = ""
                }
                var data = [key, desc, quant, qtdEstLoja]
                datatable.row.add(data).draw();
            }

            
        }
    });

}

var gerarMap = function(textAreaId) {
  // Assuming you have a textarea element with id "textareaInput"
  let textarea = $(textAreaId);

  // Initialize an empty Map to store the data
  let map = new Map();

  // Split textarea content into lines
  let lines = textarea.val().split('\n');
  // Iterate over each line and populate the Map
  lines.forEach((line, index) => {
      let parts = line.split('\t');
      if(parts.length == 3){
          let key = parts[0].trim();
          let desc = parts[1].trim();
          let quant = parts[2].trim();
          let props = {'descricao': desc, 'quantidade': quant}
          map.set(key, props);
      }
  });

  // Now you have a Map populated with data from the textarea lines
  return map
}