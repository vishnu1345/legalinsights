from flask import Flask, request, jsonify
from google.generativeai import GenerativeModel
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Configure generative AI model
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = GenerativeModel("gemini-pro")
chat = model.start_chat(history=[])

# Initialize session state for chat history
chat_history = []

# Route for chatbot endpoint
@app.route('/chatbot', methods=['POST'])
def chatbot():
    input_text = request.json.get('input')

    # Get response from generative AI model
    response = chat.continue_chat(input_text)

    # Add user query and response to chat history
    chat_history.append(("You", input_text))
    chat_history.append(("Bot", response.text))

    return jsonify({'response': response.text, 'chat_history': chat_history})

if __name__ == '__main__':
    app.run(debug=True)
