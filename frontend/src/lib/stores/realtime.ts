import type { Socket } from "socket.io-client";
import io from "socket.io-client";

import { writable } from "svelte/store";

export interface RealtimeStore {
	connection: Socket | null;
	startConversationMessage: string | null;
}

export const realtimeStore = writable<RealtimeStore>({
	connection: null,
	startConversationMessage: null
});

export const openRealtimeConnection = async (projectId: string, agentId: string, idToken: string) => {
	const connection = io('/frontend', {
		extraHeaders: {
			'x-agentlabs-project-id': projectId,
			'x-agentlabs-agent-id': agentId,
			'authorization': `Bearer ${idToken}`
		}
	})

	connection.connect()

	await new Promise<void>((resolve) => {
		connection.on('connect', () => {
			resolve();
		})
	})

	realtimeStore.update((store) => {
		store.connection = connection;

		return store;
	});


	return connection;
}
