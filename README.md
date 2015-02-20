
////////////////////////////////////////////////////////////////////////////////
FEELZ APP INFORMATION
////////////////////////////////////////////////////////////////////////////////
Feelz is a web design project intended for mobile devices. 

Group project BY Kevin Hsu, Julia Aceves, Monica Liu

Project for CSE170/COGS120, Introduction to Human-Computer Interaction, at UCSD

This project consists of weekly checkups focusing on user tasks, design, and
development

github: https://github.com/tsuruko/feelzApp

herokuapp website: http://feelzapp.herokuapp.com/

////////////////////////////////////////////////////////////////////////////////
SETUP NOTES
////////////////////////////////////////////////////////////////////////////////

clone to introHCI folder, like our labs

add body "{padding-top: 70px; }" to css for navibar compensation

static code archived

app page template located in views/template_with_sidebar.handlebars

////////////////////////////////////////////////////////////////////////////////
DATA TEMPLATES
////////////////////////////////////////////////////////////////////////////////
post data is stored with the following fields in the mongo model:

"postCategory": String,
"postTitle": String,
"postInfo": String,
"fullPost": String,
"bumpCount": Number,
"date": Date,
"localDate": String

in the json file, post data is stored as:

"postCategory": String,
"postTitle": String,
"postInfo": String,
"fullPost": String,
"bumpCount": Number

date and localDate fields are added in initDB.js

user data is stored with the following fields:

"username": String,
"email": String,
"password": String


////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////