import InteligentImg from "@assets/brandAssets/daily-tasks.png";
import EnhanceImg from "@assets/brandAssets/enhance-frame.png";
import TailorImg from "@assets/brandAssets/tailor-frame.png";

export const CarosalData = [
  {
    imgIcon: TailorImg,
    carosalTitle: "Tailored customer centric digital stack",
    carosalSubTitle:
      "Product catalog, Customer management, Campaigning, Customer support, Warranty management",
  },
  {
    imgIcon: InteligentImg,
    carosalTitle: "Intelligent WhatsApp business solutions",
    carosalSubTitle:
      " Smart automation and target marketing for robust pipelines",
  },
  {
    imgIcon: EnhanceImg,
    carosalTitle: "Enhance sales, endure relationships & accelerate growth",
    carosalSubTitle:
      "Target campaigning in 3 steps, Quick customer support solution",
  },
];

interface LoginProp {
  email: string;
  password: string;
  error: {
    email: string;
    password: string;
  };
}
interface ForgotPassword {
  email: string;
  error: {
    email: string;
  };
}

interface ResetPassword {
  newPassword: string;
  confirmPassword: string;
  error: {
    newPassword: string;
    confirmPassword: string;
  };
}

export const ValidateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return Boolean(re.test(email));
};

export const validateLoginData = (values: LoginProp) => {
  let isValid = true;
  const error = values.error;

  // Checking email
  if (values.email.length === 0) {
    isValid = false;
    values.error.email = "Email is Required";
  } else if (values.email.length > 0 && !ValidateEmail(values.email)) {
    isValid = false;
    values.error.email = "Invalid email";
  } else {
    values.error.email = "";
  }
  // Checking password
  if (values.password.length === 0) {
    isValid = false;
    values.error.password = "Password is required";
  } else {
    values.error.password = "";
  }

  return { isValid, error };
};

export const validateForgotPassword = (values: ForgotPassword) => {
  let isValid = true;
  const error = values.error;
  // Checking email
  if (values.email.length === 0) {
    isValid = false;
    values.error.email = "Email is Required";
  } else if (values.email.length > 0 && !ValidateEmail(values.email)) {
    isValid = false;
    values.error.email = "Invalid email";
  } else {
    values.error.email = "";
  }
  return { isValid, error };
};

export const validateResetPassword = (values: ResetPassword) => {
  console.log(values);

  let isValid = true;
  const error = values.error;
  // Checking password
  if (values.newPassword.length === 0 && values.confirmPassword.length === 0) {
    isValid = false;
    values.error.newPassword = "New Password is Required";
    values.error.confirmPassword = "Confirm Password is Required";
  }

  if (values.newPassword && values.confirmPassword.length === 0) {
    isValid = false;
    values.error.newPassword = "";
    values.error.confirmPassword = "Confirm Password is Required";
  }

  if (values.confirmPassword && values.newPassword.length === 0) {
    isValid = false;
    values.error.newPassword = "New Password is Required";
    values.error.confirmPassword = "";
  }

  if (
    values.newPassword &&
    values.confirmPassword &&
    values.newPassword !== values.confirmPassword
  ) {
    isValid = false;
    values.error.newPassword = "";
    values.error.confirmPassword = "Password miss match";
  }

  if (
    values.newPassword &&
    values.confirmPassword &&
    values.newPassword === values.confirmPassword
  ) {
    isValid = true;
  }
  return { isValid, error };
};
