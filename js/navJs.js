
window.addEventListener('click', function(e){
	if (document.getElementById('searchInputBox').contains(e.target)){
    if(this.screen.width > 1024)
    {
      document.getElementById("mhpVr").style.display = "none";
      document.getElementById("mhpNav").style.display = "none";
      document.getElementById("searchExtend").classList.add("w-100");

      return
    }

  } else{
    document.getElementById("mhpVr").style.display = "flex";
    document.getElementById("mhpNav").style.display = "flex";
    document.getElementById("searchExtend").classList.remove("w-100");
    document.getElementById("mhpVr").classList.remove("d-none");
  }
});