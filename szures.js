export function szurNevSzerint(OBJEKTUMLISTA, szuresfeltetele){
const eredmenyLista = OBJEKTUMLISTA.filter(function(kutya) {
    console.log(kutya);

    return kutya.név.toUpperCase().includes(szuresfeltetele.toUpperCase());
  });
  console.log(eredmenyLista);
return eredmenyLista
}

export function szurKorSzerint(OBJEKTUMLISTA,szuresfeltetele){
    const eredmenyLista = OBJEKTUMLISTA.filter(function(kutya){
        console.log(kutya);
    return eval(kutya.kor + szuresfeltetele);
    
});


return eredmenyLista;
}