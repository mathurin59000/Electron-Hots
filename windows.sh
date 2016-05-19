echo "Installing electron-packager..."
npm install -g electron-packager
echo "Buildind .exe"
electron-packager ./ Hots --platform=win32 --arch=x64 --icon=heroes.ico
echo " "
echo "Done"