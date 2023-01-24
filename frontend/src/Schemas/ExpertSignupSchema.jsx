import * as Yup from 'yup'

export const expertSignupSchema = Yup.object({
    name: Yup.string().min(2).max(30).required('Please enter your name !'),

    email: Yup.string().email().required('Please enter your email !'),

    password: Yup.string()
        .required('Please enter your password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),

    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null], "passwords must match")

})