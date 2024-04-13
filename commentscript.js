document.addEventListener("DOMContentLoaded", function() {
    const starRating = document.getElementById("star-rating");
    const stars = starRating.querySelectorAll(".star");
    const commentForm = document.getElementById("comment-form");
    const customerNameInput = document.getElementById("customer-name");
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("comment-list");
  
    let selectedRating = 0;
  
    stars.forEach((star, index) => {
      star.addEventListener("mouseenter", function() {
        fillStars(index);
      });
  
      star.addEventListener("mouseleave", function() {
        fillStars(selectedRating - 1);
      });
  
      star.addEventListener("click", function() {
        selectedRating = index + 1;
        fillStars(selectedRating - 1);
      });
    });
  
    function fillStars(index) {
      stars.forEach((star, i) => {
        if (i <= index) {
          star.classList.add("filled");
        } else {
          star.classList.remove("filled");
        }
      });
    }
  
    commentForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const customerName = customerNameInput.value.trim();
      const commentText = commentInput.value.trim();
  
      if (customerName === "" || commentText === "" || selectedRating === 0) return;
      
      addComment(customerName, commentText, selectedRating);
      customerNameInput.value = "";
      commentInput.value = "";
      selectedRating = 0;
      fillStars(-1); // Reset stars to empty
    });
  
    function addComment(customerName, commentText, rating) {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");
      const commentPara = document.createElement("p");
      commentPara.innerHTML = `<strong>${customerName}</strong> - ${commentText}<br><em>Rating: ${rating}/5</em>`;
      commentDiv.appendChild(commentPara);
      commentList.appendChild(commentDiv);
    }
  });
  
  