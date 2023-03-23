import { SZAMLISTA, SZOVEGLISTA, OBJEKTUMLISTA } from "./adat.js";
import { rendezesObjektum, rendezesSzam, rendezesSzoveg, veletlenSorrend } from "./rendezes.js";
import { szurNevSzerint } from "./szures.js";

$(function () {
  console.log(SZOVEGLISTA);
rendezesSzoveg(SZOVEGLISTA); /**lista címét adja át */
  console.log(SZOVEGLISTA);
  console.log("***************");

  console.log(SZAMLISTA);
  rendezesSzoveg(SZAMLISTA);
  console.log(SZAMLISTA);  
  console.log("***************");
  
  console.log(SZAMLISTA);
  veletlenSorrend(SZAMLISTA);
  console.log(SZAMLISTA)
  console.log("***************");

  
  console.log(SZOVEGLISTA);
  (veletlenSorrend(SZOVEGLISTA));
  console.log(SZOVEGLISTA);
  console.log("***************");

  //KOrszerint növekvő sorrendbe
  console.log(OBJEKTUMLISTA);
  rendezesObjektum(OBJEKTUMLISTA, "kor");
  console.log(OBJEKTUMLISTA);

 
  rendezesObjektum(OBJEKTUMLISTA, "nev");
  console.log(OBJEKTUMLISTA);
  console.log("Szűrés után");
  let szuresfeltetele="d"
  const szurtLista=szurNevSzerint(OBJEKTUMLISTA, szuresfeltetele)
  console.log(szurtLista);

  szuresfeltetele="<5"
  const szurtLista2=szurNevSzerint(OBJEKTUMLISTA,szuresfeltetele);
  console.log(szurtLista2);


  /**A html kódban lévő input mezőben érték szerint szűrjünk */
  /**1. elérjük az input elemet
   * 2. 
   * 3. a szűrési érték helyére beírjuk az input elem value értékét
   * 4. Mikor kell ennek megtörténnie? - amikor megváltozik az input elem értéke, akkor 3.
   * 5.meghívjuk a szűrő függvényt
   */
  /**1. */
  const nevELEM = $("#nev");
  /**3 */
  let szuresiFeltetel=nevELEM.val()
  szurtLista = szurNevSzerint(OBJEKTUMLISTA,szuresiFeltetel);
  console.log(szurtLista);
/**eseménykezelő a beviteli mezőre: change, keyup */
  nevELEM.on("click",function(){
    sadasd

  });
});