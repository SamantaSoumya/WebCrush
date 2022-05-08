const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="bootstrap.css">
      <link rel="stylesheet" href="C:\Users\SOUMYA\OneDrive\Desktop\webcrush\home.css">
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" media="screen and (max-width: 800px)" href="phone.css">
      <title>WebCrush</title>
  </head>
  
  <body>
  
      <nav class="nav nav-h " id="navbar">
          <h1>WebCrush</h1>
          <ul class="v-class navlist">
              <li class="v-class v-class-resp">
                  <a  href="#navbar">Home</a>
                  <a  href="#ourServices">Services</a>
                  <a  href="#about_us">About Us</a>
                  <a  href="#contact-form">Contact Us</a>
              </li>
          </ul>
  
  
          <div class="burger rightnav v-class-resp">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
          </div>
      </nav>
      
      <div class="project" id="project">
          <div class="left2">
              <div class="ineerleft2">
                  <h1 class="ineerleftp">Everything you need to create your website</h1>
                  <p>Explore the website builder that empowers you to stand out online </p>
                  <p>whether you need a portfolio, online store, business website or multilingual site</p>
              </div>
              <!-- <a class="inerbtn" href="#contact-form">Contact Us</a> -->
          </div>
          <div class="right2">
              <img src="https://www.website.com/img/skin/pagebuilder/webp/img_hero2x.webp" alt="">
          </div>
      </div>
      <div class="ourPromise" id="ourPromise">
          <h1 class="ineerp">Make your own website.</h1>
          <p>Whether you're growing your business, selling online or reaching international audiences</p>
          <p>- get everything you need to establish your online presence with the Website.com website builder.</p>
          <a class="inerbtnn" href="#contact-form">Get a Website Now</a>
      </div>
      <div class='container-fluid mx-auto mt-5 mb-5 col-12' id="ourServices" style="text-align: center">
          <div class="hd">Why People Believe in Us</div>
          <p><small class="text-muted">Always render more and better service than <br />is expected of you, no matter
                  what
                  your ask may be.</small></p>
          <div class="row" style="justify-content: center">
              <div class="card col-md-3 col-12">
                  <div class="card-content">
                      <div class="card-body"> <img class="img" src="img_01.jpg" />
                          <div class="shadow"></div>
                          <div class="card-title"> We're Incredible </div>
                          <div class="card-subtitle">
                              <p> <small class="text-muted">We spent thousands of hours creating on algorithm that
                                      does
                                      this for you in seconds. We collect a small fee from the professional after they
                                      meet your</small> </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="card col-md-3 col-12 ml-2">
                  <div class="card-content">
                      <div class="card-body"> <img class="img" src="img_02.jpg" />
                          <div class="card-title"> We're Unbiased </div>
                          <div class="card-subtitle">
                              <p> <small class="text-muted"> We don't accept ads from anyone. We use actual data to
                                      match
                                      you who the best person for each job </small> </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="card col-md-3 col-12 ml-2">
                  <div class="card-content">
                      <div class="card-body"> <img class="img rck" src="img_03.jpg" />
                          <div class="card-title"> We Guide you </div>
                          <div class="card-subtitle">
                              <p> <small class="text-muted">Buying or selling a home is often the largest transaction
                                      anyone does in their life. we guide you through the process so that you can be
                                      confident in reaching your dream outcome.</small> </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="bg-light" id="about_us">
          <div class="container py-5">
              <div class="row h-100 align-items-center py-5">
                  <div class="col-lg-6">
                      <h1 class="display-4">About us</h1>
                      <p class="lead text-muted mb-0">We’re a small team who are all sharing mutual passion for web
                          development, WordPress and online business.
  
                          We’re all working remotely and enjoying it since 2021.</p>
                  </div>
                  <div class="col-lg-6 d-none d-lg-block"><img
                          src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid">
                  </div>
              </div>
          </div>
      </div>
  
      <div class="bg-white py-5">
          <div class="container py-5">
              <div class="row align-items-center mb-5">
                  <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                      <h2 class="font-weight-light">Our Mission</h2>
                      <p class="font-italic text-muted mb-4">WebCrush.org is a online platforms for learning
                          everything
                          related to websites.
  
                          Our goal is create Client own website, blogs and online stores using the right tools and
                          platforms.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                  </div>
                  <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img
                          src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt=""
                          class="img-fluid mb-4 mb-lg-0"></div>
              </div>
              <div class="row align-items-center">
                  <div class="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                          alt="" class="img-fluid mb-4 mb-lg-0"></div>
                  <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                      <h1 class="font-weight-light">Our Business Model</h1>
                      <p class="font-italic text-muted mb-4">We monetize our website by using affiliate links. If you
                          decide to buy a service through us, you may comtact us.
  
                          WebCrush doesn’t have any banner ads nor do we accept sponsored posts. See full advertising
                          disclosure here.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn
                          More</a>
                  </div>
              </div>
          </div>
      </div>
  
      <div class="bg-light py-5">
          <div class="container py-5">
              <div class="row mb-4">
                  <div class="col-lg-5">
                      <h2 class="display-4 font-weight-light">Our team</h2>
                      <p class="font-italic text-muted">Work together and grow together.</p>
                  </div>
              </div>
  
              <div class="row text-center">
                  <!-- Team item-->
                  <div class="col-xl-3 col-sm-6 mb-5">
                      <div class="bg-white rounded shadow-sm py-5 px-4"><img src="logo1.jpeg" alt="" width="100"
                              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                          <h5 class="mb-0">Manuella Nevoresky</h5><span class="small text-uppercase text-muted">CEO -
                              Founder</span>
                      </div>
                  </div>
                  <!-- End-->
  
                  <!-- Team item-->
                  <div class="col-xl-3 col-sm-6 mb-5">
                      <div class="bg-white rounded shadow-sm py-5 px-4"><img src="logo1.jpeg" alt="" width="100"
                              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                          <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO -
                              Founder</span>
                      </div>
                  </div>
                  <!-- End-->
  
                  <!-- Team item -->
                  <div class="col-xl-3 col-sm-6 mb-5">
                      <div class="bg-white rounded shadow-sm py-5 px-4"><img src="logo1.jpeg" alt="" width="100"
                              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                          <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">CEO -
                              Founder</span>
                      </div>
                  </div>
                  <!-- End -->
  
                  <!-- Team item-->
                  <div class="col-xl-3 col-sm-6 mb-5">
                      <div class="bg-white rounded shadow-sm py-5 px-4"><img src="logo1.jpeg" alt="" width="100"
                              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                          <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO -
                              Founder</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!------ Include the above in your HEAD tag ---------->
  
      <div class="container contact-form" id="contact-form">
          <div class="contact-image">
              <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
          </div>
          <form method="post">
              <h3>Drop Us a Message</h3>
              <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                          <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                      </div>
                      <div class="form-group">
                          <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                      </div>
                      <div class="form-group">
                          <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *"
                              value="" />
                      </div>
                      <div class="form-group">
                          <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <textarea name="txtMsg" class="form-control" placeholder="Your Message *"
                              style="width: 100%; height: 150px;"></textarea>
                      </div>
                  </div>
              </div>
          </form>
      </div>
      <div class="container clientreview">
          <div class="mgb-40 padb-30 auto-invert line-b-4 align-center">
              <h4 class="font-cond-l fg-accent lts-md mgb-10" contenteditable="false">Not Yet Convinced?</h4>
              <h1 class="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contenteditable="false">Read Customer
                  Reviews</h1>
          </div>
          <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
              <li>
                  <img src="logo1.jpeg" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false"
                      data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]">
                  <p class="fs-110 font-cond-l" contenteditable="false">"your work is so lovely.and the cost in
                      rang.your
                      behavior also so good. "</p>
                  <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Martha Stewart</h5>
                  <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Business Woman - New
                      York</small>
              </li>
              <li>
                  <img src="logo1.jpeg" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false"
                      data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]">
                  <p class="fs-110 font-cond-l" contenteditable="false">" your work is so lovely.and the cost in
                      rang.your
                      behavior also so good."</p>
                  <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Ariana Menage</h5>
                  <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Recording Artist -
                      Los
                      Angeles</small>
              </li>
              <li>
                  <img src="logo1.jpeg" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false"
                      data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]">
                  <p class="fs-110 font-cond-l" contenteditable="false">" your work is so lovely.and the cost in
                      rang.your
                      behavior also so good. "</p>
                  <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Sean Carter</h5>
                  <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Fund Manager -
                      Chicago</small>
              </li>
          </ul>
      </div>
      <div class="footer" id="footer">
          <h4>Copyright@2021-2022 WebCrush.com</h4>
      </div>
      <script>
          const burger = document.querySelector(".burger");
          const nav = document.querySelector(".nav");
          const navlist = document.querySelector(".navlist");
          const rightnav = document.querySelector(".rightnav");
  
          burger.addEventListener('click', () => {
              rightnav.classList.toggle('v-class');
              navlist.classList.toggle('v-class');
              nav.classList.toggle('nav-h');
          })
      </script>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
