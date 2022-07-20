# Tic-Tac-Toe em Typescript com diferentes níveis de dificuldade

Tentei utilizar os princípios do S.O.L.I.D nesse projeto, embora ele seja basicamente baseado em um paradigma funcional e não em POO.
Acredito que a ideia que eu mais usei se baseie na single responsibility.

EASY

A lógica principal é gerar um número aleatório que ainda não foi jogado por ninguém

-> Recebe os movimentos feitos pelo jogador e pela máquina
-> Filtra as opções diponíveis e salva em um array de movimentos válidos
-> Gera um indice randômico (varia de 0 até o tamanho do array -1)
-> Retorna o valor correspondente a essa índice

![EASY](https://user-images.githubusercontent.com/92919925/179904742-692c6dda-9ea7-49ec-a14b-eb32c820271f.png)

MEDIUM

-> Primeiro, calcula uma jogada a frente, chamada de betterOption
->A função betterOption filtra as jogadas válidas
->Então ela simula uma jogada com cada uma das opções válidas, e retorna essa jogada caso ela resulte em uma pontuação de vencer
->Esse cáculo é feito tanto para a máquina (porque assim ela ganha) ou para o jogador (porque assim ela evita que o jogador ganhe)

Essa estratégia só verifica uma jogada à frente, e portanto é falível. 

![medium](https://user-images.githubusercontent.com/92919925/179906557-39214c19-7222-4f17-901d-8cf530ca6b85.png)


HARD

->Inicialmente, calcula as melhores opções da seguinte forma:
->Calcula os movimentos válidos
->Calcula todas as opções de jogadas com os movimentos válidos + jogadas feitas pelo competidor em questão (máquina ou usuário, um de cada vez)
->Se dentre essas combinações existe uma combinação vencedora, retorna um array com todas as jogadas válidas que incluídas nessas combinações vencedoras

Verificações
->A primeira verificação é semelhante a que é feita no nível médio
->Se uma das jogadas é a vencedora, então retorna essa jogada
->Superada essa verificação, é criado um array que simula as jogadas vencedoras duas jogadas à frente
->Para fazer essa verificação o array de melhores opções gerado no inicio fixa um de seus valores e calcula o resultado de todas as combinações subsequentes para os outros valores, e faz isso para todas as combinações possíveis.
->No fim, uma função calcula qual foi a jogada que mais apareceu no array e retorna esse valor

![HARD](https://user-images.githubusercontent.com/92919925/179909917-e0c58000-5192-41d7-99ca-81b52a170f2e.png)

FUNÇÃO DE COMBINAÇÕES

->Essa função gera todas as combinações, três a três, de determinado array de qualquer tamanho.
-> Ela utiliza flatMap e filter encadeados sequencialmente

FUNÇÃO DE CONTAR OS PONTOS

->Primeiro, é criado um array com 9 posições, cada posição valendo zero.
->Para cada elemento do array que se quer contar os pontos, é atribuido +1 a posição corresponde desse elemento
Ex: elemento = 9
No array onde cada posição inicialmente vale 0, a posição 9 vai somar +1, ficando [0,0,0,0,0,0,0,0,1]
->Verifica-se qual posição possui o maior número e esse número é então retornado como opção de jogada



