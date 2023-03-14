function scuberGreetingForFeet(feetParameter){
  if (feetParameter < 0){
    throw new Error("Feet must be a positive number");
  }

  if (feetParameter <= 400){
    return "This one is on me!";

  } else if (feetParameter > 2000 && feetParameter <= 2500){
    return "I will gladly take your thirty bucks.";

  } else {
    return "No can do."

  }

}


function ternaryCheckCity(cityParameter){
  return (cityParameter === "NYC") ? "Ok, sounds good." : "No go.";
}


function switchOnCharmFromTip(tipParameter){
  switch (tipParameter){
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}