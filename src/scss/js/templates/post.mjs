export function postTemplateA(postData) {
  return `<div class="post" id=${postData.id}>${postData.title}</div>`;
}

export function postTemplateB(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerHTML = postData.title;
  //   const button = document.createElement("button");
  //   post.append(button)
  return post;
}

//  button.addEventListerner("click", ()=> console.log(poatdata))

export function renderPostTemplate(postData, parent) {
  //   parent.innerHtml = postTemplate(postData);
  parent.append(postTemplateB(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateB));
}
