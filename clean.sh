echo "Cleaning up node modules";
rm -rf node_modules;
npm install;
echo "Clearning all temp directories";
rm -rf $TMPDIR/react-native-packager-cache-*;
rm -rf $TMPDIR/metro-*;
rm -rf $TMPDIR/react-*;
rm -rf $TMPDIR/haste-*;
watchman watch-del-all;
echo "Cleaning up iOS folders"
cd ios;
rm -rf Pods;
rm -rf Podfile.lock;
rm -rf build;
rm -rf ~/Library/Developer/Xcode/DerrivedData;
pod update;
pod install;
cd ..;
echo "cleanup android folder"
cd android;
rm -rf build;
echo "PLEASE DELETE THE APP AND RESTART SIMULATOR after cache is reset";
cd ..;
npm start -- --reset-cache;