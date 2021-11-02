import SignForm from "../components/SignForm";

const signin = () => {
  const inputs = [
    {
      type: "text",
      placeholder: "Email",
    },
    {
      type: "password",
      placeholder: "Senha",
    },
  ];

  const footer = {
    redirectTo: "/signup",
    text: "Não possui conta?",
    textLink: "Registrar",
  };

  return (
    <SignForm
      theme="signin"
      title="Que bom te ver de volta 💜"
      subtitle="Comece a pesquisar os novos eventos adicionados em nosso calendário público"
      inputs={inputs}
      newsletter={false}
      buttonText="Entrar"
      footer={footer}
    />
  );
};

export default signin;
