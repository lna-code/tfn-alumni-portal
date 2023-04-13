export const validationCases = {
  maxLength: (maxLength = 50) => {
    return {
      pattern: new RegExp(`^.{0,${maxLength}}$`),
      errorMessage: `Text can not be longer than ${maxLength} characters.`
    };
  },
  minLength: (minLength = 0) => {
    return {
      pattern: new RegExp(`^.{${minLength},}$`),
      errorMessage: `Please enter at least ${minLength} characters.`
    };
  },
  noSpecialCharacters: {
    pattern: /^[^<>%$=_£~|`¬*\\]*$/,
    errorMessage: 'Please do not use special characters: ^<>%$=_£~|`¬ *\\.'
  },
  alphaNumeric: {
    pattern: /^([a-zA-Z0-9 }])+$/,
    errorMessage: 'Please enter Alphanumerics Only.'
  },
  lettersOnly: {
    pattern: /^([A-Za-z ])+$/,
    errorMessage: 'Please enter Letters Only.'
  },
  noSpaces: {
    pattern: /^[\S]+$/,
    errorMessage: 'Please do not use whitespaces.'
  },
  numbersOnly: {
    pattern: /^\d+$/,
    errorMessage: 'Please use Numbers Only.'
  },
  validEmail: {
    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    errorMessage: 'Please enter a Valid Email.'
  },
  validUrl: {
    pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
    errorMessage: 'Please enter a valid url.'
  }
};
