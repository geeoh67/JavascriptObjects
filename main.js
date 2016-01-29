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
  skillsList: [
    'Node.js',
    'JavaScript',
    "Linux",
    'MongoDB',
    'Git'
  ],
  display: function() {
    $('#skills').append('<h1>Skills:</h1>');
    for (var i = 0; i < skills.skillsList.length; ++i) {
      $('#skills').append('<li>' + skills.skillsList[i] + '</li>');
    }
  }
};


var education = {
  'DePaul University': [
    {
      degree: 'Masters of Science',
      major: 'Computer Science',
      location: 'Chicago, IL',
      date: 'June, 1994'
    }
  ],
  'DeVry Institute of Technology': [
    {
      degree: 'Bachelors of Science',
      major: 'Computer Information Systems',
      location: 'Irving, TX',
      date: 'February, 1989'
    }
  ],
  display: function() {
    $('#education').append('<h1>Education:</h1>');
    for (var key in education) {
      if (typeof education[key] !== 'function') {
        $('#education').append('<h2>' + key + '</h2>');
        for (var i = 0; i < education[key].length; ++i) {
          $('#education').append('<li>Degree: ' + education[key][i].degree + '</li>');
          $('#education').append('<li>Major: ' + education[key][i].major + '</li>');
          $('#education').append('<li>Location: ' + education[key][i].location + '</li>');
          $('#education').append('<li>Date: ' + education[key][i].date + '</li>');
        }
      }
    }
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
onlineClasses.display() 
