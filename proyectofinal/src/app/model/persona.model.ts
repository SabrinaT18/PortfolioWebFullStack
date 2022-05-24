export class persona {
 id?: number;
 nombre: String;
 apellido: String;
 Img: String;
 company: String;

constructor (nombre: String, apellido: String, Img: String, company: String ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.Img = Img;
    this.company = company;
}

}