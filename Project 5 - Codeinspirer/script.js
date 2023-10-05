const btnElement = document.getElementById("btn");
const quotes = ["Break down complex problems into smaller, manageable tasks. Focus on solving one problem at a time.",
"Acknowledge and celebrate every achievement, no matter how small. Each success builds confidence.",
"Understand that programming has a learning curve. Embrace challenges as opportunities to grow.",
"Consistency is key. Regular practice is more effective than sporadic intense sessions.",
"Apply what you learn through hands-on projects. Practical experience reinforces theoretical knowledge.",
"Define achievable goals for each coding session. Setting realistic expectations reduces frustration.",
"Enjoy the process of coding rather than just the end result. It's about the journey as much as the destination.",
"Don't hesitate to ask for help when you're stuck. The programming community is often supportive.",
"Read code written by others. It exposes you to different styles and techniques, expanding your understanding.",
"Participate in or seek code reviews. Constructive feedback improves your coding skills.",
"Mistakes are part of learning. Analyze errors, understand them, and use them as opportunities to improve.",
"Teaching reinforces your understanding. Share your knowledge through blog posts or tutorials.",
"Cultivate a curious mindset. Explore new technologies, languages, and tools.",
"Connect with fellow developers. Having a support system makes the learning journey more enjoyable.",
"Master the fundamentals. A strong foundation makes it easier to tackle advanced concepts.",
"Maintain a positive attitude. Challenges are opportunities to showcase your problem-solving skills.",
"Work on side projects that align with your interests. Passion fuels motivation.",
"Learn and use version control systems like Git. It's a valuable skill for collaboration.",
"Engage with coding communities on platforms like GitHub, Stack Overflow, or forums. Networking is key.",
"Follow industry news and updates. Staying informed keeps you relevant in the dynamic field of programming."
]

btnElement.addEventListener("click", generateQuotes);

function generateQuotes() {
  const quoteDescription = document.getElementById('motivsdesc');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDescription.innerText = randomQuote;
}