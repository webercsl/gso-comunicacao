import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useCurrentUser } from "@/features/auth/api/use-current-user";

interface ConversationHeroProps {
    name?: string;
    image?: string;
};

export const ConversationHero = ({ name = "Member", image}: ConversationHeroProps) => {
    const nameParts = name.split(" ");
    const avatarFallback = nameParts.length > 1 
        ? nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase()
        : nameParts[0].charAt(0).toUpperCase();
    const { data } = useCurrentUser();

    const isSelfConversation = data && data.name === name;

    return (
        <div className="mt-[88px] mx-5 mb-4">
            <div className="flex items-center gap-x-1 mb-2">
                <Avatar className="size-24 mr-2">
                    <AvatarImage src={image} alt={name} />
                    <AvatarFallback className="text-5xl">{avatarFallback}</AvatarFallback>
                </Avatar>
                {isSelfConversation && (
                <p className="text-2xl font-bold">
                    {name} <span className="text-lg">(você)</span>
                </p>
                )}
                {!isSelfConversation && (
                <p className="text-2xl font-bold">
                    {name}
                </p>
                )}
            </div>
            {isSelfConversation && (
                <p className="text-sm font-normal text-slate-600 mb-4 mt-4">
                    <strong>Este é seu espaço.</strong> Faça rascunhos, listas de coisas a fazer ou mantenha links e arquivos à mão. Também é possível falar sozinho aqui, mas não vá deixar você no vácuo.
                </p>
            )}
            {!isSelfConversation && (
            <p className="text-sm font-normal text-slate-600 mb-4 mt-4">
                Esta conversa é apenas entre você e <strong>{name}</strong>
            </p>
            )}
        </div>
    )
};