import * as yup from "yup";

export const schema = yup.object({
  username: yup.string().required("Informe seu nome de usuário!"),
  password: yup
    .string()
    // .min(8, "A senha deve possui no mínimo 8 caracteres!")
    .required("Informe sua senha!"),
});
