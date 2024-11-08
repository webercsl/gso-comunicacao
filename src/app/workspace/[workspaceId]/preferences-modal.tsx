import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TrashIcon } from "lucide-react";

import { useUpdateWorkspace } from "@/features/workspaces/api/use-update-workspace";
import { useRemoveWorkspace } from "@/features/workspaces/api/use-remove-workspace";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useConfirm } from "@/hooks/use-confirm";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog";

interface PreferencesModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    initialValue: string;
};

export const PreferencesModal = ({
    open,
    setOpen,
    initialValue,
}: PreferencesModalProps) => {
    const router = useRouter();
    const workspaceId = useWorkspaceId();
    const [ConfirmDialog, confirm] = useConfirm(
        "Você tem certeza?",
        "Essa ação é irreversível."
    );

    const [value, setValue] = useState(initialValue);
    const [editOpen, setEditOpen] = useState(false);

    const { mutate: updateWorkspace, isPending: isUpdatingWorkspace } = useUpdateWorkspace();
    const { mutate: removeWorkspace, isPending: isRemovingWorkspace } = useRemoveWorkspace();

    const handleRemove = async () => {
        const ok = await confirm();

        if (!ok) return;

        removeWorkspace({
            id: workspaceId
        }, {
            onSuccess: () => {
                toast.success("Workspace excluído");
                router.replace("/");
            },
            onError: () => {
                toast.error("Falha ao excluir Workspace");
            }
        })
    };

    const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        updateWorkspace({
            id: workspaceId,
            name: value,
        }, {
            onSuccess: () => {
                toast.success("Workspace atualizado");
                setEditOpen(false);
            },
            onError: () => {
                toast.error("Falha ao atualizar Workspace");
            }
        })
    }

    return (
        <>
            <ConfirmDialog />
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="p-0 bg-gray-50 overflow-hidden">
                    <DialogHeader className="p-4 border-b bg-white">
                        <DialogTitle>
                            {value}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="px-4 pb-4 flex flex-col gap-y-2">
                        <Dialog open={editOpen} onOpenChange={setEditOpen} >
                            <DialogTrigger asChild>
                                <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-200">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold">
                                            Nome do Workspace
                                        </p>
                                        <p className="text-sm text-[#1264a3] hover:underline font-semibold">
                                            Editar
                                        </p>
                                    </div>
                                    <p className="text-sm">
                                        {value}
                                    </p>
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Renomeie este Workspace</DialogTitle>
                                </DialogHeader>
                                <form className="space-y-4" onSubmit={handleEdit}>
                                    <Input
                                        value={value}
                                        disabled={isUpdatingWorkspace}
                                        onChange={(e) => setValue(e.target.value)}
                                        required
                                        autoFocus
                                        minLength={3}
                                        maxLength={80}
                                        placeholder="Ex. nome do Workspace: 'Trabalho', 'Anotações'"
                                    />
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant="outline" disabled={isUpdatingWorkspace}>
                                                Cancelar
                                            </Button>
                                        </DialogClose>
                                        <Button disabled={isUpdatingWorkspace}>Salvar</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                        <button
                            disabled={isRemovingWorkspace}
                            onClick={handleRemove}
                            className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-200 text-rose-600"
                        >
                            <TrashIcon className="size-4" />
                            <p className="text-sm font-semibold">Excluir Workspace</p>
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};