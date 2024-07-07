### Grinder Configurations

The subscription configurations allow you to set up various subscription tiers and their related commands.

#### calculateDueDate

Set the value to the price of your grinder tier. For example, if your lowest tier is 3,000,000 per day:
`{prefix}settierlow calculateDueDate 3,000,000`
**Note:** Do not use values such as 3m, 5m. Write it wholly as suggested.

#### prefix

Set the prefix for your tier:
`{prefix}settierlow prefix <newPrefix>`

#### GrinderRoleId

Set your tier's grinder role:
`{prefix}settiermid GrinderRoleId <roleid>`

#### baseGrinderRoleId

Set a common or base grinder role that all tiers have:
`{prefix}settiermid baseGrinderRoleId <roleid>`

#### logChannelId

Set the log channel for all important embeds of your grinder tier:
`{prefix}settiermid logChannelId <channel-id>`

#### paymentChannelId

Set the payment channel for all important embeds of your grinder tier. The auto donation feature will only detect donations in this channel:
`{prefix}settiermid paymentChannelId <channel-id>`

#### embedName

Set your tier's title:
`{prefix}settierhigh embedName Void's Pog Grinders`

#### commandName

Change the command name of your tier:
`{prefix}settiermid commandName wgrinders`
After setting a value, use the new command name:
`{prefix}wgrinders check @void`

**Note:** All subcommands need to be set for each tier separately.
