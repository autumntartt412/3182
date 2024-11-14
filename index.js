const express = require("express");
const app = express();

const pug = require('pug'); // pug template engine
const fs = require('fs'); // fs module for file reading
const path = require('path'); // path module for file path handling
const port = 3000;

// Set up the Pug template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // specify the views folder

// Middlewares
app.use(express.urlencoded({ extended: false })); // for form data parsing
app.use(express.json()); // for JSON requests
app.use(express.static(path.join(__dirname, 'public'))); // serve static files from the 'public' folder

const fanNames = [
  "Autumn",
  "Tawshana",
  "Coach Tomlin"
];

const imgUrl = 'https://wallpapers.com/images/featured/steelers-pictures-9xdrxgihxqa2vamb.jpg';

// Routes
app.get('/', (req, res) => {
  res.render('homepage', {
    fanNames
  });
});

app.post('/fanNames', (req, res) => {
  if (req.body.content) {
    fanNames.push(req.body.content); // add the new fan name to the list
  }
  res.redirect('/'); // redirect back to the homepage
});

// For image download (note: you can change the URL to your local path if needed)
app.get('/download', (req, res) => {
  const imagePath = path.join(__dirname, 'public', 'img', 'steelers-gloves.jpg'); // change to actual path
  res.download(imagePath, 'steelers-gloves.jpg'); // send the image file to the client
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});





// const express = require("express");
// const app = express();

// const pug = require('pug'); // pug  template engine
// const fs = require('fs'); // fs template engine 

// const path = require('path');
// const port = 3000;


// // define the template engine
//   app.engine("pug", (filePath, options, callback)) => {
//   fs.readFile(filePath, (err, content) => {
//     if (err) return callback(err);
//   }); 

//   app.set('view engine', 'pug');
//   app.set('views', __dirname + '/views'); 

//   app.use(express.urlencoded { {extended: false} });
// // serve static files from the styles directory
//   app.use(express.static("public"));
//   app.use(express.static("./styles"));
//   app.use(express.json());

// }); 
  
//   const fanNames = [
//     "Autumn",
//     "Tawshana",
//     "Coach Tomlin"
//   ];
  

  
  
// const imgUrl = 'public/img/C:\Users\tseh\Pictures\steelers-gloves.jpg;'
   const imgUrl = 'public/img/https:/wallpapers.com/images/featured/steelers-pictures-9xdrxgihxqa2vamb.jpg;'
  
  

   
  app.get('/home', (req, res) => {
    res.render('homepage', {
        fanNames
    });
  });
  
  app.get('/', (req, res) => {
    res.render('homepage', {
        fanNames
    });
  });

  app.post('/fanNames', (req, res) => {
    fanNames.push(req.body.content)
    res.redirect('/', {
        
    });
 
    app.get('/download', (req, res) => {
      res.download('./public/img/public/img/https:/wallpapers.com/images/featured/steelers-pictures-9xdrxgihxqa2vamb.jpg', {
          
      });


      app.listen(port, () => {
        console.log(`Server listening on port: ${port}.`);
      });
      
 





  // Here, we take the content of the template file,
    // convert it to a string, and replace sections of
    // it with the values being passed to the engine.
    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replace("#content#", `${options.content}`);
    return callback(null, rendered);
  });
});










// Alternative: res.render():
// Simpler Rendering.








// Compile the source code
// const compiledFunction = pug.compileFile('template.pug');

// Render a set of data
// console.log(compiledFunction({
//   name: 'Steelers'
// }));
// "<p>Steelers Pug source code!</p>"

// Render another set of data
// console.log(compiledFunction({
//   name: 'Anthym'
// }));
// "<p>Anthym Pug source code!</p>"



// app.set("views", "./views"); // specify the views directory
// app.set("view engine", "pug"); // register the template engine

app.get("/steelers", (req, res) => {
  const options = {
    title: "Steelers Anthym",
    content:

"Hol' up, we dem boyz \
Hol' up, we dem boyz \
Hol' up, hol' up, hol' up, we makin' noise, hol' up \
Hol' up, hol' up, hol' up hol' up \
Hol' up, we dem boyz \
Hol' up, we dem boyz \
Hol' up, hol' up, hol' up, we makin' noise, hol' up \
Hol' up, hol' up, hol' up hol' up.",
  
};


  res.render("index", options);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});

// app.get('/', (req, res) => {
//   const compiledFunction = pug.compileFile('./views/index.pug');
//   const html = compiledFunction({
//       title: 'My Website',
//       message: 'Hello from Pug!'
//   });

//   res.send(html);
// });


// Alternative: res.render():
// Simpler Rendering.


// app.get('/home', (req, res) => {
//   res.render('homepage', {
//       title: 'My Website',
//       message: 'Hello from Pug!'
//   });
// });





