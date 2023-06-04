/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { FormDefaultObjecType, HandleFieldChangeProps, useFormValidator } from '@/utils/hooks/FormValidationHook';
import { validationCases } from '@/utils/constants/regrexCases.constant';
import { changePasswordRequest } from '@/store/auth/AuthActions';
import { ChangePasswordPageEnum } from '@/store/auth/authType';
import { selectAuthState, setChangePasswordPage } from '@/store/auth/authSlice';
import ForgetPassword from '@/components/Auth/ForgetPassword';
import VerifyCode from '@/components/Auth/VerifyCode';
import ResetPassword from '@/components/Auth/ResetPassword';
import { PageEndpoints } from '@/utils/constants/endpoints.constant';
import { pushNotification } from '@/utils/helpers/pushNotification';

export interface AuthComponentProps {
  formData: any;
  formErrors: any;
  onChange: (e: HandleFieldChangeProps | HandleFieldChangeProps[]) => void;
  handleSubmit: () => void;
}

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const { changePasswordPage, user } = useAppSelector(selectAuthState);
  const { validEmail, numbersOnly, minLength } = validationCases;
  const defaultFormObject: FormDefaultObjecType = {
    id: { value: '' },
    email: { value: '', required: true, patterns: [validEmail] },
    code1: { value: '', required: true, patterns: [numbersOnly] },
    code2: { value: '', required: true, patterns: [numbersOnly] },
    code3: { value: '', required: true, patterns: [numbersOnly] },
    code4: { value: '', required: true, patterns: [numbersOnly] },
    password: { value: '', required: true, patterns: [minLength(8)] },
    confirm_password: { value: '', required: true, patterns: [minLength(8)] }
  };
  const { formData, formErrors, handleFieldChange, validateForm } = useFormValidator(defaultFormObject);

  const forgetPassowordHandler = () => {
    if (!validateForm(['email'])) return;
    const { email } = formData;
    dispatch(changePasswordRequest({ type: ChangePasswordPageEnum.verify, payload: { email } }));
  };

  const verfiyCodeHandler = () => {
    if (!validateForm(['code1', 'code2', 'code3', 'code4'])) return;
    const { id, code1, code2, code3, code4 } = formData;
    const password_reset_token = `${code1}${code2}${code3}${code4}`;
    if (!id) return pushNotification({ type: 'error', message: 'An Error Occured. Try Again!' });
    dispatch(changePasswordRequest({ type: ChangePasswordPageEnum.reset, payload: { password_reset_token, id } }));
  };

  const resetPasswordHandler = () => {
    // if (!validateForm(['password', 'confirm_password'])) return;
    const { password, confirm_password, id, code1, code2, code3, code4 } = formData;
    const password_reset_token = `${code1}${code2}${code3}${code4}`;
    dispatch(changePasswordRequest({ type: ChangePasswordPageEnum.login, payload: { confirm_password, password, id, password_reset_token } }));
  };

  useEffect(() => {
    handleFieldChange({ field: 'id', value: user?.id });
  }, [user]);

  return (
    <div className='md:w-fit w-full p-4'>
      {changePasswordPage === ChangePasswordPageEnum.forget && <ForgetPassword formData={formData} formErrors={formErrors} handleSubmit={forgetPassowordHandler} onChange={handleFieldChange} key='forget_passsword_screen' />}
      {changePasswordPage === ChangePasswordPageEnum.verify && <VerifyCode formData={formData} formErrors={formErrors} handleSubmit={verfiyCodeHandler} onChange={handleFieldChange} key='verfiy_code_screen' />}
      {changePasswordPage === ChangePasswordPageEnum.reset && <ResetPassword formData={formData} formErrors={formErrors} handleSubmit={resetPasswordHandler} onChange={handleFieldChange} key='reset_passsword_screen' />}

      <p className='text-center mt-6'>
        <Link href={PageEndpoints.login} onClick={() => dispatch(setChangePasswordPage(ChangePasswordPageEnum.forget))} className='text-[#989797] flex items-center justify-center hover:text-tfn-green font-normal'>
          <FontAwesomeIcon icon={faArrowLeft} className='mr-6 font-thin' />
          <b>Back to sign in</b>
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
