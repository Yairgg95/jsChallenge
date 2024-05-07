import { fetchPostByKey } from "./modules/postApi.js";
/*Para extraer parámetros de la url:*/
/*1: Guardamos la url en una variable*/
const url = window.location.href;
/*2: Creamos una instancia del objeto URLSearch params*/
const params = new URLSearchParams(new URL(url).search);
/*3: Extraemos el parámetro que deseamos*/
let PostKey = params.get("PostKey");
console.log(PostKey);
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const printPostData = async (PostKey) => {
  let PostData = await fetchPostByKey(PostKey);
  console.log(PostData);
  let {
    pTitle,
    pAuthor,
    pContent,
    pComentaries,
    pDate,
    pImg,
    pReacctions,
    pTags,
  } = PostData;

  document.getElementById("Post-picture").setAttribute("src", pImg);
  document.getElementById("Post-Title").innerText = pTitle;
  document.getElementById("Post-tagsInput").innerText = pTags;
  document.getElementById("Post-author").innerText = pAuthor;
  document.getElementById("Post-content").innerText = pContent;
  document.getElementById("Post-comentaries").innerText = pComentaries;
  document.getElementById("Post-reacctions").innerText = pReacctions;
  formattedDate = pDate
};
printPostData(PostKey);
