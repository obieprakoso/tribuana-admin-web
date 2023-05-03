const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexNumber = /^[0-9]+$/;

const BooleanValidation = (
  text: boolean = true,
  fieldName: string = "Field Name",
  required: boolean = true
) => {
  if (text === null && required) {
    return `${fieldName} is required`;
  }

  return "";
};

const TextValidation = (
  text: string | null = "",
  maxLength: number = 255,
  fieldName: string = "Field Name",
  required: boolean = true
) => {
  if (text === null && required) {
    return `${fieldName} is required`;
  }
  if (text === "" && required) {
    return `${fieldName} is required`;
  }
  if (text && text?.length > maxLength) {
    return `${fieldName} max ${maxLength} charaters`;
  }
  if (/[^A-Z]/gi.test(text!)) {
    return `${fieldName} invalid`;
  }
  if (regexNumber.test(text!)) {
    return `${fieldName} invalid`;
  }

  return "";
};

const TextNumberValidation = (
  text: string | null = "",
  maxLength: number = 255,
  fieldName: string = "Field Name",
  required: boolean = true
) => {
  if (text === null && required) {
    return `${fieldName} is required`;
  }
  if (text === "" && required) {
    return `${fieldName} is required`;
  }
  if (!regexNumber.test(text!)) {
    return `${fieldName} not number`;
  }
  if (text && text?.toString().length > maxLength) {
    return `${fieldName} max ${maxLength} charaters`;
  }

  return "";
};

const EmailValidation = (
  text: string | null = "",
  maxLength: number = 255,
  fieldName: string = "Field Name",
  required: boolean = true
) => {
  if (text === null && required) {
    return `${fieldName} is required`;
  }
  if (text === "" && required) {
    return `${fieldName} is required`;
  }
  if (text && text?.length > maxLength) {
    return `${fieldName} max ${maxLength} charaters`;
  }
  if (text && !regexEmail.test(text)) {
    return `${fieldName} invalid`;
  }

  return "";
};

const PasswordValidation = (
  text: string | null = "",
  minLength: number = 8,
  maxLength: number = 12,
  fieldName: string = "Field Name",
  required: boolean = true
) => {
  if (text === null && required) {
    return `${fieldName} is required`;
  }
  if (text === "" && required) {
    return `${fieldName} is required`;
  }
  if (text && text?.length < minLength) {
    return `${fieldName} min ${minLength} charaters`;
  }
  if (text && text?.length > maxLength) {
    return `${fieldName} max ${maxLength} charaters`;
  }

  return "";
};

export default {
  TextValidation,
  EmailValidation,
  PasswordValidation,
  TextNumberValidation,
  BooleanValidation,
};
