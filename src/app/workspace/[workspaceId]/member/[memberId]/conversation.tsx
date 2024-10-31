import { Loader } from "lucide-react";

import { useMemberId } from "@/hooks/use-member-id";

import { useGetMember } from "@/features/members/api/use-get-member";
import { useGetMessages } from "@/features/messages/api/use-get-messages";

import { MessageList } from "@/components/message-list";

import Header from "./header";
import { ChatInput } from "./chat-input";

import { Id } from "../../../../../../convex/_generated/dataModel";

interface ConversationProps {
    id: Id<"conversations">;
};

export const Conversation = ({ id }: ConversationProps) => {
    const memberId = useMemberId();

    const { data: member, isLoading: memberLoading } = useGetMember({ id: memberId});
    const { results, status, loadMore } = useGetMessages({
        conversationId: id,
    });

    if (memberLoading || status === "LoadingFirstPage") {
        return (
            <div className="h-full flex items-center justify-center">
                <Loader className="size-6 animate-spin text-muted-foreground" />
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            <Header 
                memberName={Array.isArray(member) ? undefined : member?.user.name}
                memberImage={Array.isArray(member) ? undefined : member?.user.image}
                onClick={() => {}}
            />
            <MessageList 
                data={results}
                variant="conversation"
                memberImage={Array.isArray(member) ? undefined : member?.user.image}
                memberName={Array.isArray(member) ? undefined : member?.user.name}
                loadMore={loadMore}
                isLoadingMore={status === "LoadingMore"}
                canLoadMore={status === "CanLoadMore"}
            />
            <ChatInput
                placeholder={`Message ${Array.isArray(member) ? '' : member?.user.name}`} 
                conversationId={id}
            />
        </div>
    );
};