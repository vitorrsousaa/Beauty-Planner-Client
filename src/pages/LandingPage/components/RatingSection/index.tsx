import RatingItem from "../RatingItem";

import StarIcon from "../../../../assets/icons/StarIcon";
import GrowthIcon from "../../../../assets/icons/GrowthIcon";
import NumberOneIcon from "../../../../assets/icons/NumberOneIcon";
import CommentsIcon from "../../../../assets/icons/CommentsIcon";
import PlayIcon from "../../../../assets/icons/PlayIcon";
import LockIcon from "../../../../assets/icons/LockIcon";

import { RatingSectionColumn } from "./styles";

function RatingSection() {
  return (
    <RatingSectionColumn>
      <RatingItem
        title="MAIS QUALIDADE"
        text="Encontre os melhores profissionais da sua região com apenas alguns
          cliques."
      >
        <GrowthIcon />
      </RatingItem>

      <RatingItem
        title="AVALIE OS PROFISSIONAIS"
        text="Após o serviço, avalie o profissional com uma nota de acordo com
            o desempenho."
      >
        <StarIcon />
      </RatingItem>

      <RatingItem
        title="VOCÊ COMO PRIORIDADE"
        text="Você é a nossa principal prioridade. Agende seu horário e seja
            atendido na hora marcada!"
      >
        <NumberOneIcon />
      </RatingItem>

      <RatingItem
        title="ADICIONE COMENTÁRIOS"
        text="Comente sobre o desempenhos dos profissionais e leia outras
            avaliações."
      >
        <CommentsIcon />
      </RatingItem>

      <RatingItem
        title="GANHE TEMPO"
        text="Agende os serviços no horário que desejar, sem precisar sair do
            lugar, e com três cliques."
      >
        <PlayIcon />
      </RatingItem>

      <RatingItem
        title="MAIOR SEGURANÇA"
        text="Pode deixar seu dinheiro em casa, e andar tranquilo. Pois tudo
            será cobrado no cartão de crédito!"
      >
        <LockIcon />
      </RatingItem>
    </RatingSectionColumn>
  );
}

export default RatingSection;
