const { request } = require("express");

module.exports={ 
    inicio:(req, res)=>{
        req.getConnection((error, conn) => {
			if (error) return res.send(error);

			const sql = "SELECT * FROM noticia";
			conn.query(sql, (error, results) => {
				if (error) return res.send(error);

				res.render("index", { results });
			});
		});
    },
    formNuevaNoticia:(req,res)=>{
        res.render("nueva")
    },
    nuevaNoticia: (req, res)=>{
        console.log(req.body)
        req.getConnection((error, conn) => {
			if (error) return res.send(error);

			const sql = "INSERT INTO noticia SET ?";
			conn.query(sql, [req.body],  (error, results) => {
				if (error) return res.send(error);

				res.redirect('/')
			});
		});
       
    }, 
    formEditarNoticia: (req, res)=>{
        const {id}=req.params  
        
        req.getConnection((error, conn) => {
			if (error) return res.send(error);

			const sql = "SELECT * FROM noticia WHERE id=?";
			conn.query(sql, [id], (error, results) => {
				if (error) return res.send(error);
                const resultado = results[0]
				res.render("editar", { resultado });
			});
		});

    }, 
    editarNoticia:(req,res) => {
        const {id}=req.params  
        
        
        req.getConnection((error, conn) => {
			if (error) return res.send(error);

			const sql = "UPDATE noticia SET ? WHERE id = ?";
			conn.query(sql, [req.body, id], (error, results) => {
				if (error) return res.send(error);
                res.redirect('/')
			});
		});

    },

    eliminarNoticia: (req, res) => {
        const {id}=req.params  
        
        
        req.getConnection((error, conn) => {
			if (error) return res.send(error);

			const sql = "DELETE FROM noticia WHERE id = ?";
			conn.query(sql, [id], (error, results) => {
				if (error) return res.send(error);
                res.redirect('/')
			});
		});
    }



}



