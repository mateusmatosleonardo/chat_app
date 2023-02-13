import * as yup from "yup";

export const schema = yup.object({
  user: yup.string().required("Informe seu nome de usuário!"),
  password: yup
    .string()
    // .min(8, "Sua senha deve possui no mínimo 8 caracteres!")
    .required("Informe sua senha!"),
});
