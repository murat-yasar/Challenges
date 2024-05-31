# BASH script

## 00. File Extension
The file extension is supposed to be **.sh**

## 01. File Header
Add the following script to the top of the bash file
```Bash
  #!/bin/bash
```

## 02. Print on the Screen
```Bash
  echo Murat
  echo "My name's Murat"

  myName = Murat
  echo "My name's $myName"
```

## 03. Input from the User
```Bash
  echo "What's your name?"
  read name1
  echo "Welcome $name1"

  read -p "Enter your name: " name2
  echo "Welcome $name2"
```

## 04. Conditionals
```Bash
  read -p "Enter your age: " age

  if [[ $age < 18 ]]; then
    echo "You are not old enough!"
  elif [[ $age > 65 ]]; then
    echo "You are too old for this stuff!"
  else
    echo "Welcome to the club"
  fi

  read -p "Enter your name: " name

  if [[  (($name == "Boss" || $name == "boss")) && $age > 18 ]]; then
    echo "Welcome big boss!"
  elif [[ $name == "Boss" || $name == "boss" ]]; then
    echo "Welcome boss!"
  else
    echo "who the hell are you?"
  fi
```

## 05. Loops
  ### while-loop
  ```Bash
  counter=1
  while [ $counter -lt 5 ]
  do
    echo $counter
    ((counter++))
  done
  ```

  ### for-loop
  ```Bash

  ```

## 06. Arrays
```Bash

```

## 07. Functions
```Bash

```