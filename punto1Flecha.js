let calculasDistancia = (x1,y1,x2,y2)=>Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))

let distanciaCalcular=calculasDistancia(1,1,3,3)
console.log(`la distancia  es de ${distanciaCalcular} UA`)