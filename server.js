const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const tileData = [
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
        name: 'Burger',
        price: 12.25,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        name: 'Tea',
        price: 10.55,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        name: 'Flower',
        price: 120,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
        name: 'Camera',
        price: 1000,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
        name: 'Cap',
        price: 100,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        name: 'Tea',
        price: 10,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
        name: 'Burger',
        price: 12,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        name: 'Tea',
        price: 10,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
        name: 'Burger',
        price: 12,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        name: 'Tea',
        price: 10,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        name: 'Flower',
        price: 120,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
        name: 'Camera',
        price: 1000,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
        name: 'Cap',
        price: 100,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        name: 'Tea',
        price: 10,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
        name: 'Burger',
        price: 12,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        name: 'Tea',
        price: 10,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
        name: 'Burger',
        price: 12,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        name: 'Tea',
        price: 10,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        name: 'Flower',
        price: 120,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
        name: 'Camera',
        price: 1000,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
        name: 'Cap',
        price: 100,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        name: 'Tea',
        price: 10,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
        name: 'Burger',
        price: 12,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        name: 'Tea',
        price: 10,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
        name: 'Burger',
        price: 12,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        name: 'Tea',
        price: 10,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        name: 'Flower',
        price: 120,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
        name: 'Camera',
        price: 1000,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
        name: 'Cap',
        price: 100,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        name: 'Tea',
        price: 10,
    },
    {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
        name: 'Burger',
        price: 12,
    }, {
        tax: 12, id: 1, img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        name: 'Tea',
        price: 10,
    }
]
app.get('/api/get', (req, res) => {
  res.send(tileData);
});
app.post('/api/post', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));