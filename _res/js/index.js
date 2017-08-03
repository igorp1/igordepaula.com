/// GLOBALS
var lastIndxPickedForRandomBackground = -1;

/// FUNCTIONS

function addRandomBackground(){
	var links = [
		"https://media1.giphy.com/media/wFbI8gwCfCxeo/200.webp#5-grid1",
		"https://media.giphy.com/media/6ON0E11YbeR6U/giphy.gif",
		"https://media3.giphy.com/media/VouwN9LlIL3JC/giphy.gif"
	];
	
	var indx = Math.floor(Math.random() * links.length);
	
	while(indx == lastIndxPickedForRandomBackground){
		indx = Math.floor(Math.random() * links.length);
	}
	lastIndxPickedForRandomBackground = indx;
	var bk_url = links[indx]
	document.body.style.backgroundImage = 'url(' + bk_url + ')';
}

function copyEmailToClipboard(t){
	
	t.text = "copied to clipboard!";
	copyTextToClipboard('igordepaula1@gmail.com')
	var seconds = 2;
	setTimeout(function(){ t.text = "email"; }, seconds* 1000);
}
	
function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
	var successful = document.execCommand('copy');
	var msg = successful ? 'successful' : 'unsuccessful';
	console.log('Copying text command was ' + msg);
  } catch (err) {
	console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
}

/// LISTENERS
document.addEventListener('keydown', function(event) {
	// using keyboard shortcuts for my own convinience...
	var keydownEventBuffer = String.fromCharCode(event.keyCode);
	
	switch(keydownEventBuffer){
		case 'P':
			window.location.replace('./projects');
			break;			
		case 'C':
			window.location.replace('./cpanel');
			break;			
		case 'R':
			window.location.replace('./_res/docs/IgordePaula_resume.pdf');
			break;			
		case 'E':
			copyEmailToClipboard(document.getElementById('email-link'));
			break;			
		case 'I':
			addRandomBackground();
			break;
		default:
			// let it rock...
	}
});

(new Shake({threshold: 15})).start(); // https://cdn.rawgit.com/alexgibson/shake.js/master/shake.js 
window.addEventListener('shake', addRandomBackground, false);