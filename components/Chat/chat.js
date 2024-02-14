import { useState } from 'react';
import axios from 'axios';

export default function ChatComponent() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/api/chat', { input });
      setResponse(res.data.response.join('\n'));
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Ask</button>
      {response && <div>{response}</div>}
    </div>
  );
}