//Here the command starts
module.exports = {
    //definition
    name: "eBay", //the name of the command 
    category: "eBay", //the category this will be listed at, for the help cmd
    aliases: ["ebay", "eBay"], //every parameter can be an alias
    cooldown: 2, //this will set it to a 2 second cooldown
    usage: "eBay <Text>", //this is for the help command for EACH cmd
    description: "Searches eBay for the specified product listing", //the description of the command

    //running the command with the parameters: client, message, args, user, text, prefix
    run: async (client, message, args, user, text, prefix) => {
        
        message.channel.send("Showing search results for " + text + ": \n") //you could also do:  message.channel.send(args.join(" "))
        
    }
}