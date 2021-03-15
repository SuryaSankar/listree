import '../styles/main.scss';

function listree() {
  const subMenuHeadingClass = "listree-submenu-heading";
  const expandedClass = "expanded";
  const collapsedClass = "collapsed";
  const subMenuHeadings = document.getElementsByClassName(subMenuHeadingClass);
  Array.from(subMenuHeadings).forEach(function(subMenuHeading){
    subMenuHeading.classList.add(collapsedClass);
    subMenuHeading.nextElementSibling.style.display = "none";
    subMenuHeading.addEventListener('click', function(event){
      event.preventDefault();
      const subMenuList = event.target.nextElementSibling;
      if(subMenuList.style.display=="none"){
        subMenuHeading.classList.remove(collapsedClass);
        subMenuHeading.classList.add(expandedClass);
        subMenuList.style.display = "block";
      }
      else {
        subMenuHeading.classList.remove(expandedClass);
        subMenuHeading.classList.add(collapsedClass);
        subMenuList.style.display = "none";
      }
      event.stopPropagation();
    });
  });
}

export default listree;
