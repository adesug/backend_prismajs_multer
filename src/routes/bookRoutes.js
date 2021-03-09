const bookRoutes = require ('express').Router()

const bookControllers = require ('../controllers/bookController');

const uploadMiddleware= require('../helpers/uploadMIddleware');

bookRoutes.get('/', bookControllers.getAllBooks);
bookRoutes.get('/pagination', bookControllers.paginationBooks);

bookRoutes.post('/', uploadMiddleware, bookControllers.postBook);

module.exports = bookRoutes;