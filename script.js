let userName = "";
let userPnr  = "";

function visaForm() {
  document.getElementById('formOverlay').classList.add('show');
}

function stängForm() {
  document.getElementById('formOverlay').classList.remove('show');
}

function sparaData(e) {
  e.preventDefault();
  userName = document.getElementById('nameIn').value.trim();
  userPnr  = document.getElementById('pnrIn').value.trim();
  stängForm();
  alert("Dina uppgifter har sparats! Klicka på kortknappen för att se kortet.");
  return false;
}

function ta() {
  document.getElementById('nameOut').textContent = userName;
  document.getElementById('pnrOut').textContent  = userPnr;
  document.getElementById('overlay').classList.add('show');
}

function bort() {
  document.getElementById('overlay').classList.remove('show');
}
