# Edge Computing

Esse ReadMe.MD tem como objetivo esclarecer todas as duvidas sobre os dados e codigos contidos na pasta `edge` do repositorio.

## Time

|Nome|RM|
|:--------------:|:-----------:|
| Victor Didoff  | 552965 |
| Vinicius Silva | 553240 |

## Objetivo

Nessa parte do projeto focamos em como podemos utilizar de serviços IoT para facilitar a vida de quem utiliza ou necessita de aparelhos ou exames realizados em casa.
Aparelhos esses como:
* Marca Passo
* Holter
* et cetera

## Solução

Integração desses dispositvos ao um sistema de recuperação de dados. Integrando esses dispositivos a uma rede, pode se facilitar o acesso a informação pelo mesmo disponibilizada.
Por Exemplo quando falamos de marca passo, uma das infromações essenciais é a bateria, ou quando falamos de um exame como o Holter, os dados dele obtido pode ser enviadado ao lido antes do final do exame, sem atrapalhar a vida do paciente.


## Tecnico

Atravez de um dispositivo IoT como o esp32 podemos obter a prova de conceito, no codigo de demostração ele gera um webserver assincrono que envia os dados recebidos do "sensor" em um formato universal ( nesse caso o formato usado para exemplificação foi o JSON ).

## Representação | Demontração


A demontração foi feita atravez do TinkerCad utilizando um Arduino Uno R3

Já que o TinkerCad não possue a ESP32. [ o codigo do arduino foi disponibilizado no arquivo `example.ino` ]

[Acesse Aqui a Demonstração](https://www.tinkercad.com/things/k75CZT3W1tD-magnificent-robo-snaget/editel?returnTo=%2Fdashboard&sharecode=5SoNyUBNiWCk1d0RjEyvb4HNPKGoExxV6Hf4bzbF3xU)

## Foto da Representação
![image](https://github.com/vinirex/GS2023-ESPR1/assets/82065998/a8ce3132-4cd4-4877-9223-be21c5eaf66e)
![image](https://github.com/vinirex/GS2023-ESPR1/assets/82065998/17c247c0-ed30-4b52-b08f-2f40768857e3)

## Data Sheet's

| Quantidade | Nome | Link |
|:----------:|:----:|:----:|
|1x|Esp32|[link](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)|
|1x|Potenciometro B250k|[link](https://datasheetspdf.com/pdf-file/866998/ALPHA/RV24AF-10-40R1-B250K/1)|
