const questions = [
    {
      question: "1. What is the capital of India?",
      options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      correct: "Delhi"
    },
    {
      question: "2. Who was the first President of India?",
      options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel", "Dr. Zakir Husain"],
      correct: "Dr. Rajendra Prasad"
    },
    {
      question: "3. Which river is considered the holiest in India?",
      options: ["Ganga", "Yamuna", "Godavari", "Kaveri"],
      correct: "Ganga"
    },
    {
      question: "4. Who wrote the national anthem of India?",
      options: ["Rabindranath Tagore", "Subhas Chandra Bose", "Sarojini Naidu", "Bankim Chandra Chattopadhyay"],
      correct: "Rabindranath Tagore"
    },
    {
      question: "5. Which state is known as the ‘Land of the Rising Sun’?",
      options: ["Assam", "Nagaland", "Arunachal Pradesh", "Meghalaya"],
      correct: "Arunachal Pradesh"
    },
    {
      question: "6. Who is known as the Father of the Nation in India?",
      options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Dr. B.R. Ambedkar"],
      correct: "Mahatma Gandhi"
    },
    {
      question: "7. hich is the largest state by area in India?",
      options: ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Maharashtra"],
      correct: "Rajasthan"
    },
    {
      question: "8. What is the official language of India?",
      options: ["Hindi", "English", "Bengali", "Tamil"],
      correct: "Hindi"
    },
    {
      question: "9. Which is the national flower of India?",
      options: ["Rose", "Lotus", "Tulip", "Sunflower"],
      correct: "Lotus"
    },
    {
      question: "10. What is the national animal of India?",
      options: ["Lion", "Elephant", "Tiger", "Deer"],
      correct: "Tiger"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultBox = document.getElementById("result-box");
  const scoreDisplay = document.getElementById("score");
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    nextBtn.disabled = true;
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => selectAnswer(btn, q.correct);
      optionsEl.appendChild(btn);
    });
  }
  
  function selectAnswer(button, correctAnswer) {
    const buttons = optionsEl.querySelectorAll("button");
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      } else if (btn !== button) {
        btn.classList.remove("correct", "wrong");
      }
    });
  
    if (button.textContent === correctAnswer) {
      score++;
    } else {
      button.classList.add("wrong");
    }
  
    nextBtn.disabled = false;
  }
  
  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  };
  
  function showResult() {
    document.getElementById("question-box").classList.add("hide");
    resultBox.classList.remove("hide");
    scoreDisplay.textContent = `${score} / ${questions.length}`;
  }

  // Start quiz
  showQuestion();
  