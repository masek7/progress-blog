---
title: "Introdução a Algoritmos"
description: "O que são algoritmos e como pensar algoritmicamente"
pubDate: 2026-03-12
tags: ["computacao", "algoritmos"]
---

## O que é um Algoritmo?

Um algoritmo é uma sequência de passos para resolver um problema.

## Exemplo

Receita de bolo é um algoritmo!

    1. Misture os ingredientes
    2. Leve ao forno
    3. Espere 40 minutos
    4. Sirva

## Em Python

```python

# Algoritmo para somar dois números
def somar(a, b):
    return a + b

print(somar(2, 3)) # 5
```

## Em processo de estudo

Ainda estou estudando e entendendo algoritmos. Ao começar, lendo o livro 'Entendendo Algoritmos' tive que parar e voltar para Logaritmos, pois é um conceito que é usado durante todo o livro, segundo o autor.

O primeiro algoritmo que vi foi a busca binária.

## Busca binária (binary search)

Baśicamente a busca binária diz que você deve 'chutar' um número intermediário durante uma busca, e ir eliminando a metade dos restantes de cada vez.

Por exemplo: Ao sortear um numero entre 1 e 100, você deve chutar sempre na metade (50), para que possam sobrar sempre o menor número possível.
A lógica seria -> 50 -> 25 -> 13 -> 7 -> 4 -> 2 e por fim 1.

## Notação Big O

Ela informa o quão rápido é um algoritmo, dando seu tempo de execução.
A notação Big O fornece algumas fórmulas.

1. O(n) - A Busca Linear  
    Em que N é o número de vezes totais para chegar ao resultado desejado. O pior dos casos.
    Um exemplo:
    Numa lista de 200 mil contatos, N é = 200.000,00 ou 200k, onde 200 mil é o número de tentativas máximas que você tem para chegar ao resultado desejado.

2. O(log n) - A Busca Binária  
    Em que log N é o número de vezes em que você deverá elevar o 2 para chegar ao seu resultado buscado, com base no indice dele dentro da lista. (A busca binária só funciona em uma lista ordenada por este motivo).

    OBS: log n sempre terá Base 2.

3. Há outros algoritmos na Notação Big O. Porém não menos importantes, só que sem o devido foco nesse tópico (ou livro.)  
São eles:  

    * O(n * log n). Um algoritmo rápido de ordenação, como a ordenação quicksort.
    * O(n2). Um algoritmo lento de ordenação, como a ordenação por seleção.
    * O(n!). Um algoritmo bastante lento, como o do caixeiro-viajante.

## O caixeiro-viajante

Ele é um famoso problema da ciência da computação. Seu crescimento é apavorante e algumas pessoas acreditam até que ele possa ser melhorado. Mas ainda não foi. Esse algoritimo é chamado de "o problema do caixeiro-viajante".  

Você tem um caixeiro-viajante. Ele precisa ir a cinco cidades.  

Esse caixeiro quer passar por todas as cidades percorrendo o mínimo de distancia possível. Como devemos ver esse problema? Analisando cada possivel orrdem de cidades pra visitar.  

Ele soma a distância total e escolhe o caminho de menor distância, óbvio. Porém existem 120 permutações para cinco cidades, logo precisa-se de 120 operações para resolver o problema de CINCO cidades. (Lembre-se desses números.)  

Porém ao aumentar UMA cidade, precisa-se de 720 OPERAÇÕES. Para SETE cidades (aumento de DUAS cidades) precisa-se de 5.050 OPERAÇÕES!

De modo geral, para N itens é necessário N! (Fatorial de N) N x (N-1) x (N-2)... E assim vai. Esse é o tempo de execução O(n!) ou TEMPO FATORIAL. 

## Resumo

    * A pesquisa binária é muito mais rápida que a pesquisa simples.
    * O(log n) é mais rápido que O(n) e O(log n) fica ainda mais rápido conforme os elementos da lista aumentam (em comparação com O(n) ).
    * A rapidez de um algoritmo não é medida em segundos, e sim pela quantidade de operações realizadas por ele até atingir o seu objetivo.
    * O tempo de execução de um algoritmo é medido por meio de seu crescimento.
    * O tempo de execução dos algoritmos é expresso na notação Big O.