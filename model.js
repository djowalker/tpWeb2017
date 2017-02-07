function Drawing(canvas,evt){
	this.forms = new Array();
	this.addForm = function(form){
		this.forms.push(form);
	};
	this.getForms = function(){
		var iterator = forms.values();
		for(var i = 0; i<forms.length;i++){
				console.log(iterator.next().value);
		}
		return this.forms;
	}
	Forme.call(this);
}

function MyForm(x0,y0,x1,y1,epaisseur,couleur){
	this.couleur = couleur;
	this.epaisseur = epaisseur;
	this.x0 = x0;
	this.y0 = y0;
	this.x1 = x1;
	this.y1 = y1
	this.getx0 = function(){return this.x0;};
	this.gety0 = function(){return this.y0;};
	this.getx1 = function(){return this.x1;};
	this.gety1 = function(){return this.y1;};
	this.getCouleur = function(){return this.couleur;};
	this.getEpaisseur = function(){return this.epaisseur;};
}

function Rectangle(x0,y0,x1,y1,epaisseur,couleur){
	myForm.call(this,x0,y0,x1,y1,epaisseur,couleur);
	this.posx = posx;
	this.posy = posy;
	this.largeur = y1-y0;
	this.hauteur = x1-x0;
}

function Line(x0,y0,x1,y1,epaisseur,couleur){
	myForm.call(this,x0,y0,x1,y1,epaisseur,couleur);
}
