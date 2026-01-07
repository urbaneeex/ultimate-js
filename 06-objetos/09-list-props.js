const punto = {
    x: 10,
    y: 15,
    dibujar(){
        console.log('Dibujando');
    },
};

// delete punto.dibujar;
if("dibujar" in punto){
    punto.dibujar();
};

// Se usaba antes Object.keys para visualizar las propiedades de un objeto
for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
};

for (let entry of Object.entries(punto)){
    console.log(entry);
};

// Ahora esta es la forma más sencilla de recorrer las propiedades de un objeto
for (let llave in punto){
    console.log(llave, punto[llave]);
};