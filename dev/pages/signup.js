import SignForm from "../components/SignForm";

const signup = () => {
  const inputs = [
    {
      type: "text",
      placeholder: "Nome completo",
    },
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
    redirectTo: "/signin",
    text: "Já possui conta?",
    textLink: "Entrar",
  };

  return (
    <SignForm
      theme="signup"
      title="Seja um colaborador 💙"
      subtitle="Comece agora a contribuir para o calendário público de eventos"
      inputs={inputs}
      newsletter={true}
      buttonText="Criar conta"
      footer={footer}
    />
  );
};

export default signup;
