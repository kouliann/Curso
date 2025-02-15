#OBJETOS

#En python se le conoce como Diccionarios

cancion= {
    'artista': 'Ricardo Arjona',
    'nombre': 'el problema'
}

#Acceder a los elementos del diccionario

print(cancion['artista']) #primera forma de accder

artista = cancion['artista']#segunda forma
print(artista)

#agregar una key al diccionario

cancion['playlist_id'] = 'Romantica'
print(cancion)

#eliminar el valor de un diccionario 

del cancion['playlist_id']
print(cancion)


propiedades= {
    'CPU': 'AMD',
    'disco duro': 'Western Digital (WD)',
    'RAM': 'Corsair',
}

propiedades['monitor']= 'jemip 24pulgadas'

print(propiedades)