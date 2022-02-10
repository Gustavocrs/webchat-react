import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";

export default function ChatPage() {
  const [mensagem, setMensagem] = React.useState("");
  const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: listaDeMensagens.length + 1,
      de: "gustavocrs",
      texto: novaMensagem,
    };

    setListaDeMensagens([mensagem, ...listaDeMensagens]);
    setMensagem("");
  }

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.neutrals["200"],
        backgroundImage: ``,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList mensagens={listaDeMensagens} />

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              align: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMensagem(valor);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  if (mensagem === "") {
                    event.preventDefault();
                    event.target.placeholder =
                      "Alooww!! Digita algo aqui, poxa!";
                  } else {
                    handleNovaMensagem(mensagem);
                    event.target.placeholder = "Insira sua mensagem aqui...";
                  }
                  event.preventDefault();
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                height: "50px",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "5px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />

            <Button
              variant="tertiary"
              colorVariant="neutral"
              label="Enviar"
              styleSheet={{
                border: "1px solid",
                height: "50px",
                padding: "6px 8px",
              }}

              onClick={() => {
                if (mensagem != ""){
                  handleNovaMensagem(mensagem);
                }                  
                }
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          variant="heading3"
          styleSheet={{
            color: appConfig.theme.colors.neutrals[200],
          }}
        >
          Messenger Web Chat
        </Text>
        {/* <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Limpar"
        /> */}
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Sair"
          href="/"
          styleSheet={{
            border: "1px solid",
          }}
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  console.log(props);
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {props.mensagens.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "8px",
              }}
            >
              <Box
                styleSheet={{
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                  padding: "10px",
                }}
              >
                <Image
                  styleSheet={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "8px",
                  }}
                  src={`https://github.com/${mensagem.de}.png`}
                />
                <Text
                  tag="strong"
                  styleSheet={{
                    fontSize: "12px",
                    marginLeft: "8px",
                    color: appConfig.theme.colors.neutrals[100],
                  }}
                >
                  {mensagem.de}: {mensagem.texto}
                </Text>
                <Text
                  styleSheet={{
                    fontSize: "10px",
                    marginLeft: "8px",
                    color: appConfig.theme.colors.neutrals[300],
                  }}
                  tag="span"
                >
                  {new Date().toLocaleDateString()}
                </Text>
              </Box>
            </Box>
          </Text>
        );
      })}
    </Box>
  );
}
