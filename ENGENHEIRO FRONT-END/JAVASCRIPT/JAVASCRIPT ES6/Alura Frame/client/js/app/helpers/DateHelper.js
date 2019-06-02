class DateHelper {

    dataParaText(data) {

        return data.getDate()
        + '/' + (gata.getMonth() + 1)
        + '/' + data.getFullYear();
    }

    textoParaData(texto) {
        return new Date(... texto.split('-').map((item, indice) => item - indice %2 ));
    }
}