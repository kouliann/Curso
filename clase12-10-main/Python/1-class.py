#creando clases y objetos 

class Restaurant:
    def agregarRestaurante(self,nombre):
        self.nombre = nombre
        print(f"agregando restaurante...{self.nombre}")
        
    def mostrarInformacion(self):
        print(f"el nombre del restaurante es: {self.nombre}")
        
class Carro:
    def __init__ (self,marca,modelo,color):
        self.marca = marca
        self.modelo = modelo
        self.color = color
        self.encendido = False
    
    def encender(self):
        self.encendido = True
        print("el carro ha encendido")
    
    def apagar(self):
        self.encendido = False
        print("el carro ta apagao")
        
    def acelerar(self):
        if self.encendido:
            print ("el carro esta acelerando")
        else:
            print("el carro necesita estar encendido para acelerar")

         
#instanciar la clase, el nombre de la vaiarble que tu elijas

restaurant = Restaurant() #Aqui ya estamos creando un objeto y 

#para ejecutar el metodo 
restaurant.agregarRestaurante('el caballo sediento')#aqui se agrega
restaurant.mostrarInformacion()


#Se puede crear diferentes objetos con la misma clase

Restaurante2 = Restaurant()
Restaurante2.agregarRestaurante("el padrino burger")
Restaurante2.mostrarInformacion()

#imprimir los objetos
print(f"El nombre del restaurante es: {restaurant.nombre}")
print(f"El nombre del restaurante es: {Restaurante2.nombre}")


carros = Carro("toyota","corolla","gris")
print(f"la marca del carro es: {carros.marca}")
carros.encender()
carros.acelerar()