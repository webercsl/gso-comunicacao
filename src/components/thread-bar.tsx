import { ChevronRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ptBR } from "date-fns/locale";

interface ThreadBarProps {
    count?: number;
    image?: string;
    timestamp?: number;
    name?: string;
    onClick?: () => void;
};

export const ThreadBar = ({
    count,
    image,
    timestamp,
    name = "Member",
    onClick,
}: ThreadBarProps) => {
    const nameParts = name.split(" ");
    const avatarFallback = nameParts.length > 1 
        ? nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase()
        : nameParts[0].charAt(0).toUpperCase();

    if (!count || !timestamp) {
        return null;
    }

    return (
        <button
            onClick={onClick}
            className="p-1 rounded-md hover:bg-white border border-transparent hover:border-border flex items-center justify-start group/thread-bar transition max-w-[600px]"
        >
            <div className="flex items-center gap-2 overflow-hidden">
                <Avatar className="size-6 shrink-0">
                    <AvatarImage src={image} />
                    <AvatarFallback>
                        {avatarFallback}
                    </AvatarFallback>
                </Avatar>
                <span className="text-xs text-teal-900 hover:underline font-bold truncate">
                    {count} {count > 1 ? "respostas" : "resposta"}
                </span>
                <span className="text-xs text-muted-foreground truncate group-hover/thread-bar:hidden block">
                    Última resposta {formatDistanceToNow(timestamp, { addSuffix: true, locale: ptBR })}
                </span>
                <span className="text-xs text-muted-foreground truncate group-hover/thread-bar:block hidden">
                    Ver conversa
                </span>
            </div>
            <ChevronRight className="size-4 text-muted-foreground ml-auto opacity-0 group-hover/thread-bar:opacity-100 transition shrink-0" />
        </button>
    );
};