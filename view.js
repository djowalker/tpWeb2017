
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
MyForm.prototype.clear = function(ctx){
  canvas.getContext('2d').fillStyle ='#F0F0F0';
  ctx.fillRect(0,0,canvas.width,canvas.height);
};
Rectangle.prototype.paint = function(){
    ctx.lineWidth = this.getEpaisseur();
    ctx.lineStrokeStyle = this.getCouleur();
    ctx.rect(this.getx0(),this.gety0(),this.getx1(),this.getx1());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.beginPath();
	ctx.lineWidth = this.getEpaisseur();
    ctx.lineStrokeStyle = this.getCouleur();
    ctx.moveTo(this.getx0(), this.gety0());
    ctx.lineTo(this.getx1(), this.getx1());
    ctx.stroke();

};

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

