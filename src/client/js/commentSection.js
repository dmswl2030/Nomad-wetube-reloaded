const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const deleteBtn = document.querySelectorAll(".video__comment-delete");

const addComment = (text, id, owner) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const commentArea = document.createElement("div");
  commentArea.className = "video__comment-area";

  //ownerImg추가
  const ownerImg = document.createElement("div");
  ownerImg.className = "video__comment__owner-img";
  const img = document.createElement("img");
  if (owner.avatarUrl.substring(0, 4) === "http") {
    img.src = owner.avatarUrl;
  } else {
    img.src = "/" + owner.avatarUrl;
  }

  //info div 추가
  const info = document.createElement("div");
  info.className = "video__comment-info";
  //ownerName 추가
  const ownerName = document.createElement("a");
  ownerName.href = `/users/${owner._id}`;
  ownerName.className = "video__comment__owner-name";
  const ownerNameSpan = document.createElement("span");
  ownerNameSpan.innerText = `${owner.name}`;

  //text 추가
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  //remove 추가
  const remove = document.createElement("span");
  remove.className = "video__comment-delete";
  remove.innerText = "삭제";
  remove.dataset.id = id;
  remove.addEventListener("click", handleDelete);

  newComment.appendChild(commentArea);
  commentArea.appendChild(ownerImg);
  commentArea.appendChild(info);

  ownerImg.appendChild(img);
  info.appendChild(ownerName);
  ownerName.appendChild(ownerNameSpan);
  info.appendChild(span);
  newComment.appendChild(remove);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text.trim() === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId, owner } = await response.json();
    addComment(text, newCommentId, owner);
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

const handleDelete = async (event) => {
  const parent = event.target.closest(".video__comment");
  console.log(parent);
  const commentId = parent.dataset.id;
  await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
  parent.remove();
};

deleteBtn.forEach((elm) => elm.addEventListener("click", handleDelete));
