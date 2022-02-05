import './App.css';
import Home from './components/Home';
//  import Flower from '.Flower/image.jpeg';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
        <div className='App-link'>
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

        </div>
        <div>
        <Route path="/home" render={(props)=>{
        return<div>
          <div>
          {/* <img src={Flower}height={400} width={400} /> */}
          </div>
          <Home description=" 2. “Nothing is impossible. The word itself says ‘I’m possible!'”
— Audrey Hepburn

3. “There is nothing impossible to they who will try.”
— Alexander the Great

4. “The bad news is time flies. The good news is you’re the pilot.”
— Michael Altshuler

5. “Life has got all those twists and turns. You’ve got to hold on tight and off you go.”
— Nicole Kidman

6. “Keep your face always toward the sunshine, and shadows will fall behind you.”
— Walt Whitman

7. “Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.”
— Amal Clooney

Related: Good Morning Quotes

8. “You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.”
— Duchess Meghan

9. “I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened … it’s normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.”
— Taylor Swift

10. “Success is not final, failure is not fatal: it is the courage to continue that counts.”
– Winston Churchill

"{...props} height={200} width={200} />
          {/* <img  src={require('./images/flower.jpg').default}/>  */}
          
          
      </div>
      }} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

        </div>
    </div>
    </Router>
  );
}

export default App;