import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters long')
      .max(50, 'Name must be less than 50 characters long'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    projectDetails: Yup.string()
      .required('Project details are required')
      .min(5, 'Please provide more details about your project')
      .max(500, 'Project details must be less than 500 characters')
  });