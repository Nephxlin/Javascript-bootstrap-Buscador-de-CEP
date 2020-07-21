function consultaCep(){
    
    $(".barra-progresso").show();
    
    var cep = document.getElementById("cep").value;
    var url = `https://viacep.com.br/ws/${cep}/json/`
    console.log(cep)
    console.log(url)
    
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            
            //GET itens from Via CEP

            $('#uf').html(response.uf);
            $('#localidade').html(response.localidade);
            $('#bairro').html(response.bairro);
            $("#logradouro").html(response.logradouro);
            $('#complemento').html(response.complemento);
            $('#cepnum').html(response.cep);
            $(".cep").show();

            $(".barra-progresso").hide();

        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})