## Jel'sa Karaoke website source code
### Languages and Tools used:
>![webpack](https://img.shields.io/badge/Webpack-163D4F?style=for-the-badge&logo=Webpack&logoColor=cyan)
![Node](https://img.shields.io/badge/Node.js-163D4F?style=for-the-badge&logo=nodedotjs&logoColor=cyan)
![jQuery](https://img.shields.io/badge/jQuery-163D4F?style=for-the-badge&logo=jquery&logoColor=cyan)
![Sass](https://img.shields.io/badge/Sass-163D4F?style=for-the-badge&logo=sass&logoColor=cyan)
#### How to deploy a local server:
>1. Download a source code via putting "git clone https://github.com/alexeevivan/jelsa.git" request to the command line (Microsoft Visual Studio Code is recommended as a development environment)
>2. Use "npm run start" command to start a local server (that will open the browser with the "http://localhost:4300/" address)
>3. Use "npm run build" command to collect all code changes, that allows you to push the code to GitHub repository
#### How to add a new modal window to the main page:
>1. find the class named "modal-ny" in the main.scss & main-responsive.scss files
>2. change the "display" property to "flex" ("none" if the modal window is off)
>3. change the path of "img" tag with the name "banner__wallpaper" as a class placed inside the "modal-ny__card" & "mobile__modal-ny__card" classes to set new image
>4. don't forget about refreshing info inside the "alt" attribute of "img" tag
>5. change the description of "modal-ny__proposal" class to set an actual info about the brand new party