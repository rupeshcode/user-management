import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import scss from "./login.module.scss";
import Link from "next/link";
// import fetcher from "@/utils/fetcher";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
// import { useUserStore } from "@/stores/user-store";
import { Button, Card, PasswordInput, TextInput } from "@mantine/core";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
// import { getFingerprint } from "@/utils/fingerprint";

// import { toast } from "react-toastify";

type Logindata = {
  mobile: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  mobile: Yup.string().required("Mobile is Required"),
  password: Yup.string().required("Password is Required"),
});

const Login = () => {
  const router = useRouter();
  // const setUser = useUserStore.use.setUser();
  // const setToken = useUserStore.use.setToken();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Logindata>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Logindata> = async (data) => {
    // if (loading) return;
    // try {
    //   const response = await fetcher("/auth/sign-in", "POST", {
    //     ...data,
    //     fp: getFingerprint(),
    //   });
    //   // console.log("response", response);
    //   if (response.token) {
    //     setUser(response.user);
    //     setToken(response.token);
    //     setLoading(true);
    //     toast.success("Login successful");
    //     router.push("/dashboard");
    //   } else {
    //     toast.error("Something went wrong");
    //   }
    // } catch (error: any) {
    //   console.log("error", error);
    //   toast.error(error?.message);
    // }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <img
              className={scss.imageee}
              src="/assets/images/login.jpg"
              alt="login"
            />
          </div>
          <div className="col-6 pt-2 mb-5">
            <Card shadow="lg" className={scss.card_content}>
              <div>
                <div className={scss.card_heading}>
                  <h3 className={scss.signinheading}>Sign In</h3>
                </div>
                <div className={scss.form}>
                  <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                      <TextInput
                        label="Mobile No."
                        leftSection={<FaPhoneAlt />}
                        {...register("mobile")}
                        error={errors.mobile?.message}
                      />
                    </div>
                    <div className="mt-4">
                      <PasswordInput
                        label="Password"
                        leftSection={<RiLockPasswordLine />}
                        {...register("password")}
                        error={errors.password?.message}
                      />
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <p className="my-4">
                        Don't have an account?{" "}
                        <Link className="text-primary" href="/register">
                          Sign up
                        </Link>
                      </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <Button
                        className={scss.submitbtn}
                        disabled={loading}
                        type="submit"
                      >
                        {" "}
                        {loading ? "Signin..." : " Sign in"}
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

export default Login;
