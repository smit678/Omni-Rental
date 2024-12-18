import Analytics from "../Components/Analytics"
import "../style/About.css";

const About = () => {
  return (
   <>
   <main>
   <section className='section-hero'>
          <div className="container grid grid-two-cols">
          
            <div className="about-content">
              <p>Welcome to omni rental </p>
              <h1>Why Choose Us ?</h1>
              <p>We Stand As Your Trusted Partner. Our Dedication To Quality, Innovation, And Customer Satisfaction Sets Us Apart
                 @24 Hour Support
              </p>
              <p></p>
              <p></p>
              <p></p>
              
              

              <div className='btn btn-group'>
              <a href="/feedback">
              <button className='btn'>Feedback</button>
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
        <Analytics/>
   </main>
   </>
  )
}

export default About
