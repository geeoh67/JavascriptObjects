// you need to build 4 objects here.
// person, skills, education, onlineClasses

// person includes name, email, picture, github
// skills is an array of skills
// education includes school, degree, major, location, date
// online classes will include provider, and an array of courses with title and
// date

// all content must use the jquery append feature.

// html page should be styled with css.

// each object will have it's own display function as the last property

var person = {
  name: 'Greg Oliphant',
  email: 'goliphant@esi-estech.com',
  picture: 'images/greg_oliphant.jpg',
  github: 'https://github.com/geeoh67',
  display: function() {
    $('#person').append('<h1>Profile:</h1>');
    $('#person').append(person.name + '<br>');
    $('#person').append(person.email + '<br>');
    $('#person').append('<img src="' + person.picture + '" id="pic"><br>');
    $('#person').append('<a href="' + person.github + '">Github: geeoh67');    
  }
};

var skills = {
  skills: [
    'Node.js',
    'JavaScript',
    'MongoDB',
    'Git'
  ],
  display: function() {
    $('#skills').append('<h1>Skills:</h1>');
    for (var i = 0; i < skills.skills.length; ++i) {
      $('#skills').append('<li>' + skills.skills[i] + '</li>');
    }
  }
};


var education = {
  school: 'DePaul University',
  degree: 'Masters',
  major: 'Computer Science',
  location: 'Chicago, IL',
  date: 'June, 1994',
  display: function() {
    $('#education').append('<h1>Education:</h1>');
    $('#education').append('School: ' + education.school + '<br>');
    $('#education').append('Degree: ' + education.degree + '<br>');
    $('#education').append('Major: ' + education.major + '<br>');
    $('#education').append('Location: ' + education.location + '<br>');
    $('#education').append('Date: ' + education.date + '<br>');
  }
};

var onlineClasses = {
  Pluralsight: [
    {
      title: 'CSS Flexbox Fundamentals',
      date: 'November, 2015'
    },
    {
      title: 'AWS Developer Fundamentals',
      date: 'December, 2015'}, {title: 'Git Fundamentals', date: 'January, 2016'
    }
  ],
  NodeSchool: [
    {
      title: 'javascripting', 
      date: 'February, 2015'
    },
    {
      title: 'learnyounode',
      date: 'February, 2015'
    },
    {
      title: 'git-it',
      date: 'February, 2015'
    },
  ],
  display: function() {
    $('#onlineClasses').append('<h1>Online Classes:</h1>');
    for (var key in onlineClasses) {
      if (typeof onlineClasses[key] !== 'function') {
        $('#onlineClasses').append('<h2>' + key + '</h2>');
        for (var i = 0; i < onlineClasses[key].length; ++i) {
          $('#onlineClasses').append('<li>' + onlineClasses[key][i].title + ', ' + onlineClasses[key][i].date + '</li>');
        }
      }
    }
  }
};

person.display();
skills.display();
education.display();
onlineClasses.display();
