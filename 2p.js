// Left
let grayJedi =document.querySelector('.gj')
let gjMain =document.querySelector('.gray-jedi')
let gjIzlaz=document.querySelector('.gj-izadji')

grayJedi.addEventListener('click', function () {
  gjMain.classList.add('show-gj-main')
})

gjIzlaz.addEventListener('click', function() {
	gjMain.classList.remove('show-gj-main')
})
// endLeft

// Right
let alterEgo =document.querySelector('.ae')
let aeMain =document.querySelector('.alter-ego')
let aeIzlaz=document.querySelector('.ae-izadji')

alterEgo.addEventListener('click', function(){
	aeMain.classList.add('show-ae-main')
})
aeIzlaz.addEventListener('click',function(){
	aeMain.classList.remove('show-ae-main')
})
// endRIght

// Prikazi tema-sadrzaj

let tema=document.querySelectorAll('.tema')

tema.forEach(function(btn){
	let dugme=btn.querySelector('.sadrzaj-tema');
	btn.addEventListener('click',function(dgm){
		
		dugme.classList.add('show-sadrzaj-tema')
	})
})
 
// end Prikazi tema-sadrzaj

// Zatvori Right tema-sadrzaj
let naslovIzadji =aeMain.querySelector('.container')
let dugmence=aeMain.querySelectorAll('.sadrzaj-tema')
naslovIzadji.addEventListener('click',function(){
	dugmence.forEach(function(bb){
			bb.classList.remove('show-sadrzaj-tema');
	})
})

//End Zatvori Rightt tema-sadrzaj

//Prikazi Left tema-sadrzaj
let naslovIzadji2 =gjMain.querySelector('.container')
let dugmence2=gjMain.querySelectorAll('.sadrzaj-tema')
naslovIzadji2.addEventListener('click',function(){
	dugmence2.forEach(function(bb){
			bb.classList.remove('show-sadrzaj-tema');
	})
})

//End Zatvori Left tema-sadrzaj
