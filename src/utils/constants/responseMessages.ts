const errDefualtMsg = 'Server Error: Something went wrong!';

export const errorResponses = {
  error404Url: 'This link is either invalid or the resource may have been removed.',
  error404: 'No Resource found!',
  error500: errDefualtMsg,
  noChangesInForm: (title = 'form') => {
    return `Please make changes to update the ${title}.`;
  },
  getServerErrorMsg: (error: any) => {
    const msg = error?.response?.data?.message;
    return msg ? (msg ? error?.message : error?.message) : errDefualtMsg;
  }
};
