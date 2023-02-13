import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().required("Informe seu email!"),
  password: yup.string().required("Informe sua senha!"),
});
