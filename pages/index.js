import styles from "../styles/Home.module.css";
import { Avatar, Container, Grid, Row, Card, Text } from "@nextui-org/react";
import Button from "../components/Button";
import TikTok from "../svgs/tiktok.svg";
import GitHub from '../svgs/github.svg'
import Discord from '../svgs/discord.svg'
import Steam from '../svgs/steam.svg'
import Telegram from '../svgs/telegram.svg'
import Upload from '../svgs/upload.svg'
import Link from '../svgs/link.svg'

export default function Home() {
  return (
    <Container
      fluid
      style={{
        height: "100vh",
      }}
    >
      <Row
        wrap={"wrap"}
        justify="center"
        align="center"
        style={{
          height: "100%",
        }}
      >
        <Grid
          justify={"center"}
          alignItems={"center"}
          alignContent={"center"}
          style={{
            textAlign: "center",
          }}
        >
          <Avatar
            src={
              "https://pbs.twimg.com/profile_images/1480263679547478018/4A5oPxDD_400x400.jpg"
            }
            size={"xl"}
            style={{
              margin: "0 auto",
            }}
          />
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $red100 -20%, $purple500 50%",
            }}
            weight="bold"
          >
            Soren
          </Text>
          <Button
            text={"TikTok"}
            href={"https://tiktok.com/@sorenzio"}
            Logo={TikTok}
            color={"#000000"}
          />
          <Button
              text={"Host"}
              href={"https://beta.gamings.host"}
              Logo={Upload}
              color={"#101010"}
          />
          <Button
              text={"Bin"}
              href={"https://bin.ren.st"}
              color={"#ED2756"}
              Logo={Link}
          />
          <Button
            text={"GitHub"}
            href={"https://github.com/ballsballsballsballsballsballsballsball"}
            Logo={GitHub}
            color={"#000000"}
          />
          <Button
              text={"Discord"}
              href={"https://discordapp.com/users/769750837827731469"}
              Logo={Discord}
              color={"#5865f2"}
          />
          <Button
              text={"Steam"}
              href={"https://steamcommunity.com/id/sorenzio"}
              Logo={Steam}
              color={"#171a21"}
          />
          <Button
              text={"Telegram"}
              href={"https://t.me/sorenzio"}
              Logo={Telegram}
              color={"#3faee8"}
          />
        </Grid>
      </Row>
    </Container>
  );
}
