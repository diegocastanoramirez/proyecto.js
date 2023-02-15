function calculasDistancia(x1,y1,x2,y2){
    //let restax=x2-x1
    //let restay=y2-y1
    //let potenciax=Math.pow(x2-x1,2)
    //let potenciay=Math.pow(y2-y1,2)
    //let sumatoria=Math.pow(x2-x1,2)+Math.pow(y2-y1,2) 
    //let raizCuadrada=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))

}
let distanciaCalcular=calculasDistancia(1,1,3,3)
console.log(`la distancia es de ${distanciaCalcular} UA`)