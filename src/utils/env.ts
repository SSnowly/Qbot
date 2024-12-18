import { Client, GatewayIntentBits } from '@discordjs/core';
import { REST } from '@discordjs/rest';
import { WebSocketManager } from '@discordjs/ws';
import { env } from 'node:process';

export const botToken = env.BOT_TOKEN ?? '';
export const guildId = env.GUILD_ID ?? '';
export const ocrSpaceKey = env.OCR_SPACE_KEY ?? '';
export const ocrSpaceUrl = env.OCR_SPACE_API ?? '';
export const rest = new REST({ version: '10' }).setToken(botToken);
export const gateway = new WebSocketManager({
    token: botToken,
    intents: GatewayIntentBits.GuildMessages | GatewayIntentBits.MessageContent,
    rest,
});

export const client = new Client({ rest, gateway });
export const api = client.api;
