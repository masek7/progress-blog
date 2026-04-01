---

title: "Criando um organizador de arquivos"

description: "Usando a lib 'pathlib' para criar um organizador de arquivos"

pubDate: 2026-03-31

tags: ["python", "engenharia de software"]

---

## Organizador de arquivos

Resolvi começar a escrever alguns scripts pra treinar meu python, e nada melhor do que códigos que sejam úteis e aplicáveis no dia a dia.  
Pedi ao Gemini que me sugerisse 5 projetos para que eu pudesse aplicar meu aprendizado.  
Segue a lista gerada por ele:

- Organizador Automático de Downloads
- Mini-ETL: Extrator de Linhas Úteis
- Gerenciador de Histórico de Partidas (Dota 2 ou TFT)
- Rastreador de Evolução na Musculação
- Analisador de Frequência de Palavras

## Começando pelo Organizador automático de downloads  

Quando comecei o código, tive que buscar muita coisa.  
Já ouvi falar e usei algumas poucas vezes a lib **os** e poucas vezes a **pathlib**. Ambas trabalham a manipulação de arquivos e diretórios.  
Minha ideia inicial era usar a **os** pois já tinha o mínimo de familiaridade. Porém descobri que a maneira mais recente e pythonica de fazer esse tipo de manipulação é usando a **pathlib**.

Depois de diversas tentativas e cerca de 2 horas gastas...  
Meu código (sem ia) ficou assim:

  ```python

  from pathlib import Path
  import shutil

    pasta_downloads = Path('/home/gui/Downloads')

    def move_arquivos(arquivo, caminho_novo):

        try:
            shutil.move(arquivo, caminho_novo)
            print(f'{arquivo.name} movido para {caminho_novo}')
        except shutil.Error:
            print(f"O {arquivo.name} já existe!")
        except Exception as e:
            print(f'Ocorreu um erro: {e}')

    def organiza_pasta():

        for f in pasta_downloads.iterdir():

            if f.is_file():

                sufixo = f.suffix[1:]
                if not sufixo:
                    sufixo = "Outros"

                caminho_novo = pasta_downloads / sufixo
                caminho_novo.mkdir(exist_ok=True)
                move_arquivos(f, caminho_novo)

    organiza_pasta()
```

Ok, eu confesso, enviei o código ao gemini para que ele analisasse e usei o feedback dele para refatorar o código. A unica sugestão que eu 'copiei' dele, foi o uso do ```caminho_novo.mkdir(exist_ok=true)```.  
Tirando isso, não o usei para mais nada, e inclusive, desativei as sugestões de IA do meu pycharm, para que eu pudesse pensar sozinho nas minhas próprias soluções.  
Recomendo a todos que estão começando ou relembrando, a fazer o mesmo.
