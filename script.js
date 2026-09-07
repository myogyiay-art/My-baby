const questions = [
    {
        question: "✨ ကမ္ဘာပေါ်မှာ အလှဆုံးက ဘယ်သူလဲ ✨",
        options: ["👑 Audrey Hepburn (အော်ဒรီ ဟပ်ဘန်း)", "💎 Marilyn Monroe (မာရလင် မွန်ရိုး)", "🌹 Bella Hadid (ဘယ်လာ ဟာဒစ်)"],
    },
    {
        question: "🌸 ကမ္ဘာပေါ်မှာ အလှဆုံးပြုံးနိုင်တဲ့ အမျိုးသမီးက ဘယ်သူလဲ? 🌸",
        options: ["✨ Aishwarya Rai (အရှ်ဝါရိယာ ရိုင်း)", "💖 Angelina Jolie (အန်ဂျယ်လီနာ ဂျိုလီ)", "🌷 Scarlett Johansson (စကာလက် ဂျိုဟန်ဆန်)"],
    },
    {
        question: "💖 ဒီထဲမှာ တကယ်ရော မှန်ကန်တဲ့ အဖြေ ရှိရဲ့လား? 💖",
        options: ["🌷 တစ်ယောက်ယောက်တော့ ဖြစ်မယ်", "✨ သေချာမသိတော့ဘူး", "🌸 ရှိနိုင်ချေ ရှိပါတယ်"],
    }
];

let currentStep = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

function loadQuestion() {
    if (currentStep < questions.length) {
        let q = questions[currentStep];
        questionText.textContent = q.question;
        optionsContainer.innerHTML = "";

        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.className = "btn";
            btn.onclick = nextStep;
            optionsContainer.appendChild(btn);
        });
    } else {
        showFinalMessage();
    }
}

function nextStep() {
    currentStep++;
    loadQuestion();
}

function showFinalMessage() {
    questionText.innerHTML = `
        <div class="romantic-text">
            👑 ʜᴇʏ ʙᴇᴀᴜᴛɪғᴜʟ! 👑<br><br>
            ✨ အဖြေတွေ အကုန်လုံးက မှားနေပါတယ်... ✨<br><br>
            ဒီကမ္ဘာကြီးထဲမှာ... <b>ဘေဘီ ကသာ အလှဆုံးပါနော်!</b> 🥰💖<br><br>
            ဘယ်လောက်ပဲ နာမည်ကြီးတဲ့ အလှမယ်တွေ ရှိပါစေ၊ ကိုယ်ပိုင်တဲ့ ဘဝထဲမှာ ဘေဘီထက်သာတဲ့ အလှတရားဆိုတာ လုံးဝ မရှိပါဘူး။ အမြဲတမ်း ဒီလိုပဲ လှလှပပ ပြုံးနေပေးပါနော်! 🌸🌷✨
        </div>
    `;
    optionsContainer.innerHTML = "";
}

loadQuestion();