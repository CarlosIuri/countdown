export default class Countdown{
    constructor(dataInformada){
        this.dataInformada = dataInformada;
    }

    get _dataInformada(){
        return new Date(this.dataInformada);
    }

    get dataAtual(){
        return new Date();
    }

    get diferencaDatas(){
        return this._dataInformada.getTime() - this.dataAtual.getTime();
    }

    get dias(){
        return Math.floor(this.diferencaDatas / (24 * 60 * 60 * 1000));
    }

    get horas(){
        return Math.floor(this.diferencaDatas / (60 * 60 * 1000));
    }

    get minutos(){
        return Math.floor(this.diferencaDatas / (60 * 1000));
    }

    get segundos(){
        return Math.floor(this.diferencaDatas / 1000);
    }

    get total(){
        const dias = this.dias;
        const horas = this.horas % 24;
        const minutos = this.minutos % 60;
        const segundos = this.segundos % 60;
        return{
            propDias: dias,
            propHoras: horas,
            propMinutos: minutos,
            propSegundos: segundos,
        } 
    }
}