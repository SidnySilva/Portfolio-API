import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  nickname: yup.string().required("Nickname: Required"),
  email: yup.string().email("Invalid E-mail").required("Email: Required"),
  password: yup
    .string()
    .required("Password: Required")
    .matches(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
      "Mínimo 8 dígitos;Pelo menos um número;Pelo menos uma letra maiúscula;Pelo menos uma letra minúscula;Um caractere especial",
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Different passwords")
    .required("Confirm password: Required"),
});
