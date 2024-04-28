const swappedObject = {
  retainer_and_whitening: "Retainer And Whitening",
  BURGLARY: "Burglary",
  ROBBERY: "Robbery",
  DRUG_ALCOHAL: "Drugs Alcohol",
  ASSAULT: "Assault",
  DISTRIBUTING_THE_PEACE: "Disturbing the Peace",
  VOILATIONS_THEFT: "Violations Theft",
  SEX_CRIME: "Sex Crime",
};

export function removeUnderscore(text) {
  if (!text || text === "") return "--";
  let objText;
  objText = swappedObject[text];
  if (objText) {
    // console.log("objText", objText)
    return objText;
  } else {
    const withoutUnderscore = text.replace(/_/g, " ");
    const capitalizedText = withoutUnderscore.replace(/\b\w/g, (match) =>
      match.toUpperCase()
    );
    return capitalizedText;
  }
}

export const getIconUrl = (crimeType) => {
    switch (crimeType) {
      case "ARSON":
        return "/arson.jpg";
      case "BURGLARY":
        return "/burglary.png";
      case "DRUG_ALCOHAL":
        return "/drugsalcohol.jpg";
      case "ROBBERY":
        return "/robbery.png";
      case "ASSAULT":
        return "/assaullt.png";
      case "DISTRIBUTING_THE_PEACE":
        return "/disturbingpeace.jpg";
      case "VOILATIONS_THEFT":
        return "/theft.png";
      case "SEX_CRIME":
        return "/sexcrime.png";
      default:
        return "/default.png";
    }
  };
  
