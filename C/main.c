#include <stdio.h>
#include <string.h>
#define TAMTOKEN 50


// Checar el tamaño del arreglo de las palabras sugeridas

void ClonaPalabras(char* szPalabraLeida, char szPalabrasSugeridas[][TAMTOKEN], int iNumSugeridas);

int main()
{
    char* szPalabraLeida = "ans";
    char szPalabrasSugeridas[][TAMTOKEN] = {"hola"};
    int iNumSugeridas = 0; 
    ClonaPalabras(szPalabraLeida, szPalabrasSugeridas, iNumSugeridas);
}

void ClonaPalabras(char* szPalabraLeida, char szPalabrasSugeridas[][TAMTOKEN], int iNumSugeridas)
{
    char letras[31] = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n','o','p','r','s','t','u','v','w','x','y','z'}; 
    int tamPalabra = strlen(szPalabraLeida);
    char palabraTemporal[tamPalabra];
    int tamAbecedario = strlen(letras);

    /**********         Supresión: Elimina un caracter de la palabra original        *******/

    for(int index = 0; index < tamPalabra; index = index + 1)
    {
        strcpy(palabraTemporal, szPalabraLeida);
        memmove(&palabraTemporal[index], &palabraTemporal[index + 1], tamPalabra - index);
        printf("Palabra sugerida %s \n", palabraTemporal);
        strcpy(szPalabrasSugeridas[0], palabraTemporal);
	    iNumSugeridas = iNumSugeridas + 1;
    }

    /**********         Trasposición de caracteres: Cada par de caracteres continuos se intercambian entre si      *******/
    
    for(int index = 0; index < tamPalabra - 1; index = index + 1)
    {
        strcpy(palabraTemporal, szPalabraLeida);
        char caracterTemporal = palabraTemporal[index];
        palabraTemporal[index] = palabraTemporal[index + 1];
        palabraTemporal[index + 1] = caracterTemporal;
        printf("Palabra sugerida %s \n", palabraTemporal);
        strcpy(szPalabrasSugeridas[0], palabraTemporal);
	    iNumSugeridas = iNumSugeridas + 1;
    }

    printf("Numero de palabras sugeridas encontradas %d \n", iNumSugeridas);

    /**********         Sustitución de caracteres: Se sustituye cada caracter de la original por cada una del alfabeto      *******/

    for(int index = 0; index < tamPalabra; index = index + 1)
    {
        strcpy(palabraTemporal, szPalabraLeida);
        
        for(int abc = 0; abc < tamAbecedario; abc = abc + 1)
        {
            palabraTemporal[index] = letras[abc];
            printf("Palabra sugerida %s \n", palabraTemporal);
            strcpy(szPalabrasSugeridas[0], palabraTemporal);
            iNumSugeridas = iNumSugeridas + 1;
        }     
    }

}