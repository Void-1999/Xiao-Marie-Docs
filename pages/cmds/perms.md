---
title: Manage Channel Permissions
description: Manage permissions of channels for roles or users
---

# `/manage-channel-perms`

## Description

The `/manage-channel-perms` command allows server administrators to manage the permissions of specified channels for a role or user.

## Usage

- **Command:** `/manage-channel-perms`
- **Options:**
  - `type` (String, required): Specify whether to manage permissions for a role or user. Choices: `role`, `user`.
  - `id` (String, required): The ID of the role or user.
  - `channel-ids` (String, required): Comma-separated channel IDs.
  - Permission Options (Boolean, optional):
    - `view-channel`
    - `manage-channels`
    - `manage-webhooks`
    - `send-messages`
    - `send-messages-in-thread`
    - `create-public-threads`
    - `create-private-threads`
    - `embed-links`
    - `attach-files`
    - `add-reactions`
    - `use-external-emojis`
    - `use-external-stickers`
    - `mention-everyone`
    - `manage-messages`
    - `manage-threads`
    - `read-message-history`
    - `use-application-commands`
    - `use-embedded-activities`
    - `send-voice-message`
    - `send-polls`

## Example

- **Command:** `/manage-channel-perms`
  - `type: role`
  - `id: 123456789012345678`
  - `channel-ids: 987654321098765432,876543210987654321`
  - `view-channel: true`
  - `send-messages: true`

**Output:**
```
Permissions overwrites for the role <@&123456789012345678> updated successfully:

Channel: <channel name>
Permissions: ViewChannel, SendMessages
```


## Permissions

To use this command, you must be the bot owner or have the Administrator permission in the server.


## Details

This command manages the permissions for specified channels for a role or user. You can enable or disable various permissions using the available options. The command will provide log on the updated permissions for each channel.


## Notes

- Ensure the `id` provided corresponds to the correct role or user.
- The `channel-ids` should be valid and accessible channels within the server.
- Only specify the permissions you wish to change; leave others unset to retain their current values.
