let tags = []; // 
let parse = () => {
  const tagInput = document.getElementById("placetags");
  const tagsContainer = document.getElementById("Post-tagsInput");
  const inputValue = tagInput.value.trim();
  const noCommaValue = inputValue.replace(/,/g, "");
  if (inputValue.slice(-1) === "," && noCommaValue.length > 0) {
    const newTag = compile_tag(noCommaValue);
    tags.push(newTag); // 
    tagsContainer.appendChild(newTag);
    tagInput.value = "";
}
};

let tagTyped = []; 
let compile_tag =(tag_content) =>{
	let tag = document.createElement("h5");
	let text = document.createElement("span");
	text.setAttribute("class", "badge badge-success");
	text.innerHTML = '#'+tag_content;
	let remove = document.createElement("i");
	remove.setAttribute("class", "fa fa-remove");
	remove.setAttribute("id", "remove");
	remove.onclick = function() {this.parentNode.remove();};
	
	tag.appendChild(remove);
	tag.appendChild(text);
    console.log(tag_content)
    tagTyped.push(tag_content)
    console.log(tagTyped)
	return tag;
}