#!/bin/bash

#02. Looping and Skipping
# Your task is to use for loops to display only odd natural numbers from 1 to 99.

for i in {1..99} 
do
    if [[ $((i%2)) == 0 ]]; then
    continue
    fi
    echo $i
done