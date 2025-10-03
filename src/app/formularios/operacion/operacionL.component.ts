//DOCUMENTO LOGICO

export class distancia{

    x1:number=0;
    y1:number=0;
    x2:number=0;
    y2:number=0;
    cx:number=0;
    cy:number=0;
    Rx:number=0;
    Ry:number=0;
    totalD:number=0;
    resultado:number=0;

    calculo(){
        
        //primero se restan x y y
        this.cx = this.x2 - this.x1;
        this.cy = this.y2 - this.y1;

        //su resultado se suma por si mismo 
        //y a su vez elevas la portencia
        this.Rx = this.cx * this.cx;
        this.Ry = this.cy * this.cy;
        this.totalD = this.Rx + this.Ry;
        this.resultado = (this.totalD ** (1/2));
    }
}