// util for generating a template message object
const generateMessage = (user, text) => {
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes()

    return {
      text,
      user,
      createdAt: `${hour}:${minutes}`
    };
  };
  
  module.exports = {
    generateMessage,
  };