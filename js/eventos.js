const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");

setTimeout(function(){
    subtitle.textContent = "PLATOS DE COMIDA";
    setTimeout(function(){
        subtitle2.textContent = "Y su sabor es";
    }, 1000);
}, 1000);

const platos = [
    {
        "nombre": "Ceviche",
        "descripcion": "Delicioso plato peruano hecho a base de pescado marinado en limón y sazonado con ají y especias.",
        "esRico": true
    },
    {
        "nombre": "Lomo Saltado",
        "descripcion": "Plato emblemático de la gastronomía peruana, consiste en pescado fresco marinado en limón con cebolla roja, ají limo y cilantro. ",
        "esRico": true
    },
    {
        "nombre": "Aji de Gallina",
        "descripcion": "Plato hecho con pollo deshilachado en una salsa cremosa de ají amarillo, pan remojado en leche, nueces y queso. Se sirve con arroz y papas cocidas. Es rico, suave y ligeramente picante.",
        "esRico": false
    },
    {
        "nombre": "Anticuchos",
        "descripcion": "Brochetas de corazón de res marinado en una mezcla de ají panca, ajo, comino y vinagre, asadas a la parrilla.",
        "esRico": true
    },
    {
        "nombre": "Tacu Tacu",
        "descripcion": "Plato hecho con una mezcla de arroz y frijoles cocidos juntos, formando una especie de tortilla, que se fríe hasta que esté crujiente por fuera y suave por dentro.",
        "esRico": true
    },
    {
        "nombre": "Pollo a la Brasa",
        "descripcion": "Pollo marinado en una mezcla de especias y hierbas aromáticas, asado a la parrilla hasta que la piel esté crujiente y dorada. Se sirve con papas fritas, ensalada y salsa de ají.",
        "esRico": true
    }
];

const dishElement = document.getElementById("platos");
let contenido = "";
platos.forEach(function(plato) {    
    let claseicon = plato.esRico ? "rico" : "no-rico";
    let delicioso = plato.esRico ? "¡Delicioso!" : "No tan delicioso";
    const template = `
        <div class="plato">
            <div class="icon icon-${claseicon}">${delicioso}</div>
            <div class="data">
                <h4>${plato.nombre}</h4>
                <p>${plato.descripcion}</p>
            </div>
        </div>
    `;
    contenido += template;
});

dishElement.innerHTML = contenido;
