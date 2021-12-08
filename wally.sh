#!/bin/bash
set -euo pipefail

if [ $# -eq 0 ]; then
  echo "No file provided. Using the most recent 'moonlander_*.zip' file in Downloads"
  CONFIG_ZIP=$(ls -t ~/Downloads/moonlander_*.zip | head -1)
else
  CONFIG_ZIP=$1
fi

cp $CONFIG_ZIP .
echo "Unzipping $CONFIG_ZIP"
rm -rf ConfigSource
unzip -q $CONFIG_ZIP -d ConfigSource
rm $(basename $CONFIG_ZIP)

SOURCE_FILE="./ConfigSource/moonlander_*_source"
ln -sf $(basename $SOURCE_FILE) ConfigSource/moonlander_source

echo "Building new source file"
npm run hax > /dev/null

echo "Fixing source files"
sed -i '' -e 's/#include "keymap_/\/\/#include "keymap_/g' ConfigSource/moonlander_source/keymap.c
sed -i '' -e 's/extern bool g_suspend_state;/\/\/extern bool g_suspend_state;/g' ConfigSource/moonlander_source/keymap.c
sed -i '' -e 's/g_suspend_state || //g' ConfigSource/moonlander_source/keymap.c

cp ConfigSource/moonlander_source/config.h ~/qmk_firmware/keyboards/moonlander/keymaps/macrohax/config.h
cp ConfigSource/moonlander_source/keymap.c ~/qmk_firmware/keyboards/moonlander/keymaps/macrohax/keymap.c
cp ConfigSource/moonlander_source/rules.mk ~/qmk_firmware/keyboards/moonlander/keymaps/macrohax/rules.mk
qmk compile -j 0 -km macrohax

echo "Flashing new firmware"
wally-cli ~/qmk_firmware/.build/moonlander_macrohax.bin


