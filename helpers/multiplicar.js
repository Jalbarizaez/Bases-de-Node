const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5 , listar, limite) => {
    try {
        let salida = '';
        let consola = '';
        for (let index = 1; index <= limite; index++) {
            consola += (`${ base } ${ 'x'.green } ${ index } = ${ base*index }\n`);
            salida += (`${ base } x ${ index } = ${ base*index }\n`);
        }
        
        if(listar){
            console.log('========================'.green);
            console.log('    Tabla del: '.green, colors.blue(base) );
            console.log('========================'.green);
            console.log(consola)
        }
        
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida,);
    
        return(`tabla-${ base }.txt`);
        
    } catch (err) {
        throw error;
    }

}

module.exports = {
    crearArchivo 
}