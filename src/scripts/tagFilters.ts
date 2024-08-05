const tagButtons = document.querySelectorAll("button.tag");
const posts = document.querySelectorAll(".post");
const selectedTags = new Set();

tagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tag = button.textContent?.trim();
    // toggle selected tag
    if (selectedTags.has(tag)) {
      selectedTags.delete(tag);
      button.classList.remove("selected");
    } else {
      selectedTags.add(tag);
      button.classList.add("selected");
    }

    // filter posts based on selected tags
    posts.forEach((post) => {
      const postTags = post.querySelectorAll("p.tag");
      const postTagsList: string[] = [];

      postTags.forEach((postTag) =>
        postTagsList.push(postTag.textContent?.trim() ?? "")
      );

      const shouldShow = postTagsList.some((postTag) => {
        return selectedTags.has(postTag);
      });

      if (selectedTags.size === 0 || shouldShow) {
        post.classList.remove("hidden");
      } else {
        post.classList.add("hidden");
      }
    });
  });
});
