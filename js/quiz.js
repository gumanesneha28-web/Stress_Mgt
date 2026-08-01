function calculateStress() {

    const form = document.getElementById("quizForm");

    let total = 0;

    total += Number(form.q1.value);
    total += Number(form.q2.value);
    total += Number(form.q3.value);
    total += Number(form.q4.value);
    total += Number(form.q5.value);

    const result = document.getElementById("result");
    const scoreText = document.getElementById("scoreText");
    const advice = document.getElementById("advice");

    result.classList.remove("hidden");

    if (total <= 8) {

        scoreText.innerHTML =
        "🟢 Low Stress (" + total + "/20)";

        advice.innerHTML =
        "Excellent! You are managing your stress well. Continue exercising, sleeping well, and maintaining a balanced study routine.";

    }

    else if (total <= 14) {

        scoreText.innerHTML =
        "🟡 Moderate Stress (" + total + "/20)";

        advice.innerHTML =
        "You are experiencing some stress. Try taking short breaks, practicing deep breathing, and planning your study schedule.";

    }

    else {

        scoreText.innerHTML =
        "🔴 High Stress (" + total + "/20)";

        advice.innerHTML =
        "Your stress level is high. Consider talking to a trusted friend, family member, teacher, or counselor. Remember to rest and take care of your mental health.";

    }

    result.scrollIntoView({
        behavior: "smooth"
    });

}