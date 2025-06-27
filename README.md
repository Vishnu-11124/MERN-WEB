# MERN-Stack
Web development using MERN stack.

------------------------------------------------------- Git & Github -------------------------------------------------------

-------- Git --------  

- Version control system is a tools that helps to track changes in code.

- Git is a version control system and it is popular, free, open source, fast and scalable

- Track the history.

- Collaborate


-------- Github --------  

- Website that allows developers to store and manage their code using git.

    - https://github.com


-------- Setting up Git --------

- Download Visual studio code

- Download Git bash

- Git version (terminal) : git --version


-------- Configuring Git --------

- git config --global user.name "github name"

- git config --global user.email "email address"

- git config --list


-------- Types of states --------

-> Untracked : New files that git doesn't yet track

-> Modified : Changed

-> Staged : File is ready to be committed

-> Unmodified : Unchanged


-------- Git Commands --------

-> Clone - Cloning a repository on our local mahine

    - git clone <- https link ->


-> Status - Display the state of the code

    - git status


-> Add - Adds new/changed files in your working directory to the git staging area

    - git add .


-> Commit - It is the record of change

    - git commit -m "some message"


-> Push - Upload local repo content to remote repo

    - git push origin main

    - origin : name of the remote github repo

    - main : branch name

-> Init - Used to create a new git repo

    - Create folder

    - git init

    - Perform add and commit commands for updated files

    - Create new repo on github

    - git remote add origin <-link-> 

    - git remote -v : Verify remote

    - git branch : Check branch

    - git branch -M main : Rename branch

    - git push -u origin main 


-------- Git Branches --------

- Branch is like a separate workspace where you can make changes and try new ideas without affecting the main project.

- git branch : To check branch

- git branch -M main : Rename branch

- git checkout -b <- new branch name -> : Create new branch

- git checkout <- branch name -> : To navigate

- git branch -d <- branch name -> : To delete branch


-------- Merging Code --------

- First Way

    - git diff <- branch name -> : Compare commits,branches,files & more

    - git merge <- branch name -> : Merge 2 branches

- Second way

    - Create a PR(Pull Request)

    - Pull Request : It lets you tell others about changes you have pushed to a branch in a repository on GitHub.


-> Pull - Used to fetch and download content from a remote repo and immediately update the local repo to match that content.

    - git pull origin main


----------------------------------------------------------------------------------------------------------------------------------