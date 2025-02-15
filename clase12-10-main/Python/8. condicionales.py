#operadores de comparacion

#== igual a
# !=: diferente de
# < menor que
# > mayor que
# <= menor igual que 
# => mayor igual que

a = 5
b = 3
igual = a == b #igual es false 
diferente = a != b #diferente es true
mayor = a >=b #mayor es true

#condicional

ahorro = 500
if ahorro >= 0:
    print('nos vamos de viaje')
else:
    print('no nos vamos de viaje')
    
# revisamos si un valor es diferente en python string

lenguaje = 'python'

if lenguaje == 'python':
    print(f'super eres un crack de {lenguaje}')
else:
    print(f'no eres un crack de {lenguaje}')
    
    
    
#evaluacion boolean

usuario_autenticado = True

if usuario_autenticado:
    print('el usuario se autentico con exito')
else:
    print('else usuario no se autentico vuelva a intentarlo')
    
    
#Condicionales con List

superheroes=['superman', 'spiderman', 'mujer maravilla', 'hercules']
if 'superman' in superheroes:
    print('amas a batman')
else:
    print('tu superheroe no es batman')
  
  
    
juegos=['stardew valley', 'minecraft', 'valorant', 'gatos y sopa']

if 'stardew valley' in juegos:
    print('soy un crack en el stardew valley')
else:
    print('soy un fracaso en el stardew valley')
    
    
    
tipo='estudiante'

if tipo=='estudiante':
    print('tienes un descuento del 50%')
elif tipo=='profesor':
    print('tienes un descuento del 80%')
elif tipo=='invitado':
    print('tienes un descuento del 10%')
else:
    print('NO HAY DESCUENTO')


user='administrador'
    
if user=='super admin':
    print('bienvenido Super admin')
elif user=='admin':
    print('Bienvenido super admin')
elif user=='invitado':
    print('Bienvenido usuario')
    
    
    
usuario='roaming'

tipoUsuario = 'admin'
 
tipoUsuarios = ['admin', 'superadmin', 'invitado']

if tipoUsuario in tipoUsuarios and usuario == 'roaming':
    
    print(f'puedes entrar {tipoUsuario}')
else:
    print('el usuario no puede entrar al sistema')
    
    
#condicionales AND / OR
#AND Revisa qe ambas condiciones sean verdaderas
#OR Revisa que almenos 1 de las condiciones se cumpla

acceso_usuario=True
acceso_admin=True
if acceso_usuario and acceso_admin:
    print('acceso total')
elif acceso_usuario:
    print('el usuario esta autenticado')
else:
    print('no puede pasarrrr')