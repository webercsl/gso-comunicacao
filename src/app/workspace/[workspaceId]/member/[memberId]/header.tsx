import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaVideo } from "react-icons/fa";
import { Hint } from "@/components/hint";

interface HeaderProps {
    memberName?: string;
    memberImage?: string;
    onClick?: () => void;
};

export const Header = ({
    memberName = "Member",
    memberImage,
    onClick,
}: HeaderProps) => {
    const nameParts = memberName.split(" ");
    const avatarFallback = nameParts.length > 1 
        ? nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase()
        : nameParts[0].charAt(0).toUpperCase();

    const handleGoogleMeetCall = () => {
        window.open("https://meet.google.com/new", "_blank");
    };

    return (
        <div className="bg-white border-b h-[49px] flex items-center px-4 overflow-hidden shadow-xl">
            <Hint label="Mostrar perfil">
                <Button
                    variant="ghost"
                    className="text-lg font-semibold px-2 overflow-hidden w-auto"
                    size="sm"
                    onClick={onClick}
                >
                    <Avatar className="size-6 mr-2">
                        <AvatarImage src={memberImage} />
                        <AvatarFallback className="text-xs">
                            {avatarFallback}
                        </AvatarFallback>
                    </Avatar>
                    <span className="truncate">{memberName}</span>
                </Button>
            </Hint>
            <Hint label="Iniciar chamada no Google Meet">
            <Button
                variant="ghost"
                className="ml-auto"
                size="sm"
                onClick={handleGoogleMeetCall}
            >
                <FaVideo className="mr-2" />
                Reunião
            </Button>
            </Hint>
        </div>
    );
};