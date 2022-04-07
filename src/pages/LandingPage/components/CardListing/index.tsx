import CardUse from "../CardUse";

import LocationIcon from "../../../../assets/icons/LocationIcon";
import Choose from "../../../../assets/icons/Choose";
import Travel from "../../../../assets/icons/Travel";

function CardListing() {
  return (
    <>
      <CardUse
        step="Passo 1"
        title="INFORME SUA LOCALIZAÇÃO"
        text="Com a sua localização conseguimos encontrar os profissionais de beleza
        mais próximos de você."
      >
        <LocationIcon />
      </CardUse>

      <CardUse
        step="Passo 2"
        title="ESCOLHA O SERVIÇO DESEJADO E AGENDE UM HORÁRIO"
        text="O Beauty Planner realiza o agendamento, te deixando cada vez mais
          próximo do seu profissional de beleza."
      >
        <Choose />
      </CardUse>

      <CardUse
        step="Passo 3"
        title="PRONTO!"
        text="Basta você se deslocar para o local escolhido na hora agendada e
          cuidar da sua beleza."
      >
        <Travel />
      </CardUse>
    </>
  );
}

export default CardListing;
