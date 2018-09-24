function scuberGreetingForFeet(distance) {
  if (distance <=400){
    return "This one is on me!"
  }
    else if (distance >2000 && distance<2500){
     return "I will gladly take your thirty bucks."
    }
    else if (distance >=2500){
      return "No can do."
      }
  }
  
  //Ternanry - binary   
function ternaryCheckCity (city) {
  return city == "NYC" ? "Ok, sounds good." : "No go."
}

// Switch statement
function switchOnCharmFromTip (tip) {
  switch (tip) {
    case (tip == "Tip is generous"):
  	return “Thank you so much.”
    case (tip == "Tip is not generous"):
  	return “Thank you.”
  	case (tip == )
  	return "bye"
  }
}

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

