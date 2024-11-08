import { useState } from "react";
import { ChevronDownIcon, ListFilter, SquarePen } from "lucide-react";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { InviteModal } from "./invite-modal";
import { PreferencesModal } from "./preferences-modal";
import { Doc } from "../../../../convex/_generated/dataModel";

interface WorkspaceHeaderProps {
    workspace: Doc<"workspaces">;
    isAdmin: boolean;
};

export const WorkspaceHeader = ({ workspace, isAdmin }: WorkspaceHeaderProps) => {
    const [inviteOpen, setInviteOpen] = useState(false);
    const [preferencesOpen, setPreferencesOpen] = useState(false);

    return (
        <>
            <InviteModal
                open={inviteOpen}
                setOpen={setInviteOpen}
                name={workspace.name}
                joinCode={workspace.joinCode}
            />
            <PreferencesModal
                open={preferencesOpen}
                setOpen={setPreferencesOpen}
                initialValue={workspace.name}
            />
            <div className="flex items-center justify-between px-4 h-[49px] gap-0.5">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="transparent"
                            className="font-semibold text-lg w-auto p-1.5 overflow-hidden"
                            size="sm"
                        >
                            <span className="truncate">{workspace.name}</span>
                            <ChevronDownIcon className="size-4 ml-1 shrink-0" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="bottom" align="start" className="w-64">
                        <DropdownMenuItem
                            className="cursor-pointer capitalize"
                        >
                            <div className="size-9 relative overflow-hidden bg-[#616061] text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2">
                                {workspace.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="font-bold">{workspace.name}</p>
                                <p className="text-xs text-muted-foreground">Workspace atual</p>
                            </div>
                        </DropdownMenuItem>
                        {isAdmin && (
                            <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    className="cursor-pointer py-2"
                                    onClick={() => setInviteOpen(true)}
                                >
                                    <Hint label={`Convidar pessoas para a equipe ${workspace.name}`}>
                                        <span className="truncate">Convidar pessoas para a equipe {workspace.name}</span>
                                    </Hint>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    className="cursor-pointer py-2"
                                    onClick={() => setPreferencesOpen(true)}
                                >
                                    Configurações
                                </DropdownMenuItem>
                            </>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
};