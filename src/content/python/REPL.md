---
title: "Entendendo REPL"
description: "Codando através da CLI"
pubDate: 2026-03-14
tags: ["python", "engenharia de software"]
---

## O que é o REPL?

A maneira mais simples de rodar um script em python é usando o REPL (READ-EVAL-PRINT LOOP).  

Ele é conhecido pela maneira como rodamos um script no terminal do SO em que está.  

Pra começar, devemos primeiro digitar o comando para iniciar o python no terminal (ou bash, se estiver usando linux ou macOS. Que é o meu caso)  

Eles geralmente são: py, python3 ou python.  

Esse comando irá retornar a versão do python em seu sistema, e algumas outras informações.

```bash
python3 
Python 3.12.3 (main, Mar  3 2026, 12:15:18) [GCC 13.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.

```

A primeira coisa nova que aprendi usando o REPL, foi salvar o resultado da execução de um script em python em um arquivo usando o comando:

```bash
python3 script1.py > log.txt

```

Isso é conhecido como stream redirection.  
OBS: No windows, pode-se omitir o "python3", visto que ele entende a extensão do arquivo e procura o executor dela.
