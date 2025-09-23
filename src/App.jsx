
import './App.css'
function App() {
  
  return (
    <>
      
    <nav
      id="navbar-top"
      className="navbar navbar-expand-lg navbar-light bg-white sticky-top"
    >
      <div className="container-fluid px-5">
        <a className="navbar-brand fw-bold fs-2" href="#" style={{color: "purple"}}
          >Portfolio</a
        >
        <button
          className="nav-menu d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="bi bi-menu-button-fill"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-4" style={{fontSize: 1}}>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonial">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">Blog</a>
            </li>
          </ul>
        </div>
        <button className="c-btn ms-4 py-2 px-4 rounded-pill d-none d-md-block">Contact</button>
      </div>
    </nav>
    <section className="home pt-5 pb-5" id="home">
      <div className="row justify-content-evenly align-middle">

        <div className="col-10 col-md-6 text-center text-md-start" data-aos="slide-right">
          <h2 style={{color:"purple"}}>
            Hello! I Am <br /><span className="c-orange">Prakhar Srivastava</span>
          </h2>
          <p className="text-muted">
           Skilled in creating fully responsive websites and implementing backend functionality using modern web technologies.


          </p>
          <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
            Hire Me
          </button>
          <a href="" className="link ms-4 d-none">See My Work</a>
        </div>
        <div className="col-10 col-md-4 d-none d-md-block">
          <img src="images/banner-01.webp" className="img-fluid" alt="" />
        </div>
      </div>
    </section>
    
    <section className="expertise mt-5" id="service">
      <div className="heading text-center">
        <small>My Expertise</small>
        <h3>
          Provide Wide Range of <br />
          Digital Services
        </h3>
      </div>
      <div className="row justify-content-evenly mt-5">
        <div className="col-10 col-md-4" data-aos="fade-up">
          <div className="service-card">
            <div className="img">
              <img
                src="images/service-icon1.png"
                className="w-25 img-fluid img"
                alt=""
              />
            </div>
            <div className="content mt-3">
              <h4>Web Design</h4>
              <p className="text-muted">
                Dolor repellendus temporibus autem quibusdam officiis debitis
                rerum neces aibus minima veniam.
              </p>
              <a href="" className="link">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-10" data-aos="fade-up">
          <div className="service-card">
            <div className="img">
              <img
                src="images/service-icon2.png"
                className="w-25 img-fluid img"
                alt=""
              />
            </div>
            <div className="content mt-3">
              <h4>Web Development</h4>
              <p className="text-muted">
                Dolor repellendus temporibus autem quibusdam officiis debitis
                rerum neces aibus minima veniam.
              </p>
              <a href="" className="link">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-10" data-aos="fade-up">
          <div className="service-card">
            <div className="img">
              <img
                src="images/service-icon3.png"
                className="w-25 img-fluid img"
                alt=""
              />
            </div>
            <div className="content mt-3">
              <h4>Debugging</h4>
              <p className="text-muted">
                Dolor repellendus temporibus autem quibusdam officiis debitis
                rerum neces aibus minima veniam.
              </p>
              <a href="" className="link">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="skill mt-5 py-5" id="about">
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 skill-with-progress" data-aos="slide-right">
          <div className="row justify-content-evenly">
            <div className="col-10 col-md-6">
              <div className="progress-card ms-3 ms-md-0">
                <div className="circular-progress html-css">
                  <span className="progress-value html-progress">90%</span>
                </div>
                <br />
                <span className="text">HTML & CSS</span>
              </div>
            </div>
            <div className="col-10 col-md-6 mt-4 mt-md-0">
              <div className="progress-card ms-3 ms-md-0">
                <div className="circular-progress javascript">
                  <span className="progress-value javascript-progress">80%</span>
                </div>
                <br />
                <span className="text">JavaScript</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-evenly mt-4">
            <div className="col-10 col-md-6">
              <div className="progress-card ms-3 ms-md-0">
                <div className="circular-progress php">
                  <span className="progress-value php-progress">60%</span>
                </div>
                <br />
                <span className="text">Node-Js</span>
              </div>
            </div>
            <div className="col-10 col-md-6 mt-4 mt-md-0">
              <div className="progress-card ms-3  ms-md-0">
                <div className="circular-progress reactjs">
                  <span className="progress-value reactjs-progress">50%</span>
                </div>
                <br/>
                <span className="text">Mongo-DB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 col-md-5 skill-detail" data-aos="slide-left">
          <div className="heading mt-5 mt-md-3">
            <small>My Skills</small>
            <h3>Beautiful & Unique Digital Experiences</h3>
            <p className="text-muted">
              I specialize in building modern, user-friendly websites with a strong focus on responsiveness and performance. My skill set spans both front-end and back-end development, allowing me to create seamless digital solutions from concept to deployment.            </p>
            <p className="text-muted">
               I’m continuously learning and refining my approach to deliver clean, efficient, and scalable code

            </p>
            <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
             
              <a
                href="Entry Level Web Developer Resume.pdf"
                download="Prakhar CV-1.htm"
                style={{textdecoration: "none",color:"purple"}}
                >Download CV</a
              >
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <section className="portfolio" id="portfolio">
      <div className="heading text-center pt-5">
        <small>Creative Work</small>
        <h3>Check My Portfolio</h3>
      </div>

      <div id="myBtnContainer" className="text-center mt-4">
        
        <button className="filter-item" data-filter="all">All</button>
        <button className="filter-item" data-filter="game">Game</button>
        <button className="filter-item" data-filter="webapp">Web App</button>
        <button className="filter-item" data-filter="website">Website</button>
        <button className="filter-item" data-filter="brand">Brand</button>
      </div>
      <div className="portfolio-body">
        <div className="row justify-content-evenly px-4">
          <div className="post col-md-4 game all col-10 mt-3 mt-md-0" data-aos="fade-up">
            <div className="card">
              <img src="images/2048game.png" className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h4 className="card-title">2048 Game</h4>
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">Game</span
                ><br />
                <a href="#" className="link">Read More</a>
              </div>
            </div>
          </div>
          <div className="post col-md-4 website all col-10 mt-3 mt-md-0" data-aos="fade-up">
            <div className="card">
              <img
                src="images/currency-converter.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h4 className="card-title">Converter App</h4>
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">Website</span
                ><br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
          <div className="post col-md-4 webapp all col-10 mt-3 mt-md-0" data-aos="fade-up">
            <div className="card">
              <img src="images/dictionary.png" className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h4 className="card-title">Dictionary</h4>
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">WebApp</span
                ><br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-evenly mt-4 px-4">
          <div className="post col-md-4 game all col-10 mt-3 mt-md-0" data-aos="fade-up">
            <div className="card">
              <img src="images/piceditor.png" className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h4 className="card-title">PicEditor App</h4>
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">App</span
                ><br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
          <div className="post col-md-4 website all col-10 mt-3 mt-md-0" data-aos="fade-up">
            <div className="card">
              <img src="images/tictactoe.png" className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h4 className="card-title">TicTacToe Game</h4>
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">Game</span
                ><br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
          <div className="post col-md-4 all col-10 mt-3 mt-md-0" data-aos="fade-up">
            <div className="card">
              <img
                src="images/lang-translator.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h4 className="card-title">Lang Translator</h4>
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">Web App</span
                ><br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="testimonial mt-5 pt-5" id="testimonial">
      <div className="row justify-content-evenly">
        <div className="col-md-4 col-10" data-aos="slide-right">
          <img src="images/tastimonials-img.png" className="img-fluid" alt=""/>
        </div>
        <div className="col-md-6 col-10 mt-5" data-aos="slide-left">
          <div className="heading">
            <small>Testimonials</small>
            <h3>Happy Clients Feedback</h3>
            
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row justify-content-evenly">
                    <div className="col-2 text-center">
                      <i className="bi bi-quote"></i>
                    </div>
                    <div className="col-10">
                      <p className="text-muted">
                        Quisruam est, qui dolorem ipsum quia dolor sit amet,
                        consecteaur aeci velit, sed quia non numquam eius modi
                        tempora incidunt ut lao magnam aliquam quaerat ...
                      </p>
                      <h4>Kevin Andrew</h4>
                      <small className="fs-6 text-muted">CEO of Company</small>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row justify-content-evenly">
                    <div className="col-2 text-center">
                      <i className="bi bi-quote"></i>
                    </div>
                    <div className="col-10">
                      <p className="text-muted">
                        Quisruam est, qui dolorem ipsum quia dolor sit amet,
                        consecteaur aeci velit, sed quia non numquam eius modi
                        tempora incidunt ut lao magnam aliquam quaerat ...
                      </p>
                      <h4>Kevin Andrew</h4>
                      <small className="fs-6 text-muted">CEO of Company</small>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row justify-content-evenly">
                    <div className="col-2 text-center">
                      <i className="bi bi-quote"></i>
                    </div>
                    <div className="col-10">
                      <p className="text-muted">
                        Quisruam est, qui dolorem ipsum quia dolor sit amet,
                        consecteaur aeci velit, sed quia non numquam eius modi
                        tempora incidunt ut lao magnam aliquam quaerat ...
                      </p>
                      <h4>Kevin Andrew</h4>
                      <small className="fs-6 text-muted">CEO of Company</small>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="nextprev-btn rounded-pill prev-btn"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <i className="bi bi-arrow-left-circle-fill prev"></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="nextprev-btn rounded-pill next-btn"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <i className="bi bi-arrow-right-circle-fill next"></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section className="blog mt-5 pb-5" id="blog">
      <div className="heading text-center pt-5">
        <small>Latest News</small>
        <h3>Blog & Articles</h3>
      </div>
      <div className="row justify-content-evenly px-4 mt-4" data-aos="fade-up">
        <div className="blogpost col-md-4 col-10 mt-2 mt-md-0 game all">
          <div className="card">
            <img
              src="images/2048game.png"
              className="card-img-top rounded-4"
              alt="..."
            />
            <div className="card-body px-4">
              <small>By Pawan Kumavat</small
              ><span className="ms-3">Mar 8,2022</span>
              <h4 className="card-title">
                <a href="">Quis autem vea eum iure reprehenderit</a>
              </h4>
              <p className="text-muted">
                Dolor repellendus temporibus autem quibusdam officiis debitis
                rerum nece aibus minima veniam.
              </p>
              <a href="#" className="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal1">Read More</a>
            </div>
          </div>
        </div>
        <div className="blogpost col-md-4 col-10 mt-5 mt-md-0 website all">
          <div className="card">
            <img
              src="images/currency-converter.png"
              className="card-img-top rounded-4"
              alt="..."
            />
            <div className="card-body px-4">
              <small>By Pawan Kumavat</small
              ><span className="ms-3">Mar 8,2022</span>
              <h4 className="card-title">
                <a href="">Quis autem vea eum iure reprehenderit</a>
              </h4>
              <p className="text-muted">
                Dolor repellendus temporibus autem quibusdam officiis debitis
                rerum nece aibus minima veniam.
              </p>
              <a href="#" className="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal2">Read More</a>
            </div>
          </div>
        </div>
        <div className="blogpost col-md-4 col-10 mt-5 mt-md-0 webapp all">
          <div className="card">
            <img
              src="images/dictionary.png"
              className="card-img-top rounded-4"
              alt="..."
            />
            <div className="card-body px-4">
              <small>By Pawan Kumavat</small
              ><span className="ms-3">Mar 8,2022</span>
              <h4 className="card-title">
                <a href="">Quis autem vea eum iure reprehenderit</a>
              </h4>
              <p className="text-muted">
                Dolor repellendus temporibus autem quibusdam officiis debitis
                rerum nece aibus minima veniam.
              </p>
              <a href="#" className="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal3">Read More</a>
            </div>
          </div>
        </div>
        
        <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              
                <button type="button" className="btn-c rounded-pill" data-bs-dismiss="modal"><i className="bi bi-x-circle-fill"></i></button>
              
              <div className="modal-body px-4">
                <div className="img">
                  <img src="images/2048game.png" className="img-fluid" alt=""/>
                </div>
                <div className="content mt-3">
                  <small>By Pawan Kumavat</small
                    ><span className="text-muted ms-2">Mar 8,2022</span>
                  <h4 className="card-title mt-3">Quis autem vea eum iure reprehenderit</h4>
                  <div className="social-links mt-4">
                      <button href="" className="rounded-pill dribble">
                        <i className="bi bi-dribbble"></i>
                      </button>
                      <button href="" className="rounded-pill whatsapp">
                        <i className="bi bi-whatsapp"></i>
                      </button>
                      <button href="" className="rounded-pill behance">
                        <i className="bi bi-behance"></i>
                      </button>
                  </div>
                  <p className="text-muted mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.</p>
                </div>
              </div>
              <div className="heading px-2">
                <h3 className="fs-3 ms-3">Leave A Comment</h3>
              </div>
              <div className="contact-form ms-3 mt-3 pb-4 px-2">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="E-mail"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Mobile No."
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </div>
                <button className="c-btn h-btn mt-3 py-2 px-4 rounded-pill">
                  Submit
                </button>
              </div>
              
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              
                <button type="button" className="btn-c rounded-pill" data-bs-dismiss="modal"><i className="bi bi-x-circle-fill"></i></button>
              
              <div className="modal-body px-4">
                <div className="img">
                  <img src="images/currency-converter.png" className="img-fluid" alt=""/>
                </div>
                <div className="content mt-3">
                  <small>By Pawan Kumavat</small
                    ><span className="text-muted ms-2 ms-md-0">Mar 8,2022</span>
                  <h4 className="card-title mt-3">Quis autem vea eum iure reprehenderit</h4>
                  <div className="social-links mt-4">
                      <button href="" className="rounded-pill dribble">
                        <i className="bi bi-dribbble"></i>
                      </button>
                      <button href="" className="rounded-pill whatsapp">
                        <i className="bi bi-whatsapp"></i>
                      </button>
                      <button href="" className="rounded-pill behance">
                        <i className="bi bi-behance"></i>
                      </button>
                  </div>
                  <p className="text-muted mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.</p>
                </div>
              </div>
              <div className="heading px-2">
                <h3 className="fs-3 ms-3">Leave A Comment</h3>
              </div>
              <div className="contact-form ms-3 mt-3 pb-4 px-2">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="E-mail"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Mobile No."
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </div>
                <button className="c-btn h-btn mt-3 py-2 px-4 rounded-pill">
                  Submit
                </button>
              </div>
              
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              
                <button type="button" className="btn-c rounded-pill" data-bs-dismiss="modal"><i className="bi bi-x-circle-fill"></i></button>
              
              <div className="modal-body px-4">
                <div className="img">
                  <img src="images/dictionary.png" className="img-fluid" alt=""/>
                </div>
                <div className="content mt-3">
                  <small>By Pawan Kumavat</small
                    ><span className="text-muted ms-2 ms-md-0">Mar 8,2022</span>
                  <h4 className="card-title mt-3">Quis autem vea eum iure reprehenderit</h4>
                  <div className="social-links mt-4">
                      <button href="" className="rounded-pill dribble">
                        <i className="bi bi-dribbble"></i>
                      </button>
                      <button href="" className="rounded-pill whatsapp">
                        <i className="bi bi-whatsapp"></i>
                      </button>
                      <button href="" className="rounded-pill behance">
                        <i className="bi bi-behance"></i>
                      </button>
                  </div>
                  <p className="text-muted mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.</p>
                </div>
              </div>
              <div className="heading px-2">
                <h3 className="fs-3 ms-3">Leave A Comment</h3>
              </div>
              <div className="contact-form ms-3 mt-3 pb-4 px-2">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="E-mail"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Mobile No."
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </div>
                <button className="c-btn h-btn mt-3 py-2 px-4 rounded-pill">
                  Submit
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="contact py-5" id="contact">
      <div className="heading text-center">
        <small>Get in Touch</small>
        <h3>Any Questions? Feel Free to Contact</h3>
      </div>
      <div className="row justify-content-evenly mt-5">
        <div className="col-md-5 col-10 contact-details" data-aos="slide-right">
          <div className="row justify-content-evenly">
            <div className="col-1">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div className="col-11">
              <p>121 King Street Melbourne, 3000, Australia</p>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-1">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div className="col-11">
              <p>+91 9527818693</p>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-1">
              <i className="bi bi-send-fill"></i>
            </div>
            <div className="col-11">
              <p>codewithpawan@gmail.com</p>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-1">
              <i className="bi bi-globe-americas"></i>
            </div>
            <div className="col-11">
              <p>codingpawan.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-10 mt-3 mt-md-0" data-aos="slide-left">
          <div className="contact-form">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="E-mail"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Mobile No."
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
            <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
   
    <button
      type="button"
      className="btn btn-floating btn-lg rounded-pill"
      id="btn-back-to-top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>

  
    <footer className="text-center text-muted py-4">
      <h3 className="text-white pt-4" data-aos="fade-up">Portfolio</h3>
      <div className="link-group mt-5" data-aos="fade-up">
        <a href="#home">Home</a>
        <div className="vr"></div>
        <a href="#about">About</a>
        <div className="vr"></div>
        <a href="#service">Service</a>
        <div className="vr"></div>
        <a href="#portfolio">Portfolio</a>
        <div className="vr"></div>
        <a href="#blog">Blog</a>
        <div className="vr"></div>
        <a href="#contact">Contact</a>
      </div>
      <div className="social-links mt-5" data-aos="fade-up">
        <button href="" className="rounded-pill dribble">
          <i className="bi bi-dribbble"></i>
        </button>
        <button href="" className="rounded-pill whatsapp">
          <i className="bi bi-whatsapp"></i>
        </button>
        <button href="" className="rounded-pill behance">
          <i className="bi bi-behance"></i>
        </button>
      </div>
      <hr className="text-muted my-4" />

      <p>Copyright 2022 Portfolio | All Rights Reserved.</p>
    </footer>

    </>
  )
}

export default App
