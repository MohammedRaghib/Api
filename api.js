let api = ['https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/comments/1',
    'https://jsonplaceholder.typicode.com/albums/1'
]

fetch(api[0])
.then(response => response.json())
.then(data => {
    console.log('Api 1: ' + data.title)
});

fetch(api[1])
.then(response => response.json())
.then(data => {
    console.log('Api 2: ' + data.body)
});

fetch(api[2])
.then(response => response.json())
.then(data => {
    console.log('Api 3: ' + data.title)
});