// https://www.codewars.com/kata/577ff15ad648a14b780000e7
// REPL it with obj notations: https://repl.it/repls/MulticoloredLavenderRuby
function greet(language) {
  let languages = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  if (languages[language] !== undefined) {
    return languages[language];
  } else {
    return languages.english;
  }
}

/*
switch(language){
  case 'english':
  return 'Welcome';
  break;
  case 'czech':
  return 'Vitejte';
  break;
  case 'danish':
  return 'Velkomst';
  break;
  case 'dutch':
  return 'Welkom';
  break;
  case 'estonian':
  return 'Tere tulemast';
  break;
  case 'finnish':
  return 'Tervetuloa';
  break;
  case 'flemish':
  return 'Welgekomen';
  break;
  case 'french':
  return 'Bienvenue';
  break;
  case 'german':
  return 'Willkommen';
  break;
  case 'irish':
  return 'Failte';
  break;
  case 'italian':
  return 'Benvenuto';
  break;
  case 'latvian':
  return 'Gaidits';
  break;
  case 'lithuanian':
  return 'Laukiamas';
  break;
  case 'polish':
  return 'Witamy';
  break;
  case 'spanish':
  return 'Bienvenido';
  break;
  case 'swedish':
  return 'Valkommen';
  break;
  case 'welsh':
  return 'Croeso';
  break;
  default:
  return 'Welcome';
}
*/
