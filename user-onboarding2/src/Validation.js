// 2a
import * as yup from 'yup'
// 2b
const formSchema = yup.object().shape({
    email:yup
    .string()
    .trim()
    .required('Email is required')
    .email('Not a valid Email address'),
    personName:yup
    .string()
    .required('Name is required'),
    password:yup
        .string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
    tos:yup
    .boolean()
    .oneOf([true],'Must accept Terms of Service')
})

export default formSchema