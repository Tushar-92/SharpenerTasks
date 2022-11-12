
const posts = [
    {title: 'Post One' , body: 'This is post one' , createdAt: new Date().getTime()  },
    {title: 'Post Two' , body: 'This is post two' , createdAt: new Date().getTime() },
];

// let intervalId = 0;

function getPosts() {
    // clearInterval(intervalId);
    // intervalId = setInterval(() => {
        setTimeout(() => {
        let output="";
        posts.forEach((post) => {
            output += `<li> ${post.title} created ${ (new Date().getTime() - post.createdAt) / 1000 }  seconds ago </li>`;
        });
        document.body.innerHTML = output;
    },1000)
};

function createPost(newPost) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({...newPost, createdAt: new Date().getTime()});

            const error = false;

            if(!error) {
                resolve();
            }
            else {
                reject('Error: Something went wrong');
            }
            
        },2000);

    });

};

function deletePost(posts) {
    return new Promise ((resolve , reject) => {
        setTimeout(() => {

            if(posts.length != 0) {
                posts.pop();
                resolve();
            }
            else{
                reject();
            }
            
        } , 0)
    })

};


createPost({title: 'Post Three' , body: 'This is post three'}).then(getPosts);
createPost({title: 'Post Four' , body: 'This is post four'}).then(getPosts);

deletePost(posts).catch(() => {
    console.log('Array is empty now')
})

deletePost(posts).catch(() => {
    console.log('Array is empty now')
})

deletePost(posts).catch(() => {
    console.log('Array is empty now')
})

