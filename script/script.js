$(document).ready(function(){
    var fechaNovios = new Date('July 10, 21 00:00:00');
    var fechaActual = new Date();
    var diferencia = fechaActual.getTime() - fechaNovios.getTime() + (1000 * 60 * 60 *24);
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
            segundos = 0;
            if (minutos != 60){
                minutos++;
            }
            else{
                minutos = 0;
                if (horas != 24){
                    horas++;
                }
                else{
                    horas = 0;
                    if (dias != 365){
                        dias++;
                    }
                    else{
                        dias = 0;
                        años++;
                    }
                }
            }
        }
    }
    console.log(fechaNovios.getTime());
    console.log(fechaActual.getTime());
    console.log(diferencia);
    console.log('Segundos: ', segundos);
    console.log('Minutos: ', minutos);
    console.log('Horas: ', horas);
    console.log('Dias: ', dias);
    console.log('Años: ', años);
    //var tiempoVariable = setInterval(contador,1000);
    function contador(){
        if (segundos != 59){
            segundos++;
        }
        else{
            segundos = 0;
            if (minutos != 59){
                minutos++;
            }
            else{
                minutos = 0;
                if (horas != 23){
                    horas++;
                }
                else{
                    horas = 0;
                    if (dias != 364){
                        dias++;
                    }
                    else{
                        dias = 0;
                        años++;
                    }
                }
            }
        }
    }
})