## Grinder Commands

The grinder system in Xiao Marie allows you to manage different tiers of grinders in your Discord server. Each tier has specific commands and configurations.

### Grinder Low Tier

**Alias:** `{grlowCmdName}`  
Price is set to 3,000,000.

### Grinder Mid Tier

**Alias:** `{grmidCmdName}`  
Price is set to {grmidPrice}.

### Grinder High Tier

**Alias:** `{grhighCmdName}`  
Price is set to {grhighPrice}.

### Subcommands

- `list` : `{prefix}<alias> list` - Lists the info for grinders in the specified tier.
- `check` : `{prefix}<alias> check <@user>` - Lists grinder info for a member.
- `add/remove` : `{prefix}<alias> add/remove <@user> <pmt>` - Add/remove a grinder.
- `dono add/remove` : `{prefix}<alias> dono add/remove <@user> <amt>` - Add or remove payment.

### Break Commands

- `list` : `{prefix}break list` - Lists all users on break.
- `check` : `{prefix}break check <@user>` - Individual break info.
- `start` : `{prefix}break start <@user> <alias> <days>` - Must be between 3-24 days.
- `end` : `{prefix}break end <@user> <alias>` - Ends a break early.

### Other Commands

- `promote` : `{prefix}promote <@user> <alias>` - Promote a user to a higher tier.
- `demote` : `{prefix}demote <@user> <alias>` - Demote a user to a lower tier.
