        document.addEventListener("DOMContentLoaded", function() {
            // Define the target date (1st August 2000)
            var targetDate = new Date("2000-08-01");
            
            // Get the current date
            var currentDate = new Date();
            
            // Calculate age
            var age = currentDate.getFullYear() - targetDate.getFullYear();
            
            // Adjust age if birthday hasn't occurred yet this year
            if (currentDate.getMonth() < targetDate.getMonth() || 
                (currentDate.getMonth() === targetDate.getMonth() && 
                currentDate.getDate() < targetDate.getDate())) {
                age--;
            }
            
            // Display the calculated age
            var ageElement = document.getElementById("age");
            ageElement.innerText = age;

            // Check if today is the birthday
            if (currentDate.getMonth() === targetDate.getMonth() && 
                currentDate.getDate() === targetDate.getDate()) {
                var birthdayElement = document.getElementById("birthday");
                birthdayElement.innerText = "Happy Birthday!";

                // Function to generate a random color (excluding black)
                function getRandomColor() {
                    var letters = '0123456789ABCDEF';
                    var color;
                    do {
                        color = '#';
                        for (var i = 0; i < 6; i++) {
                            color += letters[Math.floor(Math.random() * 16)];
                        }
                    } while (color === '#000000'); // Ensure color is not black
                    return color;
                }

                // Function to change text color periodically
                setInterval(function() {
                    var randomColor = getRandomColor();
                    birthdayElement.style.color = randomColor;
                }, 300); // Color change interval (300 ms)
            }
        });