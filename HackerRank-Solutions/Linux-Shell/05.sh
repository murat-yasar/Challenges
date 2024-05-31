#!/bin/bash

# 05. The World of Numbers
# Given two integers, and , find their sum, difference, product, and quotient.

read -p  "Enter a number: " num1
read -p  "Enter a number: " num2

echo $((num1+num2))
echo $((num1-num2))
echo $((num1*num2))
echo $((num1/num2))