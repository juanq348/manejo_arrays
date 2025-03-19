personas = []

cantidad = int(input("Ingrese el número de personas a registrar: "))

for i in range(cantidad):
    nombre = input(f"Ingrese el nombre de la persona {i + 1}: ")
    edad = int(input("Ingrese la edad: "))
    nota = float(input("Ingrese la nota: "))
    personas.append([nombre, edad, nota])

print("\nLista de personas ingresadas:")
for persona in personas:
    print(persona)

personas.sort(key=lambda x: x[2], reverse=True)
print("\nLista ordenada por nota (mayor a menor):")
for persona in personas:
    print(persona)
