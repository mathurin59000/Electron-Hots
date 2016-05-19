# Electron-Hots

- Electron
- Angular Js
- Angular Material

Start : 

```bash
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
ex : electron-packager ./ Hots --platform=win32 --arch=x64 --icon=heroes.ico # To deploy on Windows
```

Follow the link to see more options : https://github.com/electron-userland/electron-packager/blob/master/usage.txt

electron-packager : https://github.com/electron-userland/electron-packager

# Easy Install

```bash
./install.sh
```

# Build Windows-app

```bash
./install.sh
```

NOTE : if you're trying rebuild the app, make sure that you not have a previous compiled app.