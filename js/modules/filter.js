let filterInput = document.getElementById("category-filter");

filterInput.addEventListener("keyup", (event) => {
  let query = event.target.value;

  let result = products.filter((product) =>
    product.category.toLowerCase().includes(query.toLowerCase())
  );
  console.log(result);