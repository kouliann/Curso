cuentas = {
    "usuario":"elianss",
    "clave": "1234",
    "fondos": 90.57,
}

rep = True
cuentas["fondos"] = float(cuentas["fondos"])
def retirarFondos():
    retiro = input("ingrese la cantidad a retirar\n")
    retiro = int(retiro)
    
    if retiro > cuentas["fondos"] and retiro <=0:
        print("error, vuelva a intentarlo")
        retiro = input("ingrese la cantidad a retirar")
    else:
        retiro = float(retiro)
        cuentas["fondos"] = cuentas["fondos"] - retiro
        print(f"Este es el estado actual de su cuenta: {cuentas['fondos']}")
        
def agregarFondos():
    try:
        ingreso = input("Ingrese la cantidad a agregar")
        ingreso = float(ingreso)
        cuentas["fondos"] = cuentas["fondos"] + ingreso
        print(f"Este es el estado actual de su cuenta: {cuentas['fondos']}")
    except ValueError:
        ingreso=input("Ingrese Una cantidad valida")


 
us= input("Ingrese su nombre de usuario \n")
contra = input("ingrese la contraseña \n")
try:     
    if (us in cuentas['usuario']) and (contra in cuentas['clave']):
        while rep:    
            print(f"bienvenido usuario {us}")  
            print("\n 1. Mirar fondos")
            print("\n 2. Retirar Fondos")
            print("\n 3. Ingresar Fondos")
            print("\n 4. Salir\n")
            eleccion = input("Ingrese una opcion\n ")
            try:
                eleccion = int(eleccion)
                if  eleccion == 1:
                    print(cuentas["fondos"])
                elif eleccion == 2:           
                   retirarFondos()
                   print("Desea realizar otra operacion?\n")  
                   respuesta = input("1: Si, 0: No\n")
                   respuesta = int(respuesta)
                   if respuesta == 1:
                       rep = True
                   else:
                       rep = False 
                elif eleccion==3:
                    agregarFondos()
                    print("Desea realizar otra operacion?\n")  
                    respuesta = input("1: Si, 0: No\n")
                    respuesta = int(respuesta)
                    if respuesta == 1:
                       rep = True
                    else:
                       rep = False 
                else:
                    print("Saliendo")
                    rep=False
            except ValueError: 
                print("vuelva a intentarlo")     
except ValueError: 
    print("Error, vuelva a intentarlo")        
              
    

                                                                                             
    
    
    
    
    
    
    
    
    
    
    
    
    
    
