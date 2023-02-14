$(document).ready(function(){
    var fechaNovios = new Date('2021,07,10'.replace(/-/g, "/"));
    var fechaActual = new Date();
    var diferencia = fechaActual - fechaNovios - 3600000 - 1000;
    var diferenciaSegundos = diferencia /1000;
    var segundos = 0;
    var minutos = 0;
    var horas = 0;
    var dias = 0;
    var años = 0;
    for (i = 0; i < diferenciaSegundos; i++){
        if (segundos != 60){
            segundos++;
        }
        else{
            segundos = 1;
            if (minutos != 60){
                minutos++;
            }
            else{
                minutos = 1;
                if (horas != 24){
                    horas++;
                }
                else{
                    horas = 1;
                    if (dias != 365){
                        dias++;
                    }
                    else{
                        dias = 1;
                        años++;
                    }
                }
            }
        }
    }
    $('#anhos').text(años);
    $('#dias').text(dias);
    $('#horas').text(horas);
    $('#minutos').text(minutos);
    $('#segundos').text(segundos);
    intervalo = setInterval(contador,1000);
    function contador(){
        console.log('K');
        if (segundos != 59){
            segundos++;
            $('#segundos').text(segundos);
            return;
        }
        else{
            segundos = 0;
            $('#segundos').text(segundos);
            if (minutos != 59){
                minutos++;
                $('#minutos').text(minutos);
                return;
            }
            else{
                minutos = 0;
                $('#minutos').text(minutos);
                if (horas != 23){
                    horas++;
                    $('#horas').text(horas);
                    return;
                }
                else{
                    horas = 0;
                    $('#horas').text(horas);
                    if (dias != 364){
                        dias++;
                        $('#dias').text(dias);
                        return;
                    }
                    else{
                        dias = 0;
                        $('#dias').text(dias);
                        años++;
                        $('#anhos').text(años);
                        return;
                    }
                }
            }
        }
    }
})