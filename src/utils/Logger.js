const Logger = {};

Logger.logMessage = function (message, type) {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
    return;
  }
  switch (type.toLowerCase()) {
    case 'error':
      throw new Error(message);
    default:
      console.log(message);

  }
};

export default Logger;
