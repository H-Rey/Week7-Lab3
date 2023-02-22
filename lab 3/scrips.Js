function validateForm() {
    // Get the values of the username, email, and password input fields
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Validate the username input field
    if (username === "") {
      console.log("Form submission failed: Please enter a username");
      return false;
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      console.log("Form submission failed: Username must contain only letters and numbers");
      return false;
    }
  
    // Validate the email input field
    if (email === "") {
      console.log("Form submission failed: Please enter an email address");
      return false;
    } else if (email.indexOf("@") === -1) {
      console.log("Form submission failed: Email must contain an @ character");
      return false;
    }
  
    // Validate the password input field
    if (password === "") {
      console.log("Form submission failed: Please enter a password");
      return false;
    } else if (password.length < 8) {
      console.log("Form submission failed: Password must be at least 8 characters long");
      return false;
    }
  
    // All input fields are valid, so console.log a message to the user saying "Form submitted successfully"
    console.log("Form submitted successfully");
    return true;
  }
  




  // Declare an array of products
  const products = ["Product A", "Product B", "Product C", "Product D", "Product E", "Product F", "Product G", "Product H", "Product I", "Product J"];

  // Get the search input field and the product list from the HTML page
  const searchInput = document.getElementById("search-input");
  const productList = document.getElementById("product-list");

  // Define a function to update the product list based on the search query
  function updateProductList() {
    // Get the search query from the input field
    const query = searchInput.value;
    // Use the searchProducts function to filter the list of products based on the query
    const matchingProducts = searchProducts(query);
    // Clear the existing product list
    productList.innerHTML = "";
    // Use a loop to add each matching product to the list as an <li> element
    for (let i = 0; i < matchingProducts.length; i++) {
      const product = matchingProducts[i];
      const listItem = document.createElement("li");
      listItem.textContent = product;
      productList.appendChild(listItem);
    }
  }
  console.log(searchInput)
  // Add an event listener to the search input field to call the updateProductList function whenever the user types in the field
  searchInput.addEventListener("change", updateProductList);

  // Define a function to search for products that match the query
  function searchProducts(query) {
    // Use the filter method to create a new array of products that match the query
    const matchingProducts = products.filter(function(product) {
      // Convert both the product name and the query to lowercase for case-insensitive comparison
      const productName = product.toLowerCase();
      const queryLowercase = query.toLowerCase();
      // Check if the product name contains the query
      return productName.includes(queryLowercase);
    });
    // Return the array of matching products
    return matchingProducts;
  }

  // Call the updateProductList function once at the beginning to display all products by default
  updateProductList();