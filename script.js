// Uzyskiwanie dostępu do przycisku i menu
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

// Funkcja do otwierania i zamykania menu
function toggleMenu() {
  if (sideMenu.style.left === '-250px') {
    sideMenu.style.left = '0';
  } else {
    sideMenu.style.left = '-250px';
  }
}

// Obsługuje kliknięcie na przycisk, aby przełączać widoczność menu
menuToggle.addEventListener('click', toggleMenu);

// Obsługuje kliknięcie poza menu – zamyka menu, jeśli jest otwarte
window.addEventListener('click', function(event) {
  if (!sideMenu.contains(event.target) && event.target !== menuToggle) {
    sideMenu.style.left = '-250px'; // Zamyka menu, jeśli kliknięto poza nim
  }
});

function checkpassword() {
           var password = document.getElementById("password").value;
            
            if (password === "kod") {
                var userResponse = confirm("html");
                if (userResponse) {
                    window.location.href = "https://glitch.com/edit/#!/265wikingowie/";
                } else {
                    alert("Anulowano.");
                }
            } else if (password === "file") {
                var userResponse = confirm("plany");
                if (userResponse) {
                    window.location.href = "https://drive.google.com/drive/folders/1WyLGPgrNm4YLouJUlhp4mJqUvfc-h3yr?usp=sharing";
                } else {
                    alert("Anulowano.");
                }
            } else if (password === "nic") {
                window.location.href = "about:blank";
            } else {
                alert("Niepoprawne polecenie.");
            }
        }

var roundButton = document.querySelector("#roundButton");
        roundButton.addEventListener("click", showMenu, false);

        var flyoutMenu = document.querySelector("#flyoutMenu");
        flyoutMenu.addEventListener("click", hideMenu, false);

        function showMenu(e) {
            flyoutMenu.classList.add("show");

            document.body.style.overflow = "hidden";
        }

        function hideMenu(e) {
            flyoutMenu.classList.remove("show");
            e.stopPropagation();

            document.body.style.overflow = "auto";
        }
