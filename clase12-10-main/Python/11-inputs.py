nombre = input('cual es tu nombre?\n')
print(f'notu nombre es {nombre}')

#leer  los datos cuando sean numeros  podemos hacer un if
#nota las entradas siempre seran strings

edad = input('cual es tu edad\n')

#convertir edad en un enero

try:

    edad = int(edad) #float #str
    if edad >= 18:
        print(f'eres mayor de edad y puedes votar')
    else:
        print(f'lo sentimos aun eres un bebe')
    
except ValueError:
    print('por favor, ingrese un numero valido')