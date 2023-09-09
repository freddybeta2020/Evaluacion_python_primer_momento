

diccionario = {
    "camion": "jac",
    "vehiculo": "Mazda",
    "tractor": "caterpillar",
    "camioneta": "toyota",
    "moto": "yamaha"
}

# Menú principal
while True:
    print("\nMenú:")
    print("1. Agregar elemento")
    print("2. Buscar elemento")
    print("3. Actualizar elemento")
    print("4. Eliminar elemento")
    print("5. Salir")

    opcion = input("Digite la opción: ")

    if opcion == '1':
        clave = input("Ingresa el tipo de vehículo: ")
        valor = input("Ingresa la marca del vehículo: ")
        diccionario[clave] = valor
        print(f"Elemento '{clave}' agregado exitosamente.")
        print(diccionario)
    elif opcion == '2':
        clave = input("Ingrese el tipo de vehículo que desea buscar: ")
        if clave in diccionario:
            print(f"Tipo vehículo: {clave}, Marca: {diccionario[clave]}")            
        else:
            print(f"El tipo de vehículo '{clave}' no se encuentra en el diccionario.")            
    elif opcion == '3':
        clave = input("Ingrese el tipo de vehículo que desea actualizar: ")
        if clave in diccionario:
            nuevo_valor = input("Ingrese la nueva marca: ")
            diccionario[clave] = nuevo_valor
            print(f"Elemento '{clave}' actualizado exitosamente.")
            print(diccionario)
        else:
            print(f"El tipo de vehículo '{clave}' no se encuentra en el diccionario.")            
    elif opcion == '4':
        clave = input("Ingresa el tipo de vehículo que desea eliminar: ")
        if clave in diccionario:
            del diccionario[clave]
            print(f"Vehículo '{clave}' eliminado exitosamente.")
            print(diccionario)
        else:
            print(f"Vehículo '{clave}' no se encuentra en el diccionario.")
    elif opcion == '5':
        break
    else:
        print("Opción no válida. Por favor, elija una opción válida del menú.")
