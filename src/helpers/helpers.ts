export const validateUrl = (url: string): boolean => {
  let isValidUrl = false;

  const urlRegEx =
    /[(https):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
  if (url.match(urlRegEx)) isValidUrl = true;

  return isValidUrl;
};
