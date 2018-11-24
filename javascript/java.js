var banners = document.getElementsByClassName("banner");
var infobars = document.getElementsByClassName("content");
var sidenav = document.getElementsByClassName("sidenav");

var moveStartDistance = '200';
var moveSpeed = '25';

for(var iImg = 0; iImg < banners.length; iImg++)
{
    var banner = banners[iImg];
    banner.style.top = '2px';
    banner.style.opacity = 0;
    banner.style.left = moveStartDistance+'px';
    checkIfInScreen(banner);
}

for(var iBar = 0; iBar < infobars.length; iBar++)
{
    var infobar = infobars[iBar];
    infobar.style.opacity = 0;
    infobar.style.left = moveStartDistance+'px';
    checkIfInScreen(infobar);
}

checkResolution();

function MoveLeft(element) {
    var leftPos = element.style.left;
    leftPos = parseInt(leftPos.substring(0,leftPos.length-2));

    if (leftPos > 0)
    {
        leftPos -= leftPos / moveSpeed;
        element.style.left = leftPos+'px';

        var imageAlpha = parseFloat(element.style.opacity) + 0.015;
        element.style.opacity = imageAlpha;

        window.setTimeout(function() {
            MoveLeft(element);
          }, 10);
    }
}

function checkIfInScreen(element) {

    if(window.innerHeight > element.getBoundingClientRect().top + 100)
    {
        MoveLeft(element);
    }

    window.setTimeout(function() {
        checkIfInScreen(element)
      }, 100);
}

function checkResolution() {
    if(window.innerWidth < 1500) {
        sidenav[0].style.display = "none";
    }
    else {
        sidenav[0].style.display = "block";
    }

    window.setTimeout(function() {
        checkResolution()
      }, 100);
}
