class Medicos:
    def __init__(self, nombre, especialidad):
        self.nombre = nombre
        self.especialidad = especialidad
        self.quirofano = False
        
        
    def operar(self):
        self.quirofano = True
        print('El dr entro a quirofano')
        
        
    def consulta(self):
        if self.quirofano:
            print("Discuple, el especialista se encuentra en operacion, regrese mas tarde")
        else:
            print("El especialista puede pasar consulta ahora mismo")
            
    def agregarDoctores(self, nombre, especialidad):
        self.nombre = nombre
        self.especialidad = especialidad
        print(f"agregando doctor: {self.nombre}")

    def listaDoctores(self):
        print (f"los Doctores son: {self.nombre} especialista en {self.especialidad}")
        
        

doctores = Medicos("Kissi Garrido", "Pediatra")
doctores.listaDoctores()
doctores.operar()
doctores.consulta()