export const validationData = {
  name: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Jméno a Příjmení",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  street: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Ulice, č.p.",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  zipCode: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "PSČ",
    },
    value: "",
    validation: {
      required: true,
      minLength: 5,
      maxLength: 5,
      isNumeric: true,
    },
    valid: false,
    touched: false,
  },
  country: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Město",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  email: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "E-Mail",
    },
    value: "",
    validation: {
      required: true,
      isEmail: true,
    },
    valid: false,
    touched: false,
  },
  deliveryMethod: {
    elementType: "select",
    elementConfig: {
      options: [
        { value: "cash", displayValue: "Platba  Dobírkou" },
        { value: "card", displayValue: "Platba Hotově/kartou" },
        { value: "online", displayValue: "Online platba kartou" },
      ],
    },
    value: "online",
    validation: {},
    valid: true,
  },
};
