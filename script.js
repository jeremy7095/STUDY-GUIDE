asynch function getStudyGuide() {
  const topic = document.getElementById("topicInput").value.trim();
  const output = document.getElementById("output");
    
    
if (!topic) {
  output.innerText = "Please enter a topic.";
  return;
}


output.innerText = "Generating study guide...";
    
    
try {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_OPENAI_API_KEY"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
          { role: "system", content: "You are a helpful study guide generator." },
          { role: "user", content: `Explain this topic '${topic}' in a concise and educational way for students.`}
          ],
          max_tokens: 300,
    })
  });
    
    
  const data = await response.json();
  const result = data.choicse[0].message.content;
  output.innerText = result;
}catch (error) {
 output.innerText = "An error occured. Please try again.";
 console.error(error);
 }
}   
