/// GLOBALS
var lastIndxPickedForRandomBackground = -1;

/// FUNCTIONS

function addRandomBackground(){
	var gif_links = [
		"http://igordepaula.com/_res/img/gifs/batman.gif",
		"http://igordepaula.com/_res/img/gifs/franky.gif",
		"http://igordepaula.com/_res/img/gifs/meeseeks.gif",
		"http://igordepaula.com/_res/img/gifs/rick.gif",
		"http://igordepaula.com/_res/img/gifs/schwifty.gif"
	];
	
	var indx = Math.floor(Math.random() * gif_links.length);
	
	while(indx == lastIndxPickedForRandomBackground){
		indx = Math.floor(Math.random() * gif_links.length);
	}
	lastIndxPickedForRandomBackground = indx;
	var bk_url = gif_links[indx]
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