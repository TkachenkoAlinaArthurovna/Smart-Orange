"use client";

import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import ButtonBlack from "@/app/Components/ButtonBlack/ButtonBlack";
import styles from "@/app/Components/FormaBlock/formaBlock.module.scss";
import Title from "@/app/Components/Title/Title";

export default function FormaBlock() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Обов'язкове поле"),
    email: Yup.string().email("Некоректний email").required("Обов'язкове поле"),
    phoneNumber: Yup.string().required("Обов'язкове поле"),
    productInterest: Yup.string(),
    message: Yup.string().required("Обов'язкове поле"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className={styles.forma}>
      <Title>Связаться с нами</Title>
      <div className={styles.forma__wrapper}>
        <div className={styles.forma__wrapper_forma}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phoneNumber: "",
              productInterest: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className={styles.forma__input_wrapper}>
                  <Field
                    className={styles.forma__input}
                    type="text"
                    name="name"
                    placeholder="Имя*"
                  />
                  {errors.name && touched.name ? (
                    <div className={styles.forma__error}>{errors.name}</div>
                  ) : null}
                </div>

                <div className={styles.forma__input_wrapper}>
                  <Field
                    className={styles.forma__input}
                    type="text"
                    name="phoneNumber"
                    placeholder="Номер телефона*"
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div className={styles.forma__error}>
                      {errors.phoneNumber}
                    </div>
                  ) : null}
                </div>

                <div className={styles.forma__input_wrapper}>
                  <Field
                    className={styles.forma__input}
                    type="email"
                    name="email"
                    placeholder="E-mail*"
                  />
                  {errors.email && touched.email ? (
                    <div className={styles.forma__error}>{errors.email}</div>
                  ) : null}
                </div>

                <div className={styles.forma__input_wrapper}>
                  <Field
                    className={styles.forma__input}
                    type="text"
                    name="productInterest"
                    placeholder="Интересующий товар/услуга"
                  />
                  {errors.productInterest && touched.productInterest ? (
                    <div className={styles.forma__error}>
                      {errors.productInterest}
                    </div>
                  ) : null}
                </div>

                <div className={styles.forma__input_wrapper}>
                  <Field
                    className={`${styles.forma__input} ${styles.forma__textarea}`}
                    as="textarea"
                    name="message"
                    placeholder="Сообщение*"
                  />
                  {errors.message && touched.message ? (
                    <div className={styles.forma__error}>{errors.message}</div>
                  ) : null}
                </div>
                <div className={styles.forma__info}>
                  Отправляя заявку Вы соглашаетесь с политикой
                  конфиденциальности
                </div>
                <div className={styles.forma__wrapper_button}>
                  <ButtonBlack type="submit" disabled={isSubmitting}>
                    ОТПРАВИТЬ
                  </ButtonBlack>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className={styles.forma__wrapper_img}>
          <img src="./image/image_10.png" alt="contact us"></img>
        </div>
      </div>
    </div>
  );
}
