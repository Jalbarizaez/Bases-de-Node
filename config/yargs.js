const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .check((argv, options) => {
                    console.log('yargs',argv)
                    if(isNaN( argv.b )){
                        throw 'La base debe de ser un numero'
                    }
                    if(isNaN( argv.h )){
                        throw 'El rango debe de ser un numero'
                    }
                    return true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola' 
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Es el limite de la tabla de multiplicar'
                })
                .argv;

module.exports = argv;