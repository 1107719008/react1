import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <section>
        <div class="set">
          <div><img src="./images/animate/candy01.png"/> </div>
            <div><img src="./images/animate/candy02.png"/> </div>
              <div><img src="./images/animate/candy03.png"/> </div>
                <div><img src="./images/animate/candy04.png"/> </div>
                  <div><img src="./images/animate/candy05.png"/> </div>
                    <div><img src="./images/animate/candy06.png"/> </div>
                      <div><img src="./images/animate/candy07.png"/> </div>
                        <div><img src="./images/animate/candy08.png"/> </div>
                          <div><img src="./images/animate/candy09.png"/> </div>
                          </div>
                          
    </section>
    <div className="up">
    <p className="welcomeback">Welcome Back</p>
    <p className="logaccount">login your account</p>

    <input type="text" placeholder="username" className="username"/>
    <input type="password" placeholder="password" className="password"/>


    <input type="button" value="login" className="login" onclick="window.location='./index.html'"/>

    </div>
    </body>
  );
}

export default App;
