while getopts v: flag
do
    case "${flag}" in
        v) version=${OPTARG};;
    esac
done

#delete favicon and service worker
rm favicon.png
rm flutter_service_worker.js
#rm -rf assets/packages/flutter_math_fork

#modify index.html
sed -i '.bak' "s/<base href=\"\/\">/<base href=\"\/public\/marketplaceweb\/zipbundle\/$version\/\">/" index.html
rm index.html.bak

#modify main_dart.js
sed -i '.bak' "s/\"https:\/\/unpkg.com\/canvaskit-wasm@0.28.1\/bin\/\"/\"custom-scheme:\/\/unpkg.com\/canvaskit-wasm@0.28.1\/bin\/\"/" main.dart.js
sed -i '.bak' "s/\"https:\/\/unpkg.com\/canvaskit-wasm@0.28.1\/bin\/canvaskit.js\"/\"custom-scheme:\/\/unpkg.com\/canvaskit-wasm@0.28.1\/bin\/canvaskit.js\"/" main.dart.js

rm main.dart.js.bak

#compress files
zip main.zip ds_bridge.js index.html js_util.js main.dart.js manifest.json native_bridge.js platform.js version.json

echo 'Generating SHA 256 checksum for main.zip...'
shasum -a 256 main.zip

#delete stale build dir if already present
rm -rf ~/Documents/$version

#copy to documents and rename
cp -r ../web ~/Documents/
cd ~/Documents/
mv web $version