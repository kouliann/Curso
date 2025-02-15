#Como saber  si un numero es par

numero= input('agregue un numero y te dire si es par o impar \r\n')
numero= int(numero)

if numero %2 == 0:  
    print(f'El numero {numero} es par')
else:
    print(f'El numero {numero} es impar')
    
    

#juego 2

pregunta = input ('agrega un numero y te dire si es impar')
pregunta = '\r\n Escribe "cerrar" para salir de la app \r\n'
preguntar = True

while True:
    numero=input("ingrese un numero (o escribe 'cerrar' para salir):")
    if numero.lower()=='cerrar':
        break
    try:
        numero = int(numero)
        if numero % 2 == 0:
            print(f'El numero {numero} es par')
        else:
            print(f'El numero {numero} es impar')
    except ValueError:
        print('por favor ingresa un numero valido')