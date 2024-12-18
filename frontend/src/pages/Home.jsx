import Analytics from "../Components/Analytics";
import { useAuth } from "../store/auth";
import "../style/Home.css";

const Home = () => {
  const { user } = useAuth();

  return (
       <>
       <main>
{/* 1st section */}
        <section className='section-hero'>
          <div className="container grid grid-two-cols">

            <div className="hero-content">
              <p>We are providing service 24*7</p>
              <h1>Welcome {user.name} to Omni rental services</h1>
              <p>we provide best cars ,we have number of cars according your need ,let's select car as per your need</p>

              <div className='btn btn-group'>
              <a href="/about">
              <button className='btn'>learn more</button>
              </a>

              <a href="/cars">
              <button className='btn secondary-btn'>Rent Now</button>
              </a>
              </div>

            </div>
            <div className="hero-image">
              <img src="/bmw.jpg" alt="kuchbhi" height={400} width={600}/>
            </div>
          </div>
        </section>
       
{/* 2ed section analytics section */}
       <Analytics />
{/* 3rd section */}
        <section className='section-hero'>
          <div className="container grid grid-two-cols">
          <div className="hero-image">
              <img src="/bmw.jpg" alt="kuchbhi" height={400} width={600}/>
            </div>

            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Started Today</h1>
              <p>we provid best cars ,we have number of cars acording your need ,let's select car as per your need</p>

              <div className='btn btn-group'>
              <a href="/feedback">
              <button className='btn'>Feedback</button>
              </a>

              <a href="/cars">
              <button className='btn secondary-btn'>Rent Now</button>
              </a>
              </div>

            </div>
          
          </div>
        </section>
        </main>
       </>
  )

};

export default Home
