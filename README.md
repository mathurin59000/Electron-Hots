# Electron-Hots

Important : You have to create a 'js' folder before running 'npm run watch' !

Start : 

```bash
# Clone this repository
# Go into the repository
# Install dependencies and run the app
npm install 
npm start
```

# Deploy app : 

Install electron packager globally :

```bash
npm install -g electron-packager
```
Run this command to generate the app

```bash
electron-packager <source> <appName> --platform=<platform> --arch=<arch>
ex : electron-packager ./ Youtube --platform=win32 --arch=x64 # To deploy on Windows
```

Follow the link to see more options : https://github.com/electron-userland/electron-packager/blob/master/usage.txt

electron-packager : https://github.com/electron-userland/electron-packager
