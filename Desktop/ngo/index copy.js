
 
  document.addEventListener("DOMContentLoaded", function() {
      const divs = document.querySelectorAll(".fade-in > div");
      let currentIndex = 0;
      const fadeDuration = 7000; // 7 seconds in milliseconds

      function fadeInNextDiv() {
          if (currentIndex < divs.length) {
              const currentDiv = divs[currentIndex];
              currentDiv.style.display = "block"; // Show the current div
              currentDiv.style.opacity = "0"; // Start with a transparent div

              // Fade in the current div
              const fadeInInterval = setInterval(function() {
                  const currentOpacity = parseFloat(currentDiv.style.opacity);
                  if (currentOpacity < 1) {
                      currentDiv.style.opacity = (currentOpacity + 0.1).toFixed(1);
                  } else {
                      clearInterval(fadeInInterval);
                      // After fade-in is complete, start fade-out after a delay
                      setTimeout(function() {
                          // Fade out the current div
                          const fadeOutInterval = setInterval(function() {
                              const currentOpacity = parseFloat(currentDiv.style.opacity);
                              if (currentOpacity > 0) {
                                  currentDiv.style.opacity = (currentOpacity - 0.1).toFixed(1);
                              } else {
                                  clearInterval(fadeOutInterval);
                                  currentDiv.style.display = "none"; // Hide the current div after fade-out
                                  currentIndex++;
                                  fadeInNextDiv(); // Call the function again for the next div
                              }
                          }, fadeDuration / 10);
                      }, fadeDuration);
                  }
              }, fadeDuration / 10);
          } else {
              // If all divs have been displayed, restart the loop
              currentIndex = 0;
              fadeInNextDiv();
          }
      }

      fadeInNextDiv(); // Start the fade-in loop
  });



                     