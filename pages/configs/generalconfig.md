---
title: Setup Bot Config Command
---

# Setup Bot Config Command

The **`/setup-bot-config`** slash command is designed for server administrators to configure various settings for the bot. This command allows you to set up different roles and prefixes required for the bot to function optimally.

## How to Use the Command

### Step 1: Invoke the Command

Use the slash command interface in your Discord server. Type **`/setup-bot-config`** and select it from the command list.

### Step 2: Fill in the Options

When you select the command, you will be prompted to fill in several options:

1. **`prefix`** (required): A prefix for the bot.
2. **`bot-mods-ids`** (required): Comma-separated role IDs for bot moderators.
3. **`event-managers-ids`** (optional): Comma-separated role IDs for event managers.
4. **`rc-perk-roles-ids`** (optional): Comma-separated role IDs for Auto Role Color Chang perk roles.
5. **`rm-perk-roles-ids`** (optional): Comma-separated role IDs for Reminder perk roles.
6. **`afk-perk-roles-ids`** (optional): Comma-separated role IDs for AFK perk roles.
7. **`hl-perk-roles-ids`** (optional): Comma-separated role IDs for Highlight perk roles.
8. **`snipe-perk-roles-ids`** (optional): Comma-separated role IDs for Snipe perk roles.

### Example Usage

Here is an example of how to use the command with the options:

1. Open the slash command menu and select `/setup-bot-config`.
2. Fill in the required and optional fields as shown below:


**`/setup-bot-config prefix`**:`!` **`bot-mods-ids`**:`123456789012345678, 987654321098765432` **`event-managers-ids`**:`234567890123456789` **`rc-perk-roles-ids`**:`2345678901234567890`