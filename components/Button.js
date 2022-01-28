import { Button as Btn, Spacer } from "@nextui-org/react";

export default function Button(props) {
  const { href, Logo, text, color } = props;
  return (
    <>
      <a
        href={href}
        target={"_blank"}
        style={{
          color: "inherit",
        }}
        rel="noreferrer"
      >
        <Btn
          ripple
          shadow
          color={"secondary"}
          style={{
            display: "inline",
            marginTop: "1rem",
          }}
          size={"xl"}
          css={{
            backgroundColor: color,
          }}
        >
          {Logo && <Logo width={"25px"} />}
          {Logo && <Spacer x={0.3} />}
          {text}
        </Btn>
      </a>
      <br />
    </>
  );
}
