export const apiErrorHandler = (error: any) => {
  let errMsg = 'An Error Occured';
  if (error?.response?.status === 500) return (errMsg = 'Server Error! Try again later!');
  return error?.response?.data?.message || error.message || errMsg;
};
