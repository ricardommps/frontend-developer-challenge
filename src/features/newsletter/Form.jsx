import React from 'react';
import { PropTypes } from 'prop-types';
import { withI18n } from 'react-i18next';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const defaultFormShape = {
  name: '',
  email: '',
};

const FormRow = (errors, touched) => (
  <>
    <Grid item xs={6} className="newsletter__gird-form">
      <Typography htmlFor="name" className="newsletter__label">Name</Typography>
      <Field name="name" type="text" className={`form-control${errors.name && touched.name ? ' is-invalid' : ''}`} />
      <ErrorMessage name="name" component="div" className="newsletter__invalid-feedback" />
    </Grid>
    <Grid item xs={6}>
      <Typography htmlFor="email" className="newsletter__label">Email</Typography>
      <Field name="email" type="text" className={`form-control${errors.email && touched.email ? ' is-invalid' : ''}`} />
      <ErrorMessage name="email" component="div" className="newsletter__invalid-feedback" />
    </Grid>
  </>
);

// eslint-disable-next-line react/prop-types
const FormAction = ({ t }) => (
  <Grid item xs={12} className="newsletter__action">
    <Button variant="outlined" className="buy-more" type="submit">
      {t('SEND_EMAIL')}
    </Button>
  </Grid>
);

const FormComponent = ({ t }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('INVALID_EMAIL'))
      .required(t('REQUIRED_EMAIL')),

    name: Yup.string()
      .required(t('REQUIRED_NAME')),
  });
  return (
    <Formik
      initialValues={defaultFormShape}
      enableReinitialize
      validationSchema={validationSchema}

      onSubmit={(values, { resetForm }) => {
        resetForm();
      }}

      render={({ errors, touched }) => (

        <Form className="newsletter__form">
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <FormRow errors={errors} touched={touched} />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            justify="center"
            alignItems="center"
          >
            <FormAction t={t} />
          </Grid>
        </Form>
      )}
    />
  );
};
FormComponent.propTypes = { t: PropTypes.func.isRequired };
export default withI18n()(FormComponent);
