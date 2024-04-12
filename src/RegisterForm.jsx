import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import {
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  Button,
} from "@mui/material";

const RegisterForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={yup.object({
          name: yup
            .string()
            .required("name is required.")
            .trim()
            .max(50, "Name must be at max 50 characters.")
            .min(5, "Name must be at least 5 characters."),

          email: yup
            .string()
            .email("Enter a valid email.")
            .required("Email is required.")
            .trim()
            .lowercase(),
          password: yup
            .string()
            .required("Password is required.")
            .max(50, "Password must be at max 50 characters."),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <Form
              onSubmit={formik.handleSubmit}
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                width: "400px",
                gap: "1rem",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Typography variant="h3"> Register</Typography>
              <FormControl>
                <TextField label="Name" {...formik.getFieldProps("name")} />
                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <Button type="submit" color="secondary" variant="contained">
                Register
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
