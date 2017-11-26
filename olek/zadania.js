//zadanie 1
//-----------------------------------------
function mojafunkcja1(tekst){
  const tablica = new Array()
  
  for(i = 0; i < 50; i++){
    tablica.push(tekst)
  }
  
  console.log(tablica)
  return tablica
    
}

mojafunkcja1("Love")
//-----------------------------------------

//zadanie 2 
//-----------------------------------------
function mojafunkcja2(tekst){
  const tablica = new Array(0)
  
  for(i = 0; i < 10; i++){
    tablica.push(tekst)
  }
  
  console.log(tablica)
  return tablica
    
}

mojafunkcja2("Lonely")
//-----------------------------------------

//zadanie 3 
//-----------------------------------------
function mojafunkcja3(dlugosc){
  var tablica = new Array(dlugosc)
  
  for(i = dlugosc; i >= 0; i--){
    console.log(i)
  }
  console.log(tablica)
  return tablica
    
}

mojafunkcja3(10)
//-----------------------------------------
