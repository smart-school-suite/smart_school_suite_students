export const INPUT_TYPES = {
  text: {
    placeholder: "Enter text",
    keyboardType: "default",
    textContentType: "none",
    autoComplete: "off",
    autoCapitalize: "sentences",
    autoCorrect: true,
  },
  name: {
    placeholder: "John Doe",
    keyboardType: "default",
    textContentType: "name",
    autoComplete: "name",
    autoCapitalize: "words",
  },
  email: {
    placeholder: "example@gmail.com",
    keyboardType: "email-address",
    textContentType: "emailAddress",
    autoComplete: "email",
    autoCapitalize: "none",
    autoCorrect: false,
  },
  password: {
    placeholder: "Enter Password",
    keyboardType: "default",
    textContentType: "password",
    autoComplete: "password",
    secureTextEntry: true,
    autoCapitalize: "none",
    autoCorrect: false,
  },
  tel: {
    placeholder: "+237 6XX XXX XXX",
    keyboardType: "phone-pad",
    textContentType: "telephoneNumber",
    autoComplete: "tel",
  }
};