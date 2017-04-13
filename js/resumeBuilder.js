var work = {
  "jobs" : [
    {
      "employer" : "Chapman University",
      "title" : "Help Desk Technician",
      "location" : "Orange, CA, USA",
      "dates" : "2012-2015",
      "description" : "Help desk technician description"
    }
  ]
};
var projects = {
  "projects" : [
    {
      "title" : "Flask Web App",
      "dates" : "March, 2017",
      "description" : "A RESTful web app created using Flask,\
                       SQLAlchemy, SQLite, and Python",
      "images" : ["images/fry.jpg"]
    }
  ]
};
var bio = {
  "name" : "Riley Mathis",
  "role" : "Web Developer",
  "welcomeMessage" : "Welcome!",
  "biopic" : "images/fry.jpg",
  "skills" : ["Python", "HTML/CSS", "JavaScript"],
  "contacts" : {
    "mobile" : "(509)-954-3952",
    "email" : "rileydmathis@gmail.com",
    "github" : "github.com/rileyDMK",
    "twitter" : "@RDMathisKlesert",
    "location" : "Rathdrum, ID, USA"
  }
};
var education = {
  "schools" : [
    {
      "name" : "Chapman University",
      "location" : "Orange, CA, US",
      "degree" : "BS",
      "dates" : "2011-2015",
      "url" : "www.chapman.edu",
      "majors" : ["CompSci"]
    }
  ],
  "onlineCourses" : [
    {
      "title" : "JavaScript Basics",
      "school" : "Udacity",
      "dates" : "April, 2017",
      "url" : "temp"
    }
  ]
};

// Header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBiopic);
$("#header").append(formattedWelcome);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

// Skills
if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  for(var i = 0; i < bio.skills.length;i++){
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
  }
}

// Work Experience
for(var i = 0;i < work.jobs.length;i++){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
  $(".work-entry:last").append(formattedDates);
  $(".work-entry:last").append(formattedLocation);
  $(".work-entry:last").append(formattedDescription);
}



// var name = "AlbERt EINstEiN";
//
// function nameChanger(oldName) {
//     var finalName = oldName;
//     // Your code goes here!
//     var splitName = oldName.split(" ");
//     splitName[1] = splitName[1].toUpperCase();
//     splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
//     finalName = splitName.join(" ");
//
//
//     // Don't delete this line!
//     return finalName;
// }
//
// // Did your code work? The line below will tell you!
// console.log(nameChanger(name));
