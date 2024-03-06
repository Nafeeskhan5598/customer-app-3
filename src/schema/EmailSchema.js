import * as Yup from 'yup';

export const EmailSchema = Yup.object({
    first_name:Yup.string().min(2, 'first name min 2 charecter').max(20, 'first name max 20 charecter' ).required('text is must must'),
    name:Yup.string().min(3, 'text must be at least 3 characters').max(20, 'text must be at least 20 characters').required('text is must'),
    email:Yup.string().email('Invalid Email').required('email is must'),
    dropdownValue: Yup.string().required('Dropdown selection is required'),

})  