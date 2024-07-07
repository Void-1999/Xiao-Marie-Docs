## Giveaway Configurations

### Overview

This section covers the configurations for automated user giveaways. To use these commands, you must have administrative permissions.

### Requirements

- Must have the administration permission.
- Slash Command: `/gaw-configure`

### Description

In the following sections, you will see subcommands of the `/gaw-configure` slash command.

**Note:** The terms "big" and "small" in these configurations refer to the value of the giveaways. If the giveaway's value is between 5 million to 20 million, it is considered a small giveaway. If the value surpasses 20 million, it is considered a big giveaway. Giveaways with a value lower than 5 million will not be managed by the bot.

### Important Note

**Note!! Read this!**  
Remember, the big and small in these configurations refer to their value. Read the description for further details.

### Toggle Subcommands

Use `true` or `false` for these subcommands:

- **`/toggle-ping`**  
  When set to `true`, it will automatically ping the giveaway role when a giveaway starts.  
  Example: `/toggle-ping true`

- **`/dm-host`**  
  When set to `true`, it will send an embed to the host when the giveaway ends.  
  Example: `/dm-host true`

- **`/dm-winner`**  
  When set to `true`, it will send a winning embed to the winner.  
  Example: `/dm-winner true`

### Role Subcommands

Use `role-id` for these subcommands:

- **`/big-ping-role`**  
  Provide the role ID that will be pinged for big giveaways.  
  Example: `/big-ping-role 123456789012345678`

- **`/blacklist-roles`**  
  Add or remove roles from the blacklist. Provide role IDs separated by commas.  
  Example: `/gaw-configure add-roles: 1099599882374885376,1097644857385824366,1095700166020960358`

- **`/bypass-roles`**  
  Add or remove bypass roles into the system, following the same format as blacklist roles.  
  Example: `/gaw-configure bypass-roles: 1099599882374885376,1097644857385824366`

### Channel Subcommands

Use `channel-ids` for these subcommands:

- **`/big-giveaways-channel-id`**  
  Provide the ID of the channel where you want the big giveaways to be sent.  
  Example: `/big-giveaways-channel-id 123456789012345678`

- **`/small-giveaways-channel-id`**  
  Provide the ID of the channel where you want the small giveaways to be sent.  
  Example: `/small-giveaways-channel-id 123456789012345678`

- **`/payout-channel-id`**  
  Provide the ID of the channel where you want winner payout embeds to be sent.  
  Example: `/payout-channel-id 123456789012345678`

- **`/log-channel-id`**  
  Provide the ID of the channel where you want logs of the giveaway joins to be sent.  
  Example: `/log-channel-id 123456789012345678`

### Other/Optional Configures

- **`/multi-roles`**  
  Add multipliers to roles. Use the format `roleId-multi`.  
  Example: `/gaw-configure multi-roles roles: 1099599882374885376-2,1097644857385824366-4`

- **`/gaw-reaction`**  
  Provide the ID of an emoji you want to use for your giveaways.  
  Example: `/gaw-reaction 123456789012345678`
