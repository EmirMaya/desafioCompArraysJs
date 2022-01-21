class Auto {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    };
};

const auto1 = new Auto(`Renault`, `Clio`, 1000000);
const auto2 = new Auto(`Renault`, `Megane`, 3000000);
const auto3 = new Auto(`Fiat`, `Siena`, 2200000);
const auto4 = new Auto(`Ford`, `Focus`, 4200500);
const auto5 = new Auto(`Chevrolet`, `Camaro`, 12000000);

const autos = [auto2, auto5, auto3, auto4, auto1];

for (const auto of autos) {
    console.log(auto.marca);
    console.log(auto.modelo);
    console.log(auto.precio);
};

//ordenamos por precio de menor a mayor

autos.sort((o1, o2) => {
    if (o1.precio < o2.precio) {
        return -1;
    } else if (o1.marca > o2.marca) {
        return 1;
    } else {
        return 0;
    };
});

console.log(`---------------------ORDENADOS POR PRECIO--------------------`)
for (const auto of autos) {
    console.log(auto.marca);
    console.log(auto.modelo);
    console.log(auto.precio);
};