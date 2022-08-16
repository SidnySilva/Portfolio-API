import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  nickname: yup.string().required("Nickname: Required"),
  email: yup.string().email("Invalid E-mail").required("Email: Required"),
  password: yup
    .string()
    .required("Password: Required")
    .matches(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
      {
        message: {
          Minimun: "8 characters",
          necessaryNumber: "At least a number",
          necessaryUppercase: "At least a Uppercase letter",
          necessaryLowercase: "At least a Lowercase letter",
          necessarySpecial: "At least a special character",
        },
      },
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Different passwords")
    .required("Confirm password: Required"),
});
