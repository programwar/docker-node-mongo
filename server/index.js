const express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose'),
    cors            = require('cors');

// Connection to DB
mongoose.connect('mongodb://mongo:27017/tvshows', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
const models     = require('./models/tvshow')(app, mongoose);
const TVShowCtrl = require('./controllers/tvshows');

// Example Route
const router = express.Router();
router.get('/', function(req, res) {
  res.send("Please connect to /api/tvshows REST API");
});
app.use(router);

// API routes
const tvshows = express.Router();

tvshows.route('/tvshows')
  .get(TVShowCtrl.findAllTVShows)
  .post(TVShowCtrl.addTVShow);

tvshows.route('/tvshows/:id')
  .get(TVShowCtrl.findById)
  .put(TVShowCtrl.updateTVShow)
  .delete(TVShowCtrl.deleteTVShow);

app.use('/api', tvshows);
app.use(cors());

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});