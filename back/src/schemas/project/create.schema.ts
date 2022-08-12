import * as yup from "yup";

export const createProjectSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name: Required")
    .max(20, "Name: Maximun 20 characters"),
  description: yup
    .string()
    .required("Description: Required")
    .min(10, "Description: Minimun 10 characters"),
  date: yup.string().required("Date: Required"),
  linkFront: yup.string().notRequired(),

  linkBack: yup.string().notRequired(),
});
