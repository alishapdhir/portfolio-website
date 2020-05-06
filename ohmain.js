$("#quiz-form").on("submit", function(event) {
       event.preventDefault();
       var $answer = $("#quiz-answer");
       var answer = $answer.val();

       var $cap = $("#capital");
       var cap = $cap.val();

       console.log(answer);
       if (answer === "Alabama") &&& (cap === Montgomery){
           $("#result").text("YES")
       }
   });
