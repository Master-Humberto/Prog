## Semana 2 em Assembly RISC-V

Na atividade da semana 2 eu não sabia o motivo do código estar errado. Pesquisei para colocar a String e precisava colocar como .data no início do código. Depois eu alocava no registrador a1 que, depois, seria usada 
como argumento na ecall, dando controle ao sistema operacional para realizar a chamada de syscall específica como a0 sendo 1 para argumento de saída(stdout), a1 sendo a String e a2 para a alocação de caracteres(16).

Achei muito legal a atividade e resolvi complementar com esse código em Assembly RISC-V após a aula.
