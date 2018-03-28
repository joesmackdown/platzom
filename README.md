#Platzom

Platzom es un idioma inventado para el [Curso de fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online

## Descripción del idioma

-Si la palabra termina en "ar", se le quitan esos dos caracteres.
-Si la palabra incia con Z se le añade "pe" al final.
-Si la palabra traducida tiene 10 o mas letras se debe partir en la mitad y unir con un guion del medio.
-Si la palabra original es un palidromo, ninguna regla anterior cuenta y devuelve la misma palabra intercalando mayusculas y minusculas

## Instalación
 ```
 npm install platzom
 ```

 ## Uso

 ```
 import platzom from 'platzom'

platzom("Programar") // Programar
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS

 ```

## Créditos

- [José Molina](https://www.facebook.com/joeyandcely)

## Licencia

[MIT](https://opensource.org/licenses/MIT)