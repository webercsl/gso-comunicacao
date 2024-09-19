import { useState } from "react";
import { TrashIcon } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog";

interface HeaderProps {
    title: string;
};

export const Header = ({ title }: HeaderProps) => {
    const [value, setValue] = useState(title);
    const [editOpen, setEditOpen] = useState(false);

    return (
        <div className="bg-white border-b h-[49px] flex items-center px-4 overflow-hidden">
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="ghost"
                        className="text-lg font-semibold px-2 overflow-hidden w-auto"
                    >
                        <span className="truncate"># {title}</span>
                        <FaChevronDown className="size-2.5 ml-2" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="p-0 bg-gray-50 overflow-hidden">
                    <DialogHeader className="p-4 border-b bg-white">
                        <DialogTitle>
                            # {title}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="px-4 pb-4 flex flex-col gap-y-2">
                        <Dialog open={editOpen} onOpenChange={setEditOpen}>
                            <div className="px5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold">Channel name</p>
                                    <p className="text-sm text-[#1264a3] hover:underline font-semibold">
                                        Edit
                                    </p>
                                </div>
                                <p className="text-sm"># {title}</p>
                            </div>
                        </Dialog>
                        <button
                            className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg cursor-pointer border hover:bg-gray-50 text-rose-600"
                        >
                            <TrashIcon className="size-4" />
                            <p className="text-sm font-semibold">Delete channel</p>
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Header;