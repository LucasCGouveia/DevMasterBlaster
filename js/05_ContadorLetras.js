		function startContador() {
            $(document).ready(function(){
                $("#campoDigitacao").keyup(function(){
                    texto = $(this).val();
                    caracteres = texto.length;
                    palavras = texto.split(" ");
                    $("#quantCaracteres").html(caracteres);

                    console.log(palavras);
                    if ( palavras[palavras.length] != "" ) {
                        $("#quantPalavras").html(palavras.length);	
                    }
                });
            });
        }
        
        startContador();
        
        
	