const Posts_BASE_URL = "https://post-9851b-default-rtdb.firebaseio.com/posts";

const createPost = async (PostObject) => {
  let response = await fetch(`${Posts_BASE_URL}/.json`, {
    method: "POST",
    body: JSON.stringify(PostObject),
  });
  let data = await response.json();
  return data;
};

const fetchPostByKey = async (PostKey) => {
  let response = await fetch(`${Posts_BASE_URL}/${PostKey}/.json`);
  let data = await response.json();
  return data;
};

const fetchAllPosts = async () => {
  let response = await fetch(`${Posts_BASE_URL}/.json`);
  let data = await response.json();
  let keys = Object.keys(data);
  let PostsArray = keys.map((key) => ({ ...data[key], key }));
  return PostsArray;
};

export { createPost, fetchPostByKey, fetchAllPosts };
