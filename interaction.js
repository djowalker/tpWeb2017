
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	var posx0 = 0;
	var posx1 = 0;
	var posy0 = 0;
	var posy1 = 0;
	var a = 0;
	var bool = false;
	// Définir ici les attributs de la 'classe'

	// Developper les 3 fonctions gérant les événements
	this.presser = function(evt){
		this.bool = true;
		this.posx0 = getMousePosition(canvas,evt).x;
		this.posy0 = getMousePosition(canvas,evt).y;
		console.log("PRESSION : la position du curseur au départ en x est " + this.posx0 + " et en y " + this.posy0);
	}.bind(this);
	
	this.deplacer = function(evt){
		//console.log(getMousePosition(canvas,evt).x);
		if(this.bool == true){
		this.posx1 = getMousePosition(canvas,evt).x;
		this.posy1 = getMousePosition(canvas,evt).y;
		console.log("DEPLACEMENT : la position du curseur au départ en x est " + this.posx1 + " et en y " + this.posy1);
		}
	}.bind(this);
	
	this.relacher = function(evt){
		if(getMousePosition(canvas,evt).x <0 || getMousePosition(canvas,evt).y<0){
			this.bool=false;
		}
		if(this.bool==true){
			this.bool = false;
			console.log("RELACHER : la position du curseur au départ en x est " + this.posx1 + " et en y " + this.posy1);
		}
	}.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown', this.presser, false);
	canvas.addEventListener('mousemove', this.deplacer, false);
	canvas.addEventListener('mouseup', this.relacher, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



