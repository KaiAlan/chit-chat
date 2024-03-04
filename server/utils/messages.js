// util for generating a template message object
const generateMessage = (user, text) => {
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes()
  // const seconds = new Date().getSeconds()

    return {
      text,
      user,
      createdAt: `${hour}:${minutes}`
    };
  };
  
  module.exports = {
    generateMessage,
  };