// await can only be executed in functions prefixed with the async keyword.
// await only pauses the current async function

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




// setAutoScroll Function and related code - a black box to me
// ===========================================================

var fps = 100;
var speedFactor = 0.001;
var minDelta = 0.5;
var autoScrollSpeed = 10;
var autoScrollTimer, restartTimer;
var isScrolling = false;
var prevPos = 0, currentPos = 0;
var currentTime, prevTime, timeDiff;

window.addEventListener("scroll", function (e) {
    // window.pageYOffset is the fallback value for IE
    currentPos = window.scrollY || window.pageYOffset;
});

window.addEventListener("wheel", handleManualScroll);
window.addEventListener("touchmove", handleManualScroll);

function handleManualScroll() {
    // window.pageYOffset is the fallback value for IE
    currentPos = window.scrollY || window.pageYOffset;
    clearInterval(autoScrollTimer);
    if (restartTimer) {
        clearTimeout(restartTimer);
    }
    restartTimer = setTimeout(() => {
        prevTime = null;
        setAutoScroll();
    }, 50);
}

function setAutoScroll(newValue) {
    if (newValue) {
        autoScrollSpeed = speedFactor * newValue;
    }
    if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
    }
    autoScrollTimer = setInterval(function(){
        currentTime = Date.now();
        if (prevTime) {
            if (!isScrolling) {
                timeDiff = currentTime - prevTime;
                currentPos += autoScrollSpeed * timeDiff;
                if (Math.abs(currentPos - prevPos) >= minDelta) {
                    isScrolling = true;
                    window.scrollTo(0, currentPos);
                    isScrolling = false;
                    prevPos = currentPos;
                    prevTime = currentTime;
                }
            }
        } else {
            prevTime = currentTime;
        }
    }, 1000 / fps);
}






var connectionsSent = 0;
 
async function clickConnectButtons(){

// SEND BUTTON CLASS	
//OLD "button-primary-large ml1"
//NEW "ml1 artdeco-button artdeco-button--3 artdeco-button--primary ember-view"	
	
	var sendNowButtonClassName = "ml1 artdeco-button";
	var sendNowButton;

// CONNECT BUTTON CLASS
//OLD 	"search-result__actions--primary button-secondary-medium"
//NEW "search-result__action-button search-result__actions--primary artdeco-button artdeco-button--default artdeco-button--2 artdeco-button--secondary"
//NEW "search-result__action-button search-result__actions--primary artdeco-button artdeco-button--default artdeco-button--2 artdeco-button--secondary"

	var connectButtonsClassName = "search-result__action-button search-result__actions--primary artdeco-button"; 
	var connectButtons = document.getElementsByClassName(connectButtonsClassName); // array
	var connectButtonsLength = connectButtons.length;

// NEXT BUTTON CLASS
//OLD "next"
//NEW "artdeco-pagination__button artdeco-pagination__button--next artdeco-button artdeco-button--muted artdeco-button--icon-right artdeco-button--1 artdeco-button--tertiary ember-view"	

	var nextButtonClassName = "artdeco-pagination__button artdeco-pagination__button--next";
	var nextButton = document.getElementsByClassName(nextButtonClassName)[0];
	
	var i;
	
	for (i=0; i < connectButtonsLength; i++){
		console.log("Connection " + (i + 1) + " on this page");
		var connectButton = connectButtons[i];
		if (connectButton.innerText == "Connect"){
			var sleepTime = Math.floor(Math.random() * ((10000-3000)+1) + 3000)
			await sleep(sleepTime);
			connectButton.click();
			console.log("connect button was clicked");
			var sleepTime = Math.floor(Math.random() * ((10000-3000)+1) + 3000)
			await sleep(sleepTime);
			
			sendNowButton = document.getElementsByClassName(sendNowButtonClassName)[0];
			var emailRequired = sendNowButton.hasAttribute("disabled");
			
			if (emailRequired) {
				console.log("email is required");
				var cancelIcon = document.querySelectorAll('[type="cancel-icon"]');
				var cancelIconLength = cancelIcon.length;
				var j;
				for (j=0; j < cancelIconLength; j++) {
					cancelIcon[j].click();
					console.log("cancel button was clicked");
				}
			}
			if (emailRequired != true){
				sendNowButton.click();
				console.log("send button was clicked");
				connectionsSent = connectionsSent + 1;
			}			
			var sleepTime = Math.floor(Math.random() * ((10000-3000)+1) + 3000)
			await sleep(sleepTime);
		}
		else {
			console.log("invite already sent");
		}
		console.log("TOTAL SUCCESSFUL CONNECTIONS SENT: " + connectionsSent);
	}
	nextButton.click();
	console.log("next button button was clicked");
	console.log("sleeping for 20 secs");
	await sleep(20000);
	window.scrollTo(0, 0);
	console.log("jumped to top");
	console.log("sleeping for 20 secs");
	await sleep(20000);
	window.scrollTo(0, 0);
	console.log("jumped to top");
	console.log("sleeping for 1 minute");
	await sleep(60000);  // wait 1 minute
	clickConnectButtons();
}



// call startConnecting function
startConnecting();


// startConnecting Function
// ========================
async function startConnecting(){
	// Start scrolling the page using the setAutoScroll function - this is a black box to me
	setAutoScroll(20);
	console.log("scrolling started");
	console.log("sleeping for 1 minute");
	await sleep(60000);  // wait 1 minute
	clickConnectButtons();
}

// connectionsSent