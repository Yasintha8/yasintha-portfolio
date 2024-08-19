let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


const typed = new Typed(".text", {
  strings: ["Frontend Developer", " UI/UX Designer"],
  typeSpeed: 90,
  backSpeed: 100,
  backDelay:1000,
  loop:true,
});

//-------------About Me Text Section Animation-------------------------


document.addEventListener('DOMContentLoaded', function() {
  const target = document.querySelector('.animate-about-me');
  
  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible'); // Remove the class when the element is out of view
          }
      });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

  observer.observe(target);
});


//---------------------------------------------------------My Skills section html--------------------------------------------------------


document.addEventListener("DOMContentLoaded", function() {
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(bar => {
      bar.style.width = '0';
      setTimeout(() => {
          bar.style.width = bar.textContent;
      }, 500);
  });
});

//----------------------------------------------------------------My Skills text animation----------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const target = document.querySelector('.animate-skills');
  
  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible'); // Remove the class when the element is out of view
          }
      });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

  observer.observe(target);
});

//-----------------------------------------------My Skills progress bar Animation-------------------------------------------------------------


window.addEventListener('scroll', function() {
  var skillsSection = document.querySelector('.skills-section');
  var progressBars = document.querySelectorAll('.progress-bar');
  var sectionPosition = skillsSection.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
      progressBars.forEach(function(bar) {
          bar.style.width = bar.textContent;
      });
  } else {
      progressBars.forEach(function(bar) {
          bar.style.width = '0';
      });
  }
});



//--------------------------------------------------My Projects Text Animation---------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('.animate-project');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Remove the class when the element is out of view
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible
  
    observer.observe(target);
  });


//-------------------------------------------------Contact Me Text Animation------------------------------------


document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('.animate-contact');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Remove the class when the element is out of view
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible
  
    observer.observe(target);
  });







