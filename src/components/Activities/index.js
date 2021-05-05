import React from "react";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  Message,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Action,
  Option,
  OptionLabel,
} from "./styles";

import avatar from "../../images/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@silviosantos</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <Message>Olha o aviãozinho</Message>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>

            <Divider />

            <Feather name="lock" color="white" size={14} />
            <Date>Há 2 anos</Date>
          </Details>

          <Action>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                color="white"
                size={14}
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" color="white" size={14} />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Action>
        </CardFooter>
      </Card>
    </Container>
  );
}
