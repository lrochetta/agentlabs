import { Module } from '@nestjs/common';
import { ProjectsModule } from 'src/projects/projects.module';
import { AgentChatConversationsController } from './agent-chat-conversations/agent-chat-conversations.controller';
import { AgentChatConversationsService } from './agent-chat-conversations/agent-chat-conversations.service';
import { AgentChatMessagesController } from './agent-chat-messages/agent-chat-messages.controller';
import { AgentChatMessagesService } from './agent-chat-messages/agent-chat-messages.service';

@Module({
  imports: [ProjectsModule],
  providers: [AgentChatConversationsService, AgentChatMessagesService],
  exports: [AgentChatConversationsService, AgentChatMessagesService],
  controllers: [AgentChatConversationsController, AgentChatMessagesController],
})
export class AgentChatModule {}
