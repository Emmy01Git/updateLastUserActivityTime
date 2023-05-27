const posts = [];

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lastActivityTime = new Date().toLocaleTimeString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject('ERROR: No posts available');
            }
        }, 1000);
    });
}

function getAllPostsAndUserActivity() {
    console.log('Posts:', posts);
    updateLastUserActivityTime()
        .then((lastActivityTime) => {
            console.log('Last Activity Time:', lastActivityTime);
            return deleteLastPost();
        })
        .then(() => {
            console.log('Posts after deletion:', posts);
        })
        .catch(console.log);
}

const post = { title: 'New Post', body: 'This is a new post' };

createPost(post)
    .then(updateLastUserActivityTime)
    .then(() => getAllPostsAndUserActivity())
    .catch(console.log);
