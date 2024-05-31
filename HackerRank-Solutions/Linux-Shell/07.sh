#!/bin/bash

# 07. Getting started with conditionals
# Read in one character from STDIN.
#   - If the character is 'Y' or 'y' display "YES".
#   - If the character is 'N' or 'n' display "NO".
#   - No other character will be provided as input. 

read -p "What is your choice? (Press 'Y/y' or 'N/n') " answer

if [[(($answer == 'Y' || $answer == 'y'))]]; then
  echo "YES"
elif [[(($answer == 'N' || $answer == 'n'))]]; then
  echo "NO"
fi