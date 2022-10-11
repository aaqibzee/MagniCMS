# MagniCMS
Acollege management system, porviding basic functionality for these modeules: 

* Stuent
* Teacher
* Course
* Subejct 
* Result 
* Grade

All modules have CRUD fucntionalites avaialble. 

# Technologies

* ASP.Net MVC 5
* Angular Js 
* Type Script
* Java Script 
* Signal R
* Entity Framework 
* SQL Server

# Runtime dependencies
* .Net (Standard) Framework  (Runtime) 4.7.2
Link: https://dotnet.microsoft.com/en-us/download/dotnet-framework/net472 
* SQL Server (2014 onwards)
Link: https://www.microsoft.com/en-us/sql-server/sql-server-downloads
* Windows environment

# Development dependencies
* .Net (Standard) Framework  (Developer Pack) 4.7.2
Lnk: https://dotnet.microsoft.com/en-us/download/dotnet-framework/net472 
* Node JS v 16.17.0  Link:https://nodejs.org/en/download/releases/
* Angular cli "~11.0.2" Command: npm install -g @angular/cli@11.0.2
    
# Setup guidelines (To only run the project):
Method 1 (In Visual Studio):
1) Install these dependencies:
    <br/>a. SQL Server
    <br/>b. Visual Studio
    <br/>d. .Net Framework
    <br/>d. Any browser
    
2) Open project in Visual Studio
3) Build the solution and let the NueGt restore the packages
4) Set "MagniCollegeManagementSystem" as startup project and run the solution
5) Application will run after setting up the DB and seed data
    
Method 2 (On IIS):
1) Install these dependencies:
    <br/>a. SQL Server
    <br/>b. Visual Studio
    <br/>c. .Net Framework
    <br/>d. Any browser
    
2) Open project in Visual Studio (Must be opened as Administrator)
3) Build the main solution and let the Nuget restore the packages
4) Set "EnvironmentSetter" as startup project and run the solution
5) The program will take care of setting up everything and it will launch application in browser

# Setup guidelines (To contribute as a developer):

1) Install these dependencies:
    <br/>a. SQL Server
    <br/>b. Visual Studio
    <br/>c. Any browser
    <br/>d. .Net Framework
    <br/>e. Node Js
    <br/>f. Angular CLI

2) Open project in Visual Studio
3) Build the solution and let the NuGet restore the packages.
4) Run npm instal command in  "MagniCollegeManagementSystem\Client"
4) For .Net side developemnt, explore the proejct "MagniCollegeManagementSystem" except the folder 'Client'
5) For Angular side developemnt, explore the folder 'Client' in "MagniCollegeManagementSystem" web project. This folder has all code related to Angular applciation


# How overall aplicaiton works:
The applicaiton makes use of ASP.NET MVC 5 and Angular architecture.

When angular applciaiton is built, it's generated output files are placed in Script folder inside MVC proejct.

When MVC project runs, it launches it's index view, inside which, "app-root" component (Basic building block of angular applicaiton inside browser)
is rendered, which makes Angular application run inside the MVC view.

Every time, applicaiton starts, it does starts the Angular applicaiton along. 

(Will be updated furhter..)
