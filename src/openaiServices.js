const { GoogleGenerativeAI } = require("@google/generative-ai");

<<<<<<< HEAD
const genAI = new GoogleGenerativeAI("AIzaSyDfazWK5xqM82qJqxGTfqrWMac6PE8Cz6o");
=======
const configuration = new Configuration({
	apiKey: 'YOUR_API_KEY',
});
>>>>>>> 083469f (Update openaiServices.js)

export const generateEmbeddingsGemini = async (text) => {
	const model = genAI.getGenerativeModel({ model: "embedding-001" });
	const result = await model.embedContent(text);
	const embedding = result.embedding;
	return embedding.values;
}

export const genearteAnswerGemini = async (prompt) => {
	try{
		const model = genAI.getGenerativeModel({ model: "gemini-pro" });
		const result = await model.generateContent(prompt);
		return result.response.text();
	}catch(e){
		console.log("Error while completion : " + e);
	}
<<<<<<< HEAD
}
=======
	

}
>>>>>>> 083469f (Update openaiServices.js)
