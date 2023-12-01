/*
Nesse codigo ele verifica a porta A0 nativa
e envia o valor em uma função [ API ] com os dados em json,
é só um exemplo de como isso pode ser um leitor multifunçoes,
como um coletor de informações:
ex: bateria de um marcapasso,
leituras de um Holter, et cetera.
*/

#include <ArduinoJson.h>
#include <ESPAsyncWebServer.h>

const int analogPin = A0;

AsyncWebServer server(80);

void setup() {
  Serial.begin(115200);

  // Configuração do pino analógico
  pinMode(analogPin, INPUT);

  // Rota para obter os dados em formato JSON
  server.on("/json", HTTP_GET, [](AsyncWebServerRequest *request){
    // Lê o valor do pino analógico
    float value = readAnalogValue();
    
    // Cria um objeto JSON
    DynamicJsonDocument doc(1024);
    doc["sensor_value"] = value;

    // Converte o objeto JSON para uma string
    String jsonStr;
    serializeJson(doc, jsonStr);

    // Envia a resposta JSON para o cliente
    request->send(200, "application/json", jsonStr);
  });

  // Inicia o servidor
  server.begin();
}

void loop() {
  // O loop principal não precisa de código adicional
}

float readAnalogValue() {
  // Lê o valor do pino analógico
  float response = analogRead(analogPin);

  // Converte o valor para a escala desejada
  response = response / 204.6;

  return response;
}