// util for generating a template message object
export const generateMessage = (user: string, text: string) => {
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes()
    // const seconds = new Date().getSeconds()

    return {
        text,
        user,
        createdAt: `${hour}:${minutes}`
    };
};