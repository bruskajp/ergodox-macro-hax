#!/bin/bash
set -euo pipefail

brew install npm
brew install qmk/qmk/qmk
qmk setup
qmk config user.keyboard=moonlander
qmk config user.keymap=bruskajp
qmk new-keymap -km macrohax

