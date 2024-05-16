import { IParticipant } from "../../types";

interface ParticipantListItemProps {
  participant: IParticipant;
}

export const ParticipantsListItem: React.FC<ParticipantListItemProps> = ({
  participant,
}) => {
  return (
    <li className="flex flex-col justify-between text-[#d5d8d8] p-[18px] text-[20px] bg-[#0e223b]  rounded-[18px] w-[100%] md:w-[342px] lg:w-[362px] lg:p-[24px] shadow-custom-inset">
      <p>{participant.name}</p>
      <p>{participant.email}</p>
    </li>
  );
};
