// @flow

import React, { Component, Fragment } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withStyles } from '@material-ui/core/styles';

import {styles} from './styles'

const defaultFormShape = {
  name: '',
  email: ''
};

const initialState = {
    open: false,
    vertical: 'top',
    horizontal: 'right',
}

class NewsletterForm extends Component {

    constructor(props: Props) {
        super(props)
        this.state = initialState;
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        const validationSchema = Yup.object().shape({
            email: Yup.string()
                .email('Insira um endereço de email válido.')
                .required('E-mail obrigatório!'),

            name: Yup.string()
                .required('Nome obrigatório!')
        })

        const { vertical, horizontal, open } = this.state;
        const { classes } = this.props
        return (
        <Fragment>
            <Formik
                initialValues={defaultFormShape}
                enableReinitialize
                validationSchema={validationSchema}

                onSubmit={(values, { resetForm }) => {
                    this.setState({
                        open: true
                    })
                    resetForm();
                }}
                
                render={({ errors, status, touched }) => (
                
                <Form>
                    <div className="row justify-content-center">
                        <div className="form-group col-md-6 col-12 col-sm-12">
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-md-6 col-12 col-sm-12">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="form-group  col-md-12 text-md-center">
                            <button type="submit" className="btn btn-light">
                                        Enviar agora
                            </button>      
                        </div>
                    </div>
                </Form>   
            )}
            />
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={6000}
                onClose={this.handleClose}
            >
                <SnackbarContent
                    className={classes.success}
                    aria-describedby="form-snackbar"
                    message={
                        <span id="form-snackbar" className={classes.message}>
                            <CheckCircleIcon className={classes.iconVariant}/>
                            Email enviado com sucesso
                        </span>
                    }
                    action={[
                        <IconButton key="close" aria-label="close" color="inherit" onClick={this.handleClose}>
                          <CloseIcon className={classes.icon} />
                        </IconButton>,
                      ]}
                />
            </Snackbar>
        </Fragment>
        );
    };
};

export default withStyles(styles)(NewsletterForm);
