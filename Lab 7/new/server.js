const http = require("http"),
  url = require("url"),
  fs = require("fs"),
  io = require("socket.io");

const mongoose = require('mongoose');
const Questions = require('./model/questions');
const User = require('./model/user');
const Answers = require('./model/answers');

const connectionString = "mongodb://localhost/VoteMateDB";

mongoose
.connect(connectionString, { useNewUrlParser: true } )
.then( () => { 
    console.log( "Mongoose connected successfully " );
   
},
error => { 
    console.log( "Mongoose could not connected to database: " + error); 
});

  const server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case "/":
      fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) return send404(res);
        res.writeHead(200, {
          "Content-Type": path == "json.js" ? "text/javascript" : "text/html"
        });
        res.write(data, "utf8");
        res.end();
      });
      break;

    default:
      send404(res);
  }
});
const send404 = function(res) {
  res.writeHead(404);
  res.write("404");
  res.end();
};

const PORT = 8080;
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

// socket.io, I choose you
const ioServer = io.listen(server);

// socket.io setup and manager
ioServer.on("connection", function(socket) {
  // now we have a client object!
  console.log("Connection accepted.");

  // event listeners
  socket.on("message", function(message) {
    console.log(`Recieved message: ${message} - from client`);
    socket.emit("msgreceived");
  });

  socket.on("disconnect", function() {
    console.log("Disconnected...");
  });

  socket.on("get-restaurants", () => {
    console.log("server - get-restarants called");
    
    Restaurant.find({city: 'Queens', cuisine: 'Delicatessen'}, (err, documents)=>{
      if (err) console.log("Error occurred on Restaurant.find():"+err);  
      else{
        console.log(`Restaurant.find() returned documents: ${documents}`);
        const data = documents.map ((x) => {
          var restaurant = {name: x.name, cuisine: x.cuisine};
          return restaurant;
          });
        socket.emit("restaurants-data", JSON.stringify(data));
      }
     
    });
    
  });
  
  socket.on("get-orders", () => {
    User.find({},(err,datas)=>{
      console.log("Orders in database: "+datas);
      const data = datas.map((x) => {
        var order = {ID: x.userID, password: x.password};
        return order;
      });
      socket.emit("orders-data",JSON.stringify(data));
    });
    
  });
  
  socket.on("add-order", () => {
    const order = new User({
      userID: 'Pradeep',
      password: 'Pradeep'
    });
    order.save().then(()=>{
      const orders = { userID: order.userID, password: order.password};
      console.log("added order"+order);
      socket.emit("order-data-added",JSON.stringify(orders));  
    });
  });
});