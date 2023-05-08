const axios = require('axios');

const chatFunction = async (message)=>{
    try {
        const messageUser = {
            Device: "iphone & hp laptop",
            Common_online_activity: "Work, shopping, tv shows",
            User_base_knowledge: "Low",
            Risk_tolerance: "Low",
            Convenience_vs_risk_ratio: "70 - 30"
        };

        const userMessage = `Please give some customized online security advice based on the following information of the individual in 300 token or less: ${JSON.stringify(messageUser)}`;
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {

            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: userMessage}
            ],
            max_tokens: 300,
        }, {
            headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json'
            }
        });

        // Extract the assistant's reply from the API response
        const reply = response.data.choices[0].message.content;
        console.log(reply);
        return reply;
    } catch (error) {
        console.error('Error:', error.response.data);
        throw error;
    }
}

module.exports = {
    chatFunction
}