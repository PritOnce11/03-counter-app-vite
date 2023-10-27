import { getUser } from "../../src/bases-pruebas/05-funciones"


describe('Pruebas en 05-funciones', () => { 
    
    test('getUser debe retornar un objeto', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();

        expect( testUser ).toEqual( user );//cuando comparamos objetos tenemos que usar equal

     });

    test('getUsuarioActivo', () => { second })

 });