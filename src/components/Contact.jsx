import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import useTheme from './useTheme';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  program: Yup.string().notOneOf(['0', ''], 'Please select a program').required('Program is required'),
  message: Yup.string(),
  agree: Yup.boolean().oneOf([true], 'You must agree to continue'),
});

const programOptions = [
  { value: '0', label: 'Select program' },
  { value: 'orchid', label: 'Orchid Care' },
  { value: 'botany', label: 'Botany' },
  { value: 'gardening', label: 'Gardening' },
];

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [theme] = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="container my-5">
      <div className={`card shadow-sm p-4 mx-auto ${isDark ? 'bg-dark text-light' : ''}`} style={{maxWidth: 500}}>
        <h3 className="text-center mb-3">Contact Us</h3>
        <Formik
          initialValues={{ name: '', email: '', phone: '', program: '0', message: '', agree: false }}
          validationSchema={ContactSchema}
          onSubmit={(values, { resetForm }) => {
            setSubmitted(true);
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setTimeout(() => setSubmitted(false), 3000);
          }}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form>
              <div className="mb-3">
                <label className="form-label"><i className="bi bi-person-fill me-2"></i>Name</label>
                <Field name="name" className={`form-control${touched.name && errors.name ? ' is-invalid' : ''}`} />
                {touched.name && errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label"><i className="bi bi-envelope-fill me-2"></i>Email</label>
                <Field name="email" className={`form-control${touched.email && errors.email ? ' is-invalid' : ''}`} />
                {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label"><i className="bi bi-telephone-fill me-2"></i>Phone</label>
                <Field name="phone" className={`form-control${touched.phone && errors.phone ? ' is-invalid' : ''}`} />
                {touched.phone && errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label"><i className="bi bi-list-task me-2"></i>Program</label>
                <Field as="select" name="program" className={`form-select${touched.program && errors.program ? ' is-invalid' : ''}`}>
                  {programOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </Field>
                {touched.program && errors.program && <div className="invalid-feedback">{errors.program}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label"><i className="bi bi-chat-dots-fill me-2"></i>Message</label>
                <Field as="textarea" name="message" className="form-control" rows={3} placeholder="Type your message here..." />
              </div>
              <div className="form-check mb-3">
                <Field type="checkbox" name="agree" className="form-check-input" id="agreeCheck" checked={values.agree} />
                <label className="form-check-label" htmlFor="agreeCheck">
                  I agree to the <a href="#" className="text-primary">terms and conditions</a>
                </label>
                {touched.agree && errors.agree && <div className="text-danger small">{errors.agree}</div>}
              </div>
              <button type="submit" className="btn btn-primary w-100 fw-bold">Submit</button>
              {submitted && <div className="alert alert-success mt-3">Form submitted successfully!</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
