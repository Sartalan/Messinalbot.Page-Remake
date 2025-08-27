export const jsCode = `
// Import required libraries
#include < WiFi.h >
#include < AsyncTCP.h >
#include < ESPAsyncWebServer.h >


// Replace with your network credentials
const char* ssid = "Polenta3000";
const char* password = "Tecnica5";

//Estudiantes
//educar_2018
int Numero;

#define STBY 5
#define Motor1a 17
#define Motor1b 16
#define Motor2a 18
#define Motor2b 19

char move = 'default';
int ledState = 0;
bool getA, getS, getD, getW = 0;

// Create AsyncWebServer object on port 80
AsyncWebServer server(80);
AsyncWebSocket ws("/ws");

const char index_html[] PROGMEM = R"rawliteral(
            // Aquí se inserta la Página Web
)rawliteral";

void notifyClients() {
  ws.textAll(String(ledState));
}

void handleWebSocketMessage(void *arg, uint8_t *data, size_t len) {
  AwsFrameInfo *info = (AwsFrameInfo*)arg;
  if (info->final && info->index == 0 && info->len == len && info->opcode == WS_TEXT) {
    data[len] = 0;

//----------------

    if (strcmp((char*)data, "IZQUIERDA") == 0) {

      Serial.println("Voy hacia la izquierda");
      move = 'A';
      getA = 0;
      
    } if (strcmp((char*)data, "DERECHA") == 0) {

       Serial.println("Voy hacia la derecha");
      move = 'D';
      getD = 0;

    }
    if (strcmp((char*)data, "ABAJO") == 0) {

      Serial.println("Voy hacia abajo");
      move = 'S';
      getS = 0;
       
    }

    if (strcmp((char*)data, "ARRIBA") == 0) {
      
      Serial.println("Voy hacia adelante");
      move = 'W';
      getA = 0;
    }

    //-------------- MENOS

    if (strcmp((char*)data, "MENOSARRIBA") == 0) {
        move = 'default';
    }
     if (strcmp((char*)data, "MENOSDERECHA") == 0) {
        move = 'default'; 
    }
     if (strcmp((char*)data, "MENOSIZQUIERDA") == 0) {
        move = 'default';
    }
     if (strcmp((char*)data, "MENOSABAJO") == 0) {
        move = 'default';
    }

    

  }
}

void onEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type,
             void *arg, uint8_t *data, size_t len) {
  switch (type) {
    case WS_EVT_CONNECT:
      Serial.printf("WebSocket client #%u connected from %s\n", client->id(), client->remoteIP().toString().c_str());
      break;
    case WS_EVT_DISCONNECT:
      Serial.printf("WebSocket client #%u disconnected\n", client->id());
      break;
    case WS_EVT_DATA:
      handleWebSocketMessage(arg, data, len);
      break;
    case WS_EVT_PONG:
    case WS_EVT_ERROR:
      break;
  }
}

void initWebSocket() {
  ws.onEvent(onEvent);
  server.addHandler(&ws);
}

String processor(const String& var){
  Serial.println(var);
  if(var == "STATE"){
    if (ledState){
      return "ON";
    }
    else{
      return "OFF";
    }
  }
  return String();
}

void setup(){
  // Serial port for debugging purposes
  Serial.begin(115200);

  pinMode(Motor1a, OUTPUT);
  pinMode(Motor1b, OUTPUT);
  pinMode(Motor2a, OUTPUT);
  pinMode(Motor2b, OUTPUT);

  digitalWrite(Motor1a, LOW);
  digitalWrite(Motor1b, LOW);
  digitalWrite(Motor2a, LOW);
  digitalWrite(Motor2b, LOW);
  
  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }

  // Print ESP Local IP Address
  Serial.println(WiFi.localIP());

  initWebSocket();

  // Route for root / web page
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/html", index_html, processor);
  });

  // Start server
  server.begin();
}

void loop() {
  ws.cleanupClients();

 switch (move)
{


  case 'A':
        
          Serial.println("A");
          digitalWrite(Motor1a, HIGH);
          digitalWrite(Motor1b, LOW);
          digitalWrite(Motor2a, LOW);
          digitalWrite(Motor2b, HIGH);
          digitalWrite(STBY, HIGH);
          
        
        break;

  case 'D':
          
          Serial.println("D");
          digitalWrite(Motor1a, LOW);
          digitalWrite(Motor1b, HIGH);
          digitalWrite(Motor2a, HIGH);
          digitalWrite(Motor2b, LOW);
          digitalWrite(STBY, HIGH);

        break;
  case 'W':

        
          Serial.println("W");
          digitalWrite(Motor1a, HIGH);
          digitalWrite(Motor1b, LOW);
          digitalWrite(Motor2a, HIGH);
          digitalWrite(Motor2b, LOW);
          digitalWrite(STBY, HIGH);
          

        break;

  case 'S':

        
          Serial.println("S");
          digitalWrite(Motor1a, LOW);
          digitalWrite(Motor1b, HIGH);
          digitalWrite(Motor2a, LOW);
          digitalWrite(Motor2b, HIGH);
          digitalWrite(STBY, HIGH);
          
        
        break;

    default:

        
        digitalWrite(Motor1a, LOW);
        digitalWrite(Motor1b, LOW);
        digitalWrite(Motor2a, LOW);
        digitalWrite(Motor2b, LOW);
        digitalWrite(STBY, LOW);
        break;
}
}

`