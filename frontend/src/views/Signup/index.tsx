import * as Yup from "yup";
import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./register.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
// import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import {
  Button,
  Card,
  Group,
  NumberInput,
  PasswordInput,
  Radio,
  Select,
  TextInput,
} from "@mantine/core";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbFingerprint } from "react-icons/tb";

// import { toast } from "react-toastify";

type RegisterData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;

  mobile: string;
};

const validationSchema = Yup.object({
  username: Yup.string()
    .test({
      name: "no-uppercase",
      test: (value: any) => !/[A-Z]/.test(value),
      message: "Uppercase letters are not allowed",
    })
    .test({
      name: "no-spaces",
      test: (value: any) => !/\s/.test(value),
      message: "Spaces are not allowed",
    })

    .required("Username is required")
    .matches(/^[a-z0-9_]+$/, {
      message:
        "Username can only contain lowercase letters, numbers, and underscores",
    }),
  email: Yup.string().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .test(
      "uppercase",
      "Password must contain at least one uppercase letter",
      (value) => /[A-Z]/.test(value)
    )
    .test(
      "lowercase",
      "Password must contain at least one lowercase letter",
      (value) => /[a-z]/.test(value)
    )
    .test("number", "Password must contain at least one number", (value) =>
      /\d/.test(value)
    )
    .test(
      "special",
      "Password must contain at least one special character",
      (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value)
    ),
  confirmPassword: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
  gender: Yup.string().required("Gender is required"),
  mobile: Yup.string().required("Mobile is required"),
});

const Register = () => {
  const router = useRouter();

  const {
    register,
    setValue,
    handleSubmit,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    // try {
    //   const response = await fetcher("/auth/register", "POST", data);
    //   if (response == "Registered") {
    //     toast.success("User Registered successfully");
    //     router.push("/login");
    //   }
    // } catch (error: any) {
    //   toast.error(error.message);
    // }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              className={scss.imageee}
              src="/assets/images/login.jpg"
              alt="signup"
            />
          </div>
          <div className="col-6 pt-2 mb-5 ">
            <Card shadow="lg" className={scss.card_content}>
              <div>
                <div className={scss.card_heading}>
                  <h3 className={scss.signupheading}>Sign Up</h3>
                </div>
                <div className={scss.form}>
                  <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className=" col-md-6 mt-2">
                        <TextInput
                          leftSection={<FaRegUser />}
                          label="Username"
                          autoComplete="new"
                          // type="input"
                          error={errors.username?.message}
                          {...register("username")}
                        />
                      </div>
                      <div className="col-md-6 mt-2">
                        <TextInput
                          label="Email"
                          error={errors.email?.message}
                          leftSection={<MdOutlineMailOutline />}
                          {...register("email")}
                          type="email"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className=" col-md-6 mt-2">
                        <PasswordInput
                          label="Password"
                          leftSection={<RiLockPasswordLine />}
                          autoComplete="new-password"
                          error={errors.password?.message}
                          {...register("password")}
                        />
                      </div>
                      <div className="col-md-6 mt-2">
                        <PasswordInput
                          leftSection={<RiLockPasswordLine />}
                          label="Confirm Password"
                          error={errors.confirmPassword?.message}
                          {...register("confirmPassword")}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mt-2">
                        <Radio.Group
                          onChange={(value: any) => {
                            setValue("gender", value);
                            clearErrors("gender");
                          }}
                          label="Gender"
                          error={errors.gender?.message}
                        >
                          <Group mt="xs">
                            <Radio value="male" label="Male" />
                            <Radio value="female" label="Female" />
                            <Radio value="other" label="Other" />
                          </Group>
                        </Radio.Group>
                      </div>
                      <div className="col-md-6 mt-2">
                        <PasswordInput
                          leftSection={<FaPhoneAlt />}
                          label="Mobile"
                          error={errors.mobile?.message}
                          {...register("mobile")}
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                      <p className="my-2">
                        Already have an account?{" "}
                        <Link className="text-primary" href="/login">
                          Sign in
                        </Link>
                      </p>
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                      <Button className={scss.submitbtn} type="submit">
                        Sign up
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
