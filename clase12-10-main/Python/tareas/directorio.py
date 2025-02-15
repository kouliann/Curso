agenda={}

def crearDirectorio():
    print("¿Como deseas llamar a este nuevo directorio: \r\n")
    nombreDirectorio = input("inserta un nombre: \n")
    agenda[nombreDirectorio]=[]
    return nombreDirectorio

def agregarTienda(nombreDirectorio):
    print('agregando datos al directorio: ', nombreDirectorio)
    while True:
        tienda = input('ingresa el nombre de la tienda (presione "x" para salir)')
        telefono = input('ingresa el telefono')
        if tienda.lower()=='x':
            break
        
        agenda[nombreDirectorio].append(tienda +" | "+ telefono)
        print('tienda agregada: ', tienda)
    
def eliminarTienda(nombreDirectorio):
    print('Eliminando tiendas del directorio: ', nombreDirectorio)
    while True:
        tiendaEliminar = input('ingresa el nombre del negocio a eliminar (presiona "x" para salir): ')
        if tiendaEliminar.lower()=='x':
            break
        if tiendaEliminar in agenda[nombreDirectorio]:
            agenda[nombreDirectorio].remove(tiendaEliminar)
            print('Tienda Eliminada: ', tiendaEliminar)
        else:
            print('este negocio no se encuentra en el directorio')
        
    print('agenda actualizado')
    print(agenda)
    
    
    
    
def mostrarDirectorios():
    if not agenda:
        print('no hay directorios creados')
    else:
        for nombreDirectorio, tiendas in agenda.items():
            print (f"Directorios: {nombreDirectorio}") 
            for tienda in tiendas:
                print(f"- {tienda}") 
    
    
    
    
    
    
        
        
        
def sistema():
    while True:
        print("\r\n Menu:")
        print("\n 1. Crear nuevo directorio")
        print("\n 2. Agregar negocios")
        print("\n 3. eliminar negocios")
        print("\n 4. Mostrar los directorios")
        print("\n 5. Salir")
        
        opcion= input('Seleccione una opcion: ')
        opcion = int(opcion)
        try:
            if opcion == 1:
                nombreDirectiorio = crearDirectorio()
                agregarTienda(nombreDirectiorio)
            elif opcion == 2:
                nombreDirectiorio = input("Ingrese el nombre del directorio al que desea agregar negocios\n")
                if nombreDirectiorio in agenda:
                    agregarTienda(nombreDirectiorio)
                else:
                    print('Directorio no existente')
            elif opcion == 3:
                nombreDirectiorio = input("Ingrese el nombre del directorio al que desea eliminar negocios\n")
                if nombreDirectiorio in agenda:
                    eliminarTienda(nombreDirectiorio)
                else:
                    print('Directorio no existente')
            elif opcion == 4:
                mostrarDirectorios()
            else:
                break
        except ValueError:
            print('opcion invalida')   
            
sistema()