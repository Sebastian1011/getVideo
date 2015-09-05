#! /bin/sh

echo "before"
youtube-dl --version 2>&1
youtube-dl -sge  https://www.youtube.com/watch?v=3HPx3Jo-xLg 2>&1

echo "done"

