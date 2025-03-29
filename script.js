// Function to start the test
function startTest() {
    document.getElementById('page0').style.display = 'none';
    document.getElementById('page1').style.display = 'block';
}

// Function to display the next page
function nextPage(pageNumber) {
    event.preventDefault(); // Prevent form submission

    // Hide the current page
    document.getElementById('page' + pageNumber).style.display = 'none';

    // Show the next page
    if (pageNumber === 1) {
        document.getElementById('page2').style.display = 'block';
    } else if (pageNumber === 2) {
        document.getElementById('finalPage').style.display = 'block';
        showResults();
    }
}

// Function to calculate and show results
function showResults() {
    let score = 0;

    // Calculate score based on selected answers (for demonstration purposes)
    let quiz1 = document.getElementById('quiz1');
    let quiz2 = document.getElementById('quiz2');

    // Get answers for quiz1
    for (let i = 1; i <= 5; i++) {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            score += parseInt(answer.value);
        }
    }

    // Get answers for quiz2
    for (let i = 6; i <= 10; i++) {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            score += parseInt(answer.value);
        }
    }

    // Determine the result based on the score
    let resultText = 'Your score: ' + score + '. ';
    let resultImage = '';

    if (score <= 20) {
        resultText += 'You are an Introvert!';
        resultImage = 'images/introvert.jpg'; // Replace with your image path
    } else if (score <= 30) {
        resultText += 'You are Balanced!';
        resultImage = 'images/balanced.jpg'; // Replace with your image path
    } else {
        resultText += 'You are an Extrovert!';
        resultImage = 'images/extrovert.jpg'; // Replace with your image path
    }

    // Show the result
    document.getElementById('result').innerText = resultText;
    document.getElementById('resultImage').src = resultImage;
}
