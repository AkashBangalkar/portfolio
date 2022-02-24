AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Applied Machine Learning Scholar",
    cardImage: "assets/images/experience-page/ml.png",
    place: "Applied Ai",
    time: "(August, 2021 - Present)",
    desp: "<li>Studied the core conceps and Ideas in Machine Learning, Data Science and AI that would help to go from a real-world business problem to a first cut, working and deployable AI solution to the problem.</li> <li>Worked on several assignments and real-world case studies, which helps to grasp the practical details of building AI solutions. Knowledge on machine learning Data Processing steps like Data Exploration, Feature Cleaning, Feature Selection, Feature Encoding to construct a Data-set to apply various machine learning algorithms.</li> <li>Hands-on-knowledge on various algorithms like Linear & Logistic Regression, Random Forest, Decision Trees, Support Vector Machines, K-Nearest Neighbors, K-Means and Naive Bayes. Developing my skills by building machine learning models on various datasets available in Kaggle using various libraries in Python.</li>",
  },
  {
    title: "Quality Analyst & Python Developer",
    cardImage: "assets/images/experience-page/dhan.png",
    place: "Dhandhania Infotech Pvt Ltd",
    time: "(Aug, 2019 - Jul, 2021)",
    desp: "<li>Worked on different of projects with several teams and responsible for implementing a plan with errors being fixed, involved in planning and implementing strategies for quality management.</li><li>Along with that, involved in Data Analysis - Performing analysis to assess quality and meaning of data, Preparing final analysis reports, Fixing coding errors and related problems and maintaining databases, data systems. </li><li>Track weekly data to chart whether the departments hit goals. Produced reports and presentations using software.</li>",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp, mockLink }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


