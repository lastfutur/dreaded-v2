//credits.js

/* Why do you want to edit the credits ?, You may add yourself but do not OMIT any part */




module.exports = async (context) => {
    const { client, m, prefix } = context;


           await client.sendMessage(m.chat, { image: { url: 'https://ibb.co/Xk7HmDWW' }, caption: `We express sincere gratitude and acknowledgement to the following:\n\n -Dika Ardnt ➪ Indonesia\n - Writing the base code using case method\nhttps://github.com/DikaArdnt\n\n -Adiwajshing ➪ India\n - Writing and Coding the bot's library (baileys)\nhttps://github.com/WhiskeySockets/Baileys\n\n -WAWebSockets Discord Server community\n-Maintaining and reverse engineering the Web Sockets\nhttps://discord.gg/WeJM5FP9GG\n\n - Great Pantane ➪ Kenya\n - Actively compiling and debugging parts of this bot script\nhttps://github.com/Pantane1/dreaded-md\n - Malik ➪ Kenya\n - Actively de-compiling, debugging and fixing parts of this bot script\nhttps://github.com/darkLo1rd\n\n - ChatGPT ➪ USA\n - Formulating ideas and assisting in debugging.\nhttps://chat.openai.com\n\npantane-bot シ︎`}); 


}

/* Do not edit this credits, Do not delete */
