#!/bin/bash

replacement=""

path="node_modules/react-scripts/config/env.js"
s="/^REACT_APP_/i"

cp $path "$path.bak"
sed -i "" "s*$s*/^$replacement/i*" $path
