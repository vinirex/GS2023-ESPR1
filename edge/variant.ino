int analogPin = A0;
float val = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  val = read();
  Serial.println(val);
}

float read() {
  float response = analogRead(analogPin);
  response = response / 204.6;
  return response;
}