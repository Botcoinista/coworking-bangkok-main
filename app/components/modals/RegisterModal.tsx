"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Strong password validation regex
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&_]{8,}$/;

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    // Validate email
    if (!emailRegex.test(data.email)) {
      toast.error("Not a valid email.");
      setIsLoading(false);
      return;
    }

    // Validate strong password
    if (!strongPasswordRegex.test(data.password)) {
      const errorMsg =
        "Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters (@$!%*?&).";
      setPasswordError(errorMsg); // Update the passwordError state
      toast.error("Password is not strong enough.");
      setIsLoading(false);
      return;
    } else {
      setPasswordError(""); // Reset password error if validation passes
    }

    // Check if any of the password fields are empty
    if (data.password === "" || data.repeatPassword === "") {
      toast.error("Password fields cannot be empty.");
      setIsLoading(false);
      return;
    }

    // Check if passwords match
    if (data.password !== data.repeatPassword) {
      toast.error("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Success");
        registerModal.onClose();
        loginModal.onOpen();
      })
      .catch((error) => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Register" subtitle="Create an account" center />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {passwordError && <div className="text-red">{passwordError}</div>}
      <Input
        id="repeatPassword"
        type={showPassword ? "text" : "password"}
        label="Repeat Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          id="showPassword"
          onChange={togglePasswordVisibility}
          checked={showPassword}
          className="mr-2 cursor-pointer"
        />
        <label htmlFor="showPassword">Show Password</label>
      </div>
        <div
          className="
          justify-center 
          flex 
          flex-col
          sm:flex-row 
          items-center 
          gap-2
          text-twentyfour
          font-poppins
          "
        >
          <div>Already have an account?</div>
          <div
            onClick={toggle}
            className="
            text-neutral-800 
            cursor-pointer 
            hover:underline
            "
          >
            Log in
          </div>
        </div>
      </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div
        className="
        text-neutral-500
        text-center
        mt-4
        font-light
        "
      ></div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
