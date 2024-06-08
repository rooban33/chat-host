import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="team" className="team">
        <div className="container">

          <div className="section-title">
            <h2>Team</h2>
            <p>Alone we can do so little, together we can do so much</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src="assets/img/WhatsApp Image 2023-04-01 at 8.10.06 AM.jpeg" alt="Shakthivel" />
                <h4>Shakthivel</h4>
                <span>Product Manager</span>
                <p>
                  "Organization isn't about perfection; it's about efficiency, reducing stress and clutter, saving time and money and improving your overall quality of life." 
                </p>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src="assets/img/WhatsApp Image 2023-04-01 at 8.30.17 AM.jpeg" alt="Lokhesh" />
                <h4>Lokhesh</h4>
                <span>Brand Ambassador</span>
                <p>
                  "Organizing is what you do before you do something, so that when you do it, it is not all mixed up." 
                </p>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src="assets/img/WhatsApp Image 2023-04-01 at 9.26.18 AM.jpeg" alt="Shajith Rooban" />
                <h4>Shajith Rooban</h4>
                <span>CEO</span>
                <p>
                  "Organizing my life has been key to my success. Whether it's my schedule, my business, or my home, I know that when everything is in order, I can focus on what's truly important: my goals."
                </p>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
