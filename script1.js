const logoutButton = document.querySelector("#logout");
logoutButton.addEventListener("click", () => {
  alert("You have logged out.");
});


  var dropdown = document.querySelector('.dropdown');
  dropdown.addEventListener('click', function() {
    document.querySelector('.dropdown-content').classList.toggle('show');
  });
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
      var dropdowns = document.querySelectorAll('.dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

