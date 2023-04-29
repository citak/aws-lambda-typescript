#!/bin/bash

DIRECTORY=$(dirname "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)")
if [ -d "$DIRECTORY/.git" ]; then
    if [ ! -L "$DIRECTORY/.git/hooks" ]; then
        if [ -d "$DIRECTORY/.githooks" ]; then
            if [ -d "$DIRECTORY/.git/hooks" ]; then
                mv -f "$DIRECTORY/.git/hooks" "$DIRECTORY/.git/hooks.dist"
            fi
            ln -s "$DIRECTORY/.githooks" "$DIRECTORY/.git/hooks"
        fi
    fi
fi

