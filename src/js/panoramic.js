
import "@styles/main.scss";
import "@styles/_header.scss";
import "@styles/_footer.scss";
import "@styles/_null.scss";
import "@styles/_fonts.scss";
// ==========================================================
// 360 deg panorama
// ==========================================================
let container = document.querySelector('#hall__panoramic');
let panorama = new PANOLENS.ImagePanorama("https://i.imgur.com/wTCPouq.jpg");
let viewer = new PANOLENS.Viewer({
	container: container
});

viewer.add(panorama);
