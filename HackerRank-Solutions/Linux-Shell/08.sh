#!/bin/bash

# 08. More on Conditionals
# Given three integers (X, Y, and Z) representing the three sides of a triangle, identify whether the triangle is scalene, isosceles, or equilateral.
#   - If all three sides are equal, output EQUILATERAL.
#   - Otherwise, if any two sides are equal, output ISOSCELES.
#   - Otherwise, output SCALENE.

read -p "Enter a number for X: " X
read -p "Enter a number for Y: " Y
read -p "Enter a number for Z: " Z

if [[(($X == $Y && $Y == $Z))]]; then
  echo "EQUILATERAL"
elif [[(($X == $Y || $Y == $Z || $X == $Z))]]; then
  echo "ISOSCELES"
else
  echo "SCALENE"
fi