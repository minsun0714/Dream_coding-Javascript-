// Bubbling up, Propagating π§Ό
function a() {
    throw new Error('error!');
}

function b() {
   try {
    a();
   } catch(error) {
    console.log('μκ°ν΄λ³΄λκΉ μ΄ μλ¬λ λ΄κ° νΈλ€λ§ν  μ μμ κ² κ°κ΅°!');
    throw error;
   }
}

function c() {
    b();
}

try {
    c();
} catch (error) {
    console.log('Catched!');
}
console.log('done!');
