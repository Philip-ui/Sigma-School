// Step 1 Wait for page to be fully loaded
// Step 2 Authorize the user and get a token.
// Step 3 Store the token somewhere else.
// Step 4 Fetch the user's top tracks using the token.
// Step 5 Display the top tracks.
// Step 6 Fetch new releases using the token.
// Step 7 Display new releases.
// Step 8 Fetch featured playlists using the token.
// Step 9 Display featured playlists.

var TOKEN = "";
var client_id = "13a1906c82bb47dd868f136c93952308";
var redirect_uri = window.location.origin;
var scope = "user-read-private user-read-email user-top-read";

function authorize () {
    var url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&scope=" + encodeURIComponent(scope);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    window.open(url, "_self");
}

function extractTokenFromURI() {
    var hash = window.location.hash;
    if (hash && hash.includes("access_token")) {
        var url = hash.replace("#access_token="BQAlQuOMujMn6pgTH6NvTECumvsL5ih_L_E0f4McH4RD-SM409UackAHWXLCLx7RNZr2QQi8MTjouz31VB3bfOcKXI2lcLMJo48t7F35b--DIXYSLkmmA7OZBX5TiBgbeXoMfsiGInTF331ZwPfL16tdveHintjhKepHjEbXunlDctkNQQuIgAPgncQqxXnjG89ozXwXFK8krFfloA1PmpTAyg","token_type=Bearer","expires_in=3600");
        var chunks = url.split("&");
        return token;
    }
    return null;
}

function generateCard(image, title, subtitle, href) {
    return `
      <a class="card" href="${href}" target="_blank">
          <img
              src="${image}"
              alt="peaceful piano"
              srcset=""
          />
          <span class="mdi mdi-play mdi-36px"></span>
          <div class="title">${title}</div>
          <div class="subtitle">${subtitle}</div>
      </a>
      `;
  }
  
  async function fetchUserTopItems() {
    try {
      var endpoint = "https://api.spotify.com/v1/me/top/tracks";
      var response = await fetch(endpoint + "?limit=6", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      });
      var data = await response.json();
      console.log("User top items", data);
      displayUserTopItems(data); // Display user top items
    } catch (error) {
      alert("Something went wrong.");
      console.log(error);
    }
  }
  
  async function fetchNewReleases() {
    try {
      var endpoint = "https://api.spotify.com/v1/browse/new-releases";
      var response = await fetch(endpoint + "?limit=6", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      });
      var data = await response.json();
      console.log("New releases", data);
      displayNewReleases(data); // Display new releases
    } catch (error) {
      alert("Something went wrong.");
      console.log(error);
    }
  }
  
  async function fetchFeaturedPlaylists() {
    try {
      var endpoint = "https://api.spotify.com/v1/browse/featured-playlists";
      var response = await fetch(endpoint + "?limit=6", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      });
      var data = await response.json();
      console.log("Featured playlists", data);
      displayFeaturedPlaylists(data); // Display featured playlists
    } catch (error) {
      alert("Something went wrong.");
      console.log(error);
    }
  }
  
  function displayUserTopItems(data) {
    var section = document.querySelector("#your-top-items");
    var sectionTitle = section.querySelector(".title");
    var sectionSubtitle = section.querySelector(".subtitle");
    var sectionWrapper = section.querySelector(".card-wrapper");
    sectionTitle.textContent = "Your Top Items";
    sectionSubtitle.textContent = "Based on your recent listening";
    
    if (!data.items.length) {
      sectionWrapper.innerHTML = "<h1> Uh oh! Looks like you haven't listened to anything recently. Go listen to some music on <a href='https://open.spotify.com' target='_blank'>Spotify</a> and come back here!</h1>";
      return;
    
    }
    for (let i = 0; i < data.items.length; i++) {
      var track = data.items[i];
  
      var image = track.album.images[1].url;
      var title = track.name;
      var subtitle = track.album.artists[0].name;
      var href = track.album.external_urls.spotify;
  
      sectionWrapper.innerHTML += generateCard(image, title, subtitle, href);
    }
  }
  
  function displayNewReleases(data) {
    var section = document.querySelector("#new-releases");
    var sectionTitle = section.querySelector(".title");
    var sectionSubtitle = section.querySelector(".subtitle");
    var sectionWrapper = section.querySelector(".card-wrapper");
    sectionTitle.textContent = "New Releases";
    sectionSubtitle.textContent = "New releases from Spotify";
  
    if (!data.albums.items.length) {
      sectionWrapper.innerHTML = "<h1> Uh oh! Looks like there aren't any new releases right now. Try again later!</h1>";
      return;
    }
  
    for (let i = 0; i < data.albums.items.length; i++) {
      var track = data.albums.items[i];
  
      var image = track.images[1].url;
      var title = track.name;
      var subtitle = track.artists[0].name;
      var href = track.external_urls.spotify;
  
      sectionWrapper.innerHTML += generateCard(image, title, subtitle, href);
    }
  }
  
  function displayFeaturedPlaylists(data) {
    var section = document.querySelector("#featured-playlists");
    var sectionTitle = section.querySelector(".title");
    var sectionSubtitle = section.querySelector(".subtitle");
    var sectionWrapper = section.querySelector(".card-wrapper");
    sectionTitle.textContent = "Featured Playlists";
    sectionSubtitle.textContent = "Featured playlists from Spotify";
  
    if (!data.playlists.items.length) {
      sectionWrapper.innerHTML = "<h1> Uh oh! Looks like there aren't any featured playlists right now. Try again later!</h1>";
      return;
    }
    
    for (let i = 0; i < data.playlists.items.length; i++) {
      var track = data.playlists.items[i];
  
      var image = track.images[0].url;
      var title = track.name;
      var subtitle = track.description;
      var href = track.external_urls.spotify;
  
      // Escape links in subtitle
      subtitle = subtitle.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      sectionWrapper.innerHTML += generateCard(image, title, subtitle, href);
    }
  }

window.addEventListener("load", function () {
  TOKEN = extractTokenFromURI();
  if (TOKEN) {
    console.log("Token", TOKEN);
    // fetch the endpoints
    fetchUserTopItems();
    fetchNewReleases();
    fetchFeaturedPlaylists();
  } else {
    authorize();
  }
});