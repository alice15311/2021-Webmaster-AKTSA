
let hasSetUpMobile = false;
const navBar = document.getElementsByTagName("nav")[0];

//getting whether or not account is logged in, updating nav bar accordingly
const loggedIn = localStorage.getItem("katKureLoggedIn");
if(loggedIn === "true"){
  const accountEl = navBar.getElementsByClassName("accountLink")[0];
  const linkEl = accountEl.getElementsByTagName("a")[0];
  if(linkEl.textContent === "Log In") {
    //inserting icon and changing content to name
    let newIcon = document.createElement("i");
    newIcon.className = "material-icons";
    newIcon.textContent = "account_circle";
    linkEl.textContent = "Jane Doe";
    linkEl.href = "#";
    linkEl.insertBefore(newIcon, linkEl.firstChild);

    //making it a dropdown menu
    linkEl.className = "dropdown-top loggedIn";
    let newDropdown = document.createElement("div"),
    newDropList = document.createElement("ul"),
    newDashLink = document.createElement("li"),
    logOut = document.createElement("li");
    newDashLink.innerHTML = "<a href = \"account/dashboard.html\">Dashboard</a>";

    //logout button
    logOut.innerHTML = "<a href = \"" + location.href + "\">Log out</a>";
    logOut.addEventListener("click", function(){
      localStorage.setItem("katKureLoggedIn", "false");
    });

    //appending stuff
    newDropList.appendChild(newDashLink);
    newDropList.appendChild(logOut);
    newDropList.className = "dropdown";
    newDropdown.appendChild(newDropList);
    accountEl.appendChild(newDropdown);
  }
  else {
    const listLinks = accountEl.getElementsByTagName("div")[0].getElementsByTagName("li");
    let logOut = listLinks[listLinks.length - 1];
    if(logOut){
      logOut.addEventListener("click", function(){
        localStorage.setItem("katKureLoggedIn", "false");
      });
    }
  }
}

//dropdown menus toggle function for mobile
let toggleDropdown = function(liEl, divEl){
  //getting elements + target height
  const aEl = liEl.firstChild;
  const target = divEl;
  const maxHeight = divEl.scrollHeight;
  let clicks = 0;

  //event handler function that toggles height
  return function(){
    clicks++;
    aEl.classList.toggle("active");
    if(clicks % 2 === 0){
      target.style.maxHeight = "0";
    }
    else {
      target.style.maxHeight = maxHeight + "px";
    }
  };
}

//navigation on mobile
function setUpMobile(){
  //toggling active class when clicked
  navMenu.addEventListener("click", function(){
    navBar.classList.toggle("active");
  });

  //looping through dropdown menus in the navigation bar
  const dropDowns = navBar.getElementsByClassName("dropdown");
  for(let i = 0; i < dropDowns.length; i++){
    const divEl = dropDowns[i].parentElement,
    liEl = divEl.parentElement;
    liEl.addEventListener("click", toggleDropdown(liEl, divEl));
  }

  //set has set up mobile to true, so it's not needed the next time
  hasSetUpMobile = true;
}

//changing navigation style on scroll
let setUpNavScroll = (function(){
  const prevClassName = navBar.className;
  let scrollWait = false;
  let handleScroll = function(){
    if(!scrollWait){
      window.requestAnimationFrame(function(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
          navBar.className = "navbar scrolledDown";
        }
        else {
          navBar.className = prevClassName;
        }
        scrollWait = false;
      });
      scrollWait = true;
    }
  }
  return function(initial){
    scrollWait = false;
    window.addEventListener("scroll", handleScroll);
  }
})();

//handling both setting up mobile navigation and scrolling
function handleAll(initial){
  if(getComputedStyle(navMenu).display === "block"){
    if(!hasSetUpMobile){
      setUpMobile();
    }
  }
  navBar.style.position = "fixed";
  setUpNavScroll(initial);
}
handleAll(true);
window.addEventListener("resize", handleAll);