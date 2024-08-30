const express = require('express');
const app = express();
const db = require('./models');
const bodyParser = require('body-parser');
const cors = require('cors');
app.options('*', cors());
app.use(cors());
const port = process.env.PORT || 3001; // Use environment variable or default to 3001
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
app.post('/test', (req, res) => {
  res.send('Test route is working');
});
db.sequelize.sync().then(() => {
  console.log('Tables created successfully.');
}).catch(error => {
  console.error('Error creating tables:', error);
});



app.use(bodyParser.json());


app.post('/checkout', async (req, res) => {
  try {
    console.log("Hello");
    const cartData = req.body;

    // Sequelize 
    const Order = db.orders;

    
    await db.sequelize.transaction(async (t) => {
      
      for (const item of cartData) {
        if (!item.price) {
          item.price=200;
    
        }
        await Order.create({
          book_id: item.id,
          customer_id: 1, 
          price: item.price,
          quantity: item.item,
        }, { transaction: t }
        );
      }
    });

    // Successfull Transaction
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ success: false, error: 'An error occurred during checkout.' });
  } finally {
    res.end(); 
  }
});


app.post('/sell', async (req, res) => {
  try {
      const bookData = req.body;

      // Sequelize
      const Book = db.books;

      await Book.create(bookData);

      // Successful creation
      res.status(200).json({ success: true });
  } catch (error) {
      console.error('Error during sell request:', error);
      res.status(500).json({ success: false, error: 'An error occurred during sell request.' });
  } finally {
      res.end();
  }
});
// ... existing code ...

app.post('/signup', async (req, res) => {
  try {
    const userData = req.body;

    // Sequelize
    const Customer = db.customers;

    await Customer.create(userData);

    // Successful creation
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ success: false, error: 'An error occurred during signup.' });
  } finally {
    res.end();
  }
});



app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
      const user = await db.customers.findOne({ where: { username } });
      console.log('Stored Password:', user.password);
      console.log('Entered Password:', password);
     

      if (user && user.password===password) {
          res.status(200).json({ success: true, user });
      } else {
          res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
  } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ success: false, error: 'An error occurred during login.' });
  }
});





app.use(express.json());

app.post('/signup', async (req, res) => {
  const userData = req.body;
  

  try {
      await db.customers.create(userData);
      res.status(200).json({ success: true });
  } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ success: false, error: 'An error occurred during signup.' });
  } finally {
      res.end();
  }
});

//fetch comments
app.get('/fcomments', async (req, res) => {
  try {
      const comments = await db.fiction.findAll();
      res.status(200).json({ comments });
  } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ error: 'An error occurred while fetching comments.' });
  }
});

// Route to handle comment submission
app.post('/fcomment', async (req, res) => {
  try {
      const { user_name, musings } = req.body;

      // Sequelize
      const Fiction = db.fiction;

      await Fiction.create({ user_name, musings });
      console.log('Comment submitted successfully');

      // Successful creation
      res.status(200).json({ success: true });
  } catch (error) {
      console.error('Error during comment submission:', error);
      res.status(500).json({ success: false, error: 'An error occurred during comment submission.' });
  } finally {
      res.end();
  }
});

//fetch comments
app.get('/nfcomments', async (req, res) => {
  try {
      const comments = await db.nonfictions.findAll();
      res.status(200).json({ comments });
  } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ error: 'An error occurred while fetching comments.' });
  }
});

// Route to handle comment submission
app.post('/nfcomment', async (req, res) => {
  try {
      const { user_name, musings } = req.body;

      // Sequelize
      const NonFictions = db.nonfictions;

      await NonFictions.create({ user_name, musings });
      console.log('Comment submitted successfully');

      // Successful creation
      res.status(200).json({ success: true });
  } catch (error) {
      console.error('Error during comment submission:', error);
      res.status(500).json({ success: false, error: 'An error occurred during comment submission.' });
  } finally {
      res.end();
  }
});

//fetch comments
app.get('/ecomments', async (req, res) => {
  try {
      const comments = await db.education.findAll();
      res.status(200).json({ comments });
  } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ error: 'An error occurred while fetching comments.' });
  }
});

// Route to handle comment submission
app.post('/ecomment', async (req, res) => {
  try {
      const { user_name, musings } = req.body;

      // Sequelize
      const Education = db.education;

      await Education.create({ user_name, musings });
      console.log('Comment submitted successfully');

      // Successful creation
      res.status(200).json({ success: true });
  } catch (error) {
      console.error('Error during comment submission:', error);
      res.status(500).json({ success: false, error: 'An error occurred during comment submission.' });
  } finally {
      res.end();
  }
});