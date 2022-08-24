import * as yup from "yup";

export const createProjectSchema = yup.object().shape({
  imageLink: yup.string().required("Image link: Required"),
  name: yup
    .string()
    .required("Name: Required")
    .max(30, "Name: Maximun 30 characters"),
  type: yup.string().required("Type: Required"),
  description: yup
    .array()
    .required("Description: Required")
    .min(10, "Description: Minimun 10 characters"),
  date: yup.string().required("Date: Required"),
  links: yup.array().notRequired(),
  engines: yup.array().notRequired(),
});
