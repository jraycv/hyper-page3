import * as React from "react";
import { render } from "react-dom";

import "./styles.scss";

function Root() {
  const [quizState, setQuizState] = React.useState(1);

  var link = "https://css-brio.github.io/";

  function submitAnswer(){

    if (quizState !== 3) {
      setQuizState(quizState + 1);
    } else {
      window.open(link,"_self");
    }

  }

  function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {

        diff = duration - (((Date.now() - start) / 1000) | 0);

        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // start = Date.now() + 1000;
            clearInterval(myTimer);
        }
    };
    timer();
    var myTimer = setInterval(timer, 1000);
}

  window.addEventListener("load",function(){
    var timeSet = 30,
    display = document.getElementById("timer");
    startTimer(timeSet, display);
  })

  return (
    <div>

      <div className="header"></div>

      <div className="container">

        <div className="creativeArea" />

        <div className="spaceWrap">
        
          <div className={`quizArea display-quiz${quizState}`}>

            <div className="timerArea"><span id="timer">00:00</span></div>

            <ul className={`steps active-step${quizState}`}>
              <li className="step1">1</li>
              <li className="step2">2</li>
              <li className="step3">3</li>
            </ul>

              <div className="panel quiz1">

                  <div className="question">

                    Do you love coffee?

                  </div>

                  <button onClick={submitAnswer}>Yes</button>
                  <button onClick={submitAnswer}>No</button>


              </div>

              <div className="panel quiz2">

                  <div className="question">

                  Do you like it hot or cold?

                  </div>

                  <button onClick={submitAnswer}>Hot</button>
                  <button onClick={submitAnswer}>Cold</button>

              </div>

              <div className="panel quiz3">

                <div className="question">

                Last Question: Do you want a Free! Coffee?

                </div>

                <button onClick={submitAnswer}>Yes</button>
                <button onClick={submitAnswer}>No</button>

              </div>



          </div>

        </div>

      </div>

      <div className="persuasiveArea" />

      <div className="legalArea">

      My Rewards! Παίξε και κέρδισε τους καφέδες σου για όλο το καλοκαίρι. 500€ για να απολαύσεις όποιον καφέ θέλεις από όλα τα καταστήματα Coffee Island. 
      Freddo cappuccino ή espresso?  Προτιμάς κάποια συγκεκριμένη ποικιλία καφέ; Ό,τι κι αν σ’ αρέσει, μπορείς να το απολαμβάνεις καθημερινά με το δώρο μας.    

      </div>

    </div>
  );
}

render(<Root />, document.getElementById("root"));
