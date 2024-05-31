#!/bin/bash

# 06. Comparing Numbers
# Given two integers, X and Y, identify whether X<Y or X>Y or X=Y.
# Exactly one of the following lines:
#   - X is less than Y
#   - X is greater than Y
#   - X is equal to Y 

read -p "Enter a number for X: " num1

read -p "Enter a number for Y: " num2

if [[ $num1 < $num2 ]]; then
  echo "X is less than Y"
elif [[ $num1 > $num2 ]]; then
  echo "X is greater than Y"
else
  echo "X is equal to Y"
fi