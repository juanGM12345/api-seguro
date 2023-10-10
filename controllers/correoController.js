const { response, request } = require('express');
const nodemailer = require('nodemailer');

this.sendEmail = (req, resp) => {
    var body = req.body;
    //console.log(body);
    let config = nodemailer.createTransport({
        service:'smtp.gmail.com',
        port: 587, // Hardcode It
        auth:{
            user:'correo',
            pass: 'contraseña'
        },
    });

    let opciones= {
        from: 'SAFE-Life news',
        subject: 'Nuevo Prospecto',
        to: body.correo,
        html:
        `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                    <td bgcolor="" width="600px">
                        <h1 style="color: #fff; text-align:center">Nuevo Prospecto</h1>
                        <p  style="color: #fff; text-align:center">
                            <span style="color: #e84393">${body.nombre}</span> 
                        </p>
                        <p  style="color: #fff; text-align:center">
                            <span style="color: #e84393">${body.telefono}</span> 
                        </p>
                        <p  style="color: #fff; text-align:center">
                            <span style="color: #e84393">${body.correo}</span> 
                        </p>
                        <p  style="color: #fff; text-align:center">
                            <span style="color: #e84393">${body.mensaje}</span> 
                        </p>
                    </td>
                </tr>
                <tr bgcolor="#fff">
                    <td style="text-align:center">
                        <p style="color: #000">SAFE-LIFE</p>
                    </td>
                </tr>
            </table>
        `
        
    }

    config.sendMail(opciones, function (error, result){
        if (error) return resp.json({ok:false,msg:error});
        return resp.json({ok:true,msg:result});
    })
}
module.exports=this