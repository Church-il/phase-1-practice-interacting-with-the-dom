document.addEventListener('DOMContentLoaded', () => {
  let counter = document.getElementById('counter');
  let count = 0;
  let timer = setInterval(() => {
    counter.textContent = ++count;
  }, 1000);

  const pauseButton = document.getElementById('pause');
  let isPaused = false;

  pauseButton.addEventListener('click', () => {
    const allButtons = document.querySelectorAll('button');
    if (isPaused) {
      timer = setInterval(() => {
        counter.textContent = ++count;
      }, 1000);
      pauseButton.textContent = 'pause';
      allButtons.forEach(button => {
        if (button.id !== 'pause') button.disabled = false;
      });
    } else {
      clearInterval(timer);
      pauseButton.textContent = 'resume';
      allButtons.forEach(button => {
        if (button.id !== 'pause') button.disabled = true;
      });
    }
    isPaused = !isPaused;
  });

  document.getElementById('plus').addEventListener('click', () => {
    counter.textContent = ++count;
  });

  document.getElementById('minus').addEventListener('click', () => {
    counter.textContent = --count;
  });

  const likesList = document.querySelector('.likes');

  document.getElementById('heart').addEventListener('click', () => {
    let existingLike = document.getElementById(`like-${count}`);
    if (existingLike) {
      let likesCount = parseInt(existingLike.dataset.likes) + 1;
      existingLike.dataset.likes = likesCount;
      existingLike.textContent = `${count} has been liked ${likesCount} times`;
    } else {
      let newLike = document.createElement('li');
      newLike.id = `like-${count}`;
      newLike.dataset.likes = 1;
      newLike.textContent = `${count} has been liked 1 time`;
      likesList.appendChild(newLike);
    }
  });

  const commentForm = document.getElementById('comment-form');
  const commentList = document.getElementById('list');

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentInput = document.getElementById('comment-input');
    const newComment = document.createElement('p');
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = '';
  });
});
