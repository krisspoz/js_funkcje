function getTriangleArea(a, h) {

	if (a <= 0){
		alert('Nieprawidłowe dane');
    	console.log('Nieprawidłowe dane');
	}	else if (h <= 0) {
		alert('Nieprawidłowe dane');
    	console.log('Nieprawidłowe dane');
	}

	return (a*h/2);
}

console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 15);
console.log(triangle1Area);
alert('Pole trójkąta wynosi: ' + triangle1Area);

var triangle1Area = getTriangleArea(0, 8);
console.log(triangle1Area);
alert('Pole trójkąta wynosi: ' + triangle1Area);

var triangle1Area = getTriangleArea(5, 7);
console.log(triangle1Area);
alert('Pole trójkąta wynosi: ' + triangle1Area);

//Piotr, jak sprawić aby nie był wyświetlany wynik pola trójkąta, który ma parametr 0 bądź ujemny? Aktualnie dla linii 20 pokazuje wynik 0 
