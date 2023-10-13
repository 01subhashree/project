import * as Yup from "yup";

export const formSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.number().min(10).required("Please enter valid phonenumber"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Input field required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
