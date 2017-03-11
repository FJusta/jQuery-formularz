// formularz uzupełniony o walidację
var dane = {
    polska: {
        podatek: 0.19,
        produkty: {
            paliwo: 0.16,
            hotel: 0.07,
        }
    },
    czechy: {
        podatek: 0.16,
        produkty: {
            autostrada: 0.06,
        }
    },
    niemcy: {
        podatek: 0.21,
        produkty: {
      
        }
    },
};

$('span').hide();

$('#calculate').click(function(event) {
  event.preventDefault();
  
    var price = $('#price').val(),
        country = $('#country option:selected').val(),
        product = $('#product option:selected').val(),
        taxPointer, 
        tax;

    if (dane[country]) {
        if (dane[country].produkty[product]) {
            taxPointer = dane[country].produkty[product];
        } else {
            taxPointer = dane[country].podatek;
        }
    } 
    if (taxPointer) {
        tax = price * taxPointer; 
    } else {
        tax = 0;
    }
  
    $('#tax').text(tax);

    $('.form-control').each(function(index, element) {
        if ($(element).val() === "" || $(element).val() === "wybierz") {
            $(element).css({
                border: '2px solid red',
            });
    
        $(element).siblings('span').fadeIn();
        } else {
        $(element).css({
            border: '0',
        });
    
        $(element).siblings('span').fadeOut();
        }
    });
});

