//index.html
document.getElementById("launchButton").addEventListener("click", function() {
  const version = document.getElementById("versionSelect").value;
  const url = `versions/${version}/index.html`;
  window.location.href = url;
});

function joinServer(server) {
  alert(`Joining ${server}`);
}
//cosmetics.html
// Function to check if user has scrolled to the bottom of the page
