playlist={}
     
def crearPlaylist():
    print('¿como deseas llamar tu playlist: \r\n')
    nombrePlaylist = input('como deseas nombrar tu playlist:\n')
    playlist[nombrePlaylist]=[]
    return nombrePlaylist
    
            
def agregarCanciones(nombrePlaylist):
    print('agregando canciones a la playlist: ', nombrePlaylist)
    while True:
        cancion = input('ingresa el nombre de la cancion (o "X" para salir): ')
        if cancion.lower() == 'x':
            break
        
        playlist[nombrePlaylist].append(cancion)
        print('cancion agregada: ', cancion)
    
    print('¡Playlist completa!')
    print(playlist)
    
    
    
def eliminarCanciones(nombrePlaylist):
    print('Eliminando canciones de la playlist: ', nombrePlaylist)
    while True:
        cancionEliminar = input('ingresa el nombre de la cancion a eliminar (o "X" para salir): ')
        if cancionEliminar.lower()=='x':
            break
        if cancionEliminar in playlist[nombrePlaylist]:
            playlist[nombrePlaylist].remove(cancionEliminar)
            print('Cancion eliminada: ', cancionEliminar)
        else:
            print('la cancion no se encuentra en la playlist')
            
    print('playlist actualizado')
    print(playlist)
    
    
def mostrarplaylist():
    if not playlist:
        print('no hay playlist creadas')
    else:
        for nombrePlaylist, canciones in playlist.items():
            print (f"playlist: {nombrePlaylist}") 
            for cancion in canciones:
                print(f"- {cancion}")           
    
def mostrarResumen():
    print(f'playlist: ', playlist['nombre'])
    print('canciones de la playlist: \r\n')
    for cancion in playlist['canciones']:
        print(cancion)
        
        
def app():
    while True:
        print("\n Menu:")
        print("\n 1. Crear Playlist")
        print("\n 2. Agregar canciones a una playlist")
        print("\n 3. eliminar canciones de una playlist")
        print("\n 4. Mostrar las playlist")
        print("\n 5. Salir")
        
        opcion = input('Selecciona una opcion')
        
        if opcion == "1":
            nombrePlaylist = crearPlaylist()
            agregarCanciones(nombrePlaylist)
        elif opcion == "2":
            nombrePlaylist = input("A que playlist deseas agregar canciones")
            if nombrePlaylist in playlist:
                agregarCanciones(nombrePlaylist)
            else:
                print("La playlist no existe")
        elif opcion == "3":
            nombrePlaylist = input("A que playlist deseas eliminar canciones")
            if nombrePlaylist in playlist:
                eliminarCanciones(nombrePlaylist)
            else: 
                print("la playlist no existe")
        elif opcion == "4":
            mostrarplaylist()
        elif opcion == "5":
            break        
        else:
            print("opcion invalida")
            
app()        
    