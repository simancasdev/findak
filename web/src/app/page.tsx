"use client";
import Image from "next/image";
import {Download} from "@/components";
import {SvgProps} from "@/interfaces";
import {PALETTE} from "@/styles/palette";
import {Bell, BarChart, Send, Search} from "@/svg";
import logotype from "../../public/svg/logotipo-3.svg";
import {Hero, Slogan, Landing, Assets} from "./page.styles";
import screenShots from "../../public/images/screen-shots.png";
import {Badge, Column, Row, Typography} from "@/components/@system";
import simancasTechnology from "../../public/images/simancas-technology.png";

type Characteristics = {
  label: string;
  Icon: (pros: SvgProps) => JSX.Element;
};

// prettier-ignore
const characteristics: Characteristics[] = [
  {Icon: Search, label: "Crea búsquedas detalladas de lo que necesitas"},
  {Icon: Send, label: "Envía ofertas a otros usuarios y vende tus productos o servicios"},
  {Icon: Bell, label: "Te informaremos cuando las personas busquen servicios o productos"},
  {Icon: BarChart, label: "Mira las tendencias de búsquedas en tu país y comienza nuevos negocios"},
];

export default function Home() {
  return (
    <Landing>
      <Hero>
        <Image
          priority
          width={250}
          src={logotype}
          alt="Logotype"
          className="logotype"
        />
        <Slogan>
          Dile a las personas lo que quieres y recibe lo que necesitas
        </Slogan>
        <Column gap={0}>
          <Download type="iphone" />
          <Download type="android" />
        </Column>
      </Hero>
      <Column justifyContent="center" alignItems="center" padding="1rem">
        <Assets>
          <Image
            layout="fill"
            src={screenShots}
            objectFit="contain"
            alt="Findak App Screenshots"
          />
        </Assets>
        <Column>
          {characteristics.map(({label, Icon}, key) => (
            <Badge
              key={key}
              label={label}
              color={PALETTE["BLACK"]}
              icon={<Icon color={PALETTE["BLACK"]} />}
              backgroundColor={PALETTE["TRANSPARENT"]}
            />
          ))}
        </Column>
        <Row>
          <Image
            width={35}
            src={simancasTechnology}
            alt="Simancas Technology Isotype"
          />
          <Typography color={PALETTE["GREY"]} fontSize={13}>
            Powered by Simancas Technology
          </Typography>
        </Row>
      </Column>
    </Landing>
  );
}
