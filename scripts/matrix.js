const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const nums = '0123456789';

const alphabet = nums;

const fontSize = 25;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 0;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.06)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = 'rgba(0,255,0,0.3)';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.875){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 50);


function validFormAndReditec(){
	const name = document.getElementById('nome').value;
	const email = document.getElementById('email').value;
	const cel = document.getElementById('celular').value;
	if (name && email && cel) {
		window.location.pathname = window.location.pathname.replace('cadastro.html' , 'obrigado.html')
	}

	return;
}