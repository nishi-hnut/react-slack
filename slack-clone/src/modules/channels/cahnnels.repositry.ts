import api from "../../lib/api";
import { Channel } from "./channels.entity";

export const channelRepository = {
  async create(workspaceId: string, name: string): Promise<Channel> {
    const result = await api.post("/channels", {
      workspaceId,
      name,
    });
    return new Channel(result.data);
  },
};
