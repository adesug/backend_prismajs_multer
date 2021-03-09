const { PrismaClient } = require ('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    getAllBooks : (req, res) => {
        prisma.books.findMany()
        .then((data) => {
            res.send ({
                msg : 'success get',
                status : 200,
                data : data

            })
        })
        .catch((error) => {
            res.send ({
                msg : "error",
                status: 500,
                error,

            });
        });
    },

    paginationBooks : (req,res) => {
        prisma.books.findMany(
            skip = parseInt(req.body.skip),
            take = 5
        )
        .then((data) => {
            res.send ({
                msg : 'success get',
                status : 200,
                data : data

            })
        })
        .catch((error) => {
            res.send ({
                msg : "error",
                status: 500,
                error,

            });
        });  
    },

    postBook : (req, res) => {
        const {body} = req;
        const newBody ={
            ...body,
            book_image:req.file.path
        }
        prisma.books.create({
            data: newBody
            //ganti new body
        })
        .then((data) => {
            res.status(200).send({
                msg: 'success post',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.send(500).send ({
                msg : "error",
                status: 500,
                error

            });
        });
    }
}
