import React, { useEffect } from "react";
import {
  Bold,
  Button,
  Card,
  Flex,
  Metric,
  Text,
  TextInput,
} from "@tremor/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/Auth";
import * as Yup from "yup";

const SignInPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passError, setPassError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const { user, loading, error, errorMessage } = useSelector(
    (state) => state.auth.value
  );

  useEffect(() => {
    if (user?.token) {
      navigate("/menu");
    }
  }, [navigate, user]);


  const passVal = Yup.string().required(t("errors.required"));
  const emailVal = Yup.string()
    .email(t("errors.invalidEmail"))
    .required(t("errors.required"));

  const onClick = async () => {
    let dataError = false;
    const options = {
      abortEarly: false,
      stripUnknown: true,
    };
    const params = { email: email, password: password };

    try {
      await emailVal.validate(params.email, options);
      setEmailError(null);
    } catch (error) {
      setEmailError(error.message);
      dataError = true;
    }

    try {
      await passVal.validate(params.password, options);
      setPassError(null);
    } catch (error) {
      setPassError(error.message);
      dataError = true;
    }

    if (!dataError) {
      dispatch(signIn(params));
    }
  };

  return (
    <div className="">
      <Card className="p-4 w-96">
        <div>
          <img
            className="mx-auto h-20 w-auto"
            src="/app-logo.png"
            alt="app-log"
          ></img>
          <Flex className="my-6" justifyContent="center">
            <Metric className="mt-6">{t("auth.title")}</Metric>
          </Flex>
        </div>

        <div className="h-24">
          <Bold className="mb-1">{t("label.email")}</Bold>
          <TextInput
            disabled={loading}
            placeholder={t("placeholder.email")}
            error={emailError ? true : false}
            errorMessage={emailError}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </div>
        <div className="h-24 ">
          <Bold className="mb-1">{t("label.password")}</Bold>
          <TextInput
            disabled={loading}
            type="password"
            placeholder={t("placeholder.password")}
            error={passError ? true : false}
            errorMessage={passError}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>

        <Flex className="" justifyContent="start">
          {error ? <Text color={"red"}>{errorMessage}</Text> : null}
        </Flex>

        <Flex alignItems={"center"} justifyContent={"end"} className="mt-6">
          <Button size="xs" onClick={onClick} loading={loading}>
            {t("button.signIn")}
          </Button>
        </Flex>
      </Card>
    </div>
  );
};

export default SignInPanel;
