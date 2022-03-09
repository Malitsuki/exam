function getArray() {

    let array1 = []
    let array2 = []

    for (i=100; i>=5; i-=5) {
        array1.push(i)
        
        if (i%3 === 0) {  
            array2.push(i)
        }  
        array2.sort()
                
    }
    alert(array1)
    alert(array2)

}
    