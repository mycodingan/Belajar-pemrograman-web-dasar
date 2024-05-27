function jumlah (a,b){
    return a*b;
}
console.log(jumlah(1,2));

function perikasaNilai(nilai){
    if (nilai < 0){
        return "nilai tidak boleh nigative"
    }
    return "nilai diterima";
}

console.log(perikasaNilai(-5))
console.log(perikasaNilai(10))