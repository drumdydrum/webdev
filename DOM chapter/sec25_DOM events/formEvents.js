

const tweetForm = document.querySelector("#tweetForm");
tweetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // const usernameInput = tweetForm.elements.username;
    const usernameInput = document.querySelector("#tweetForm [name='username']")
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = "";
    tweetInput.value = "";
});

const tweetContainer = document.querySelector("#tweets");
const addTweet = (username, tweet) => {
    const newTweet = document.createElement("li");
    newTweet.innerText = `${username} - ${tweet}`;
    tweetContainer.append(newTweet);
}