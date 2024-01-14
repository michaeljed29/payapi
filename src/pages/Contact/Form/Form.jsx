import React from "react";
import GhostButton from "../../../components/Buttons/GhostButton/GhostButton";
import checkIcon from "../../../assets/images/check.png";
import { Formik } from "formik";
import { toast } from "react-toastify";

const TextField = ({ textHelper, placeholder, isError = false, ...rest }) => {
  return (
    <div className="input-wrapper mb-[16px]">
      <input
        {...rest}
        type="text"
        className={`${isError ? "error" : ""}`}
        placeholder={placeholder}
      />
      {isError && (
        <span className="text-helper text-[11px] px-[20px] text-red/[.50]">
          {textHelper}
        </span>
      )}
    </div>
  );
};

const TextArea = ({ textHelper, placeholder, isError = false, ...rest }) => {
  return (
    <div className="input-wrapper mb-[16px]">
      <textarea
        {...rest}
        className={` h-[89px] resize-none ${isError ? "error" : ""}`}
        placeholder={placeholder}
      />
      {isError && (
        <span className="text-helper text-[11px] px-[20px] text-red/[.50]">
          {textHelper}
        </span>
      )}
    </div>
  );
};

const Form = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        company: "",
        title: "",
        message: "",
        subscribe: false,
      }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = "This field can’t be empty";
        }

        if (!values.email) {
          errors.email = "This field can’t be empty";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.company) {
          errors.company = "This field can’t be empty";
        }

        if (!values.title) {
          errors.title = "This field can’t be empty";
        }

        if (!values.message) {
          errors.message = "This field can’t be empty";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          toast.success("Thank you", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            draggable: false,
            theme: "light",
          });
        }, 1000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form>
          <TextField
            name="name"
            placeholder="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            textHelper={errors.name && touched.name && errors.name}
            isError={errors.name && touched.name}
          />
          <TextField
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email Address"
            textHelper={errors.email && touched.email && errors.email}
            isError={errors.email && touched.email}
          />
          <TextField
            name="company"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.company}
            placeholder="Company Name"
            textHelper={errors.company && touched.company && errors.company}
            isError={errors.company && touched.company}
          />
          <TextField
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            placeholder="Title"
            textHelper={errors.title && touched.title && errors.title}
            isError={errors.title && touched.title}
          />
          <TextArea
            className="mb-[25px] h-[89px] resize-none"
            placeholder="Message"
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            textHelper={errors.message && touched.message && errors.message}
            isError={errors.message && touched.message}
          />

          <div className="mb-[30px] flex items-center">
            <div className="mr-[26px]">
              <div className="custom-checkbox inline-block w-[24px] h-[24px] relative">
                <input
                  className="absolute opacity-0 "
                  id="subscribe"
                  type="checkbox"
                  name="subscribe"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.subscribe}
                />
                <label
                  className="cursor-pointer trigger w-full h-full bg-blue/[.25] relative flex items-center justify-center"
                  for="subscribe"
                >
                  <img className="opacity-0" src={checkIcon} />
                </label>
              </div>
            </div>

            <p className="text-blue">
              Stay up-to-date with company announcements and updates to our API
            </p>
          </div>
          <GhostButton
            isDisabled={isSubmitting}
            onClick={() => handleSubmit()}
            className="w-[142px]"
          >
            Submit
          </GhostButton>
        </form>
      )}
    </Formik>
  );
};

export default Form;
