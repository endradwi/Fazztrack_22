const printSegitiga = "enam"

if (typeof printSegitiga === "number"){
for ( let i = 5; i > printSegitiga ; i--) {
    let row = "";
    for ( j = 1; j <= i; j++) {
         row += j + " "
    }
    console.log(row)
}
}else {
    console.log("Data harus number")
}
