//JAKE WORKSPACE HERE 

//DAN WORKSPACE HERE  
document.addEventListener("DOMContentLoaded", () => {
    /**
     * Hides all views not specified and displays the current view 
     * @param {string} viewId the view to be displayed
     */
    function navigate(viewId) {
      // Hide all views
      document.querySelectorAll(".view").forEach((view) => {
        view.style.display = "none";
      });
      // Show the requested view
      document.getElementById(viewId).style.display = "block";
    }
  
    document.querySelectorAll(".home").forEach((e) => e.addEventListener("click", () => navigate("homeView")));
    //sets up all views
    document.getElementById("weatherBox").addEventListener("click", () => navigate("weatherView"));
    document.getElementById("newsBox").addEventListener("click", () => navigate("newsView"));
    document.getElementById("stockBox").addEventListener("click", () => navigate("stockView"));
    document.getElementById("spotifyBox").addEventListener("click", () => navigate("spotifyView"));
   
    // Initialize with the home view
    navigate("homeView");
 
    const category = document.getElementById(categories);    
    document.getElementById("search").addEventListener("click", () => {
        let str = category.value;
        //use APIs to fetch articles based on the category
        //append the string to the end of the appropriate URL. 
    });
});
//LINDSEY WORKSPACE HERE 





//ROBERT WORKSPACE HERE
