import * as yup from "yup";

export const schema = yup.object({
  username: yup.string().required("Crie um nome de usuário!"),
  email: yup.string().email("E-mail inválido").required("Informe um e-mail!"),
  password: yup.string().required("Crie uma senha!"),
});
